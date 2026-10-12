/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useMemo } from "react";
import { useTheme } from "@mui/material";
import moment from "moment-timezone";
import { Typography } from "../Typography/Typography";

export interface SLAProps {
	raisedDateTime: string | Date;
	dueDateTime: string | Date;
	responseDueDateTime?: string | Date;
	completedDateTime?: string | Date;
	isOpen?: boolean;
	isFulfilled?: boolean;
	detail?: boolean;
	fulfilledLabel?: string;
	withinSlaThresholdHours?: number;
}

// Renders the largest whole unit only.
// Examples:
// "4 day(s)"
// "3 hour(s)"
// "45 min(s)"
const formatDuration = (totalMinutesInput: number): string => {
	const totalMinutes = Math.max(0, Math.round(totalMinutesInput));

	const days = Math.floor(totalMinutes / 1440);

	if (days >= 1) {
		return `${days} day(s)`;
	}

	const hours = Math.floor(totalMinutes / 60);

	if (hours >= 1) {
		return `${hours} hour(s)`;
	}

	return `${totalMinutes} min(s)`;
};

export const SLA: FC<SLAProps> = ({
	raisedDateTime,
	dueDateTime,
	responseDueDateTime,
	completedDateTime,
	isOpen = false,
	isFulfilled = false,
	detail = false,
	fulfilledLabel = "Fulfilled",
	withinSlaThresholdHours,
}) => {
	const theme = useTheme() as any;
	const tokens = theme?.palette?.sla;

	const { clampedPercentage, message, state } = useMemo(() => {
		const raised = moment(raisedDateTime);
		const now = moment.utc();

		const buildRemainingMessage = (
			remainingMinutes: number,
		): ReactNode => {
			if (remainingMinutes < 0) {
				return `${formatDuration(-remainingMinutes)} overdue`;
			}

			if (
				withinSlaThresholdHours != null &&
				remainingMinutes / 60 >= withinSlaThresholdHours
			) {
				return "Within SLA";
			}

			return formatDuration(remainingMinutes);
		};

		let numerator: number;
		let denominator: number;
		let msg: ReactNode;

		if (isFulfilled) {
			const completed = moment(completedDateTime);
			const due = moment(dueDateTime);

			numerator = completed.diff(raised, "minutes");
			denominator = due.diff(raised, "minutes");

			msg = (
				<Typography
					component="span"
					css={tokens?.fulfilledMessageStyle}
				>
					{fulfilledLabel}
				</Typography>
			);
		} else if (isOpen) {
			const responseDue = moment(responseDueDateTime ?? dueDateTime);

			numerator = now.diff(raised, "minutes");
			denominator = responseDue.diff(raised, "minutes");

			const remaining = responseDue.diff(now, "minutes");

			msg = buildRemainingMessage(remaining);
		} else {
			const due = moment(dueDateTime);

			numerator = now.diff(raised, "minutes");
			denominator = due.diff(raised, "minutes");

			const remaining = due.diff(now, "minutes");

			msg = buildRemainingMessage(remaining);
		}

		const percentage =
			denominator > 0
				? Math.trunc((numerator / denominator) * 100)
				: 0;

		const clamped = Math.min(Math.max(percentage, 0), 100);

		/*
		 * State is based on elapsed percentage.
		 *
		 * < 50  = Green
		 * < 80  = Amber
		 * >= 80 = Soft Red
		 */
		const st: "fulfilled" | "low" | "medium" | "critical" = isFulfilled
			? "fulfilled"
			: clamped < 50
			? "low"
			: clamped < 80
			? "medium"
			: "critical";

		return {
			clampedPercentage: clamped,
			message: msg,
			state: st,
		};
	}, [
		raisedDateTime,
		dueDateTime,
		responseDueDateTime,
		completedDateTime,
		isOpen,
		isFulfilled,
		fulfilledLabel,
		withinSlaThresholdHours,
		tokens,
	]);

	return (
		<div css={tokens?.containerStyle}>
			<div css={tokens?.contentStyle}>
				{/* SLA MESSAGE */}
				<Typography
					css={tokens?.messageStyle?.(
						detail,
						theme?.palette?.primary?.contrastText,
					)}
				>
					{message}
				</Typography>

				{/* SLA TRACK */}
				<div css={tokens?.trackStyle}>
					{/* SLA PROGRESS BAR */}
					<div css={tokens?.barStyle?.(clampedPercentage, state)} />
				</div>
			</div>
		</div>
	);
};

export default SLA;

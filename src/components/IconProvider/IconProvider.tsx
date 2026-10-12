import { FC } from "react";
import SvgIcons from "./icons/Icons";

export const IconProvider: FC = () => (
	<div
		aria-hidden="true"
		css={{
			display: "none",
			position: "absolute",
			width: 0,
			height: 0,
			overflow: "hidden",
		}}
	>
		<SvgIcons />
	</div>
);

export default IconProvider;

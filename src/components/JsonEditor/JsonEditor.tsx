/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { DragAndDropJsonElement } from "./DragAndDropJsonElement";
import { JsonElement } from "./JsonElement";

/* Props for Confirm component - only these attributes to be allowed */
export interface Props {
	json: object;
	onChange?(json: object): any;
	exp: string;
}

// Loader Component
export const JsonEditor: FC<Props> = ({ onChange, json, exp }) => {
	return <DragAndDropJsonElement json={json} onChange={onChange} exp={exp} />;
};

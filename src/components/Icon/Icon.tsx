import { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { IconType } from './IconType';

export interface Props {
    color?:
    | 'action'
    | 'disabled'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary';
    fontSize?: 'large' | 'medium' | 'small' | 'inherit' | undefined;
    htmlColor?: string;
    name: IconType

}

export const Icon: FC<Props> = ({
    name = 'edit',
    fontSize = 'inherit',
    color,
    htmlColor,
}) => {
    return (
        <SvgIcon fontSize={fontSize} color={color} htmlColor={htmlColor}>
            <use xlinkHref={`#${name}`} />
        </SvgIcon>
    );
};

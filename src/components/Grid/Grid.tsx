import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export const Grid: React.FC<MuiGridProps> = (Props) => {
    const { children, ...args } = Props;
    return <MuiGrid {...args}>{children}</MuiGrid>;
};

import { Meta, StoryObj } from '@storybook/react';
import { GroupBy, GroupByProps } from './GroupBy';

const meta: Meta = {
  title: 'Components/GroupBy',
  component: GroupBy
};

export default meta;
type Story = StoryObj<typeof meta>;

/* GroupBy is controlled, so the story just logs what the consumer would store */
export const Default: Story = (args: GroupByProps) => {
  const onSetActiveGroup = (value: any) => {
    console.log('activeGroup', typeof value === 'function' ? value(args.activeGroup || []) : value);
  };
  return <GroupBy {...args} setActiveGroup={onSetActiveGroup} />
}

Default.args = {
  label: 'Group By',
  activeGroup: ['riskScore'],
  options: [
    { label: 'Exposure Risk', value: 'riskScore' },
    { label: 'Entry Asset', value: 'entryPointAssetUid' },
    { label: 'Target Asset', value: 'destinationAssetUid' },
    { label: 'Depth', value: 'pathLength' },
  ],
};

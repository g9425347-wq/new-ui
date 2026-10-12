import { Meta, StoryObj } from '@storybook/react';
import { SLA, SLAProps } from './SLA';

const meta: Meta = {
  title: 'Components/SLA',
  component: SLA,
};

export default meta;

const now = new Date();
const hoursFromNow = (hours: number) => new Date(now.getTime() + hours * 60 * 60 * 1000);
const hoursAgo = (hours: number) => new Date(now.getTime() - hours * 60 * 60 * 1000);

export const OnTrack: StoryObj<SLAProps> = (args: SLAProps) => <SLA {...args} />;
OnTrack.args = {
  raisedDateTime: hoursAgo(4),
  dueDateTime: hoursFromNow(4),
  isOpen: true,
  responseDueDateTime: hoursFromNow(4),
};

export const Breached: StoryObj<SLAProps> = (args: SLAProps) => <SLA {...args} />;
Breached.args = {
  raisedDateTime: hoursAgo(30),
  dueDateTime: hoursAgo(6),
};

export const Fulfilled: StoryObj<SLAProps> = (args: SLAProps) => <SLA {...args} />;
Fulfilled.args = {
  raisedDateTime: hoursAgo(20),
  dueDateTime: hoursAgo(2),
  completedDateTime: hoursAgo(5),
  isFulfilled: true,
};

export const WithinSlaThreshold: StoryObj<SLAProps> = (args: SLAProps) => <SLA {...args} />;
WithinSlaThreshold.args = {
  raisedDateTime: hoursAgo(2),
  dueDateTime: hoursFromNow(48),
  withinSlaThresholdHours: 24,
};

export const DetailVariant: StoryObj<SLAProps> = (args: SLAProps) => (
  <div style={{ background: '#0f172a', padding: '24px', width: '220px' }}>
    <SLA {...args} />
  </div>
);
DetailVariant.args = {
  raisedDateTime: hoursAgo(10),
  dueDateTime: hoursFromNow(2),
  detail: true,
};

// TEMP debug story to reproduce a 200px DataGrid column ('sla' field) with a long overdue message
export const GridCellRepro: StoryObj<SLAProps> = (args: SLAProps) => (
  <div style={{ width: '200px', border: '1px solid red', padding: '0 10px', boxSizing: 'border-box', height: '36px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <SLA {...args} />
  </div>
);
GridCellRepro.args = {
  raisedDateTime: new Date(now.getTime() - 40 * 24 * 60 * 60 * 1000),
  dueDateTime: new Date(now.getTime() - 27 * 24 * 60 * 60 * 1000),
};

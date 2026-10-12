import { Meta, StoryObj } from '@storybook/react';
import { ShowMore, Props } from './ShowMore';

const meta: Meta = {
    title: 'Components/ShowMore',
    component: ShowMore,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => <> <ShowMore {...args} /></>;


Default.args = {
    lines: 2,
    width: 0,
    children:
        <div css={{
            fontFamily: 'Montserrat',
            justifyContent: 'space-between',
            flexDirection: 'row',
            lineHeight: 1.43,
        }}>We are seeing activity sourcing from your SOCPWPND14/10.160.8.97 host indicating it may be performing a vulnerability scan targeting one or more devices on your network. We are escalating this incident to you via a high priority ticket and phone call per our default event handling procedures. If you would like us to handle these incidents differently in the future, please click on the "Request Action" button and then select "Request to tune events or escalation procedures" from the drop down menu to view for more options via the Portal. Sincerely, SecureWorks SOC 877-838-7960</div>
};

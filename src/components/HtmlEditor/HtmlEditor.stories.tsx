import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { HtmlEditor, HtmlEditorProps } from './HtmlEditor';
import React from 'react';

const meta: Meta = {
  title: 'Components/HtmlEditor',
  component: HtmlEditor,
  args: { onChange: fn(), onDrop: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: HtmlEditorProps) => (
  <div>
    <HtmlEditor {...args} />
  </div>
);

Default.args = {
  value: `<style>
    table, th, td {
      border: 1px solid black;
    }
    </style>
    my <b>HTML</b>
    <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
 <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
 <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table> <br />`
}

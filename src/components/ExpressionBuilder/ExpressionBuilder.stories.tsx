import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ExpressionBuilder, ExpressionBuilderProps } from './ExpressionBuilder';
import React from 'react';

const meta: Meta = {
    title: 'Components/ExpressionBuilder',
    component: ExpressionBuilder,
    args: { onChange: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = (args: ExpressionBuilderProps) => (
    <ExpressionBuilder {...args} />
);


Default.args = {
    fields: [
        { uid: 'customer', label: 'Customer', type: 'list' },
        { uid: 'sourceIP', label: 'Source IP Address', type: 'array' },
        { uid: 'stock', label: 'stock', type: 'text' },
        { uid: 'stockUI', label: 'stock UI', type: 'text' },
        { uid: 'stockDate', label: 'stock Date', type: 'date' },
        { uid: 'stockDateTime', label: 'stock Date Time', type: 'datetime' },
        {
            uid: 'stockDate with long text',
            label: 'stockDate with long text',
            type: 'text',
        },
    ],
};

export const WithExpression: Story = (args: ExpressionBuilderProps) => (
    <ExpressionBuilder {...args} />
);

WithExpression.args = {
    fields: [
        { uid: 'stock', label: 'stock', type: 'text' },
        { uid: 'stockUI', label: 'stock UI', type: 'text' },
        { uid: 'stockDate', label: 'stock Date', type: 'date' },
    ],
    expression: '{ "id": "99aa8b98-0123-4456-b89a-b193834da5be", "type": "group", "children1": [{ "type": "rule", "id": "bab988ab-4567-489a-bcde-f193834e27f8", "properties": { "fieldSrc": "field", "field": null, "operator": null, "value": [], "valueSrc": [] } }] }'
    //expression: { "id": "bb8bba98-cdef-4012-b456-71938332cb9c", "type": "group", "children1": [{ "type": "rule", "id": "b8a9abba-89ab-4cde-b012-319383418c2e", "properties": { "fieldSrc": "field", "field": "stock", "operator": "equal", "value": ["xcvx"], "valueSrc": ["value"], "valueType": ["text"], "valueError": [null] } }] }
    //expression: '{ "id": "bb8bba98 - cdef - 4012 - b456 - 71938332cb9c", "type": "group", "children1": [{ "type": "rule", "id": "898a8b9b- 89ab - 4cde - b012 - 319383434f29", "properties": { "fieldSrc": "field", "field": "stockUI", "operator": "equal", "value": [null], "valueSrc": ["value"], "valueType": ["text"] } }] }'
    // expression: {
    //     id: 'a98bbaa8-0123-4456-b89a-b18248be3fff',
    //     type: 'group',
    //     children1: {
    //         '8bab89bb-89ab-4cde-b012-318248be4d05': {
    //             type: 'rule',
    //             properties: {
    //                 field: 'stock',
    //                 operator: 'equal',
    //                 value: ['sugar'],
    //                 valueSrc: ['value'],
    //                 valueType: ['text'],
    //             },
    //         },
    //         '998baabb-0123-4456-b89a-b18248be6bb1': {
    //             type: 'rule',
    //             properties: {
    //                 field: 'stock',
    //                 operator: 'like',
    //                 value: ['GST'],
    //                 valueSrc: ['value'],
    //                 valueType: ['text'],
    //             },
    //         },
    //         'aab98a98-cdef-4012-b456-718248bed2ef': {
    //             type: 'group',
    //             properties: { conjunction: 'AND', not: false },
    //             children1: {
    //                 'b9a88ab8-89ab-4cde-b012-318248bed2f1': {
    //                     type: 'rule',
    //                     properties: {
    //                         field: 'stockDate',
    //                         operator: 'greater',
    //                         value: ['2022-07-01'],
    //                         valueSrc: ['value'],
    //                         valueType: ['date'],
    //                     },
    //                 },
    //             },
    //         },
    //     },
    //     properties: { conjunction: 'AND' },
    // },
};

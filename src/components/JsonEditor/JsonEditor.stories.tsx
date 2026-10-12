import { Meta, StoryObj } from '@storybook/react';
import { JsonEditor } from './JsonEditor';
import { FieldDragAndDrop } from '../FieldDragAndDrop/FieldDragAndDrop';
import React from 'react';

const meta: Meta = {
    title: 'Components/JsonEditor',
    component: JsonEditor,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
        <JsonEditor
            json={{
                "startDate": "2024-08-08T09:45:35.892Z",
                "assessmentTypeId": 86,
                "entitlementId": 1326,
                "entitlementFrequencyType": ["abc", "def"],
                "isRemediationScan": false,
                "nestedExample": {
                    "name": "John Doe",
                    "age": 30,
                    "array": []
                },
                "emptyNestedExample": {},
            }}
            onChange={(json: any) => console.log(json)}
            exp={'${profile.uid}'} />
        <div style={{ border: '2px solid grey', width: '250px', borderRadius: '5px' }}>
            <FieldDragAndDrop setItems={() => { }} group='sample' items={[
                { uid: 'text1', label: 'Text 1' },
                { uid: 'text2', label: 'Text 2 ' },
                { uid: 'text3', label: 'Text 3' },
            ]} />
        </div>
    </div>

);

Default.args = {}

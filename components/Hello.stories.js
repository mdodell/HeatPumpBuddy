import React from 'react';

import Hello from './Hello';

export default {
    title: 'Components/Hello',
    component: Hello
};

const Template = (args) => <Hello {...args} />;

export const Default = Template.bind({});

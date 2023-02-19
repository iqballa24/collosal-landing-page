import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AuthorCard from '.';
import data from '@/constant';

export default {
  title: 'Molecules/AuthorCard',
  component: AuthorCard,
} as ComponentMeta<typeof AuthorCard>;

const Template: ComponentStory<typeof AuthorCard> = (args) => (
  <AuthorCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: data.user,
};

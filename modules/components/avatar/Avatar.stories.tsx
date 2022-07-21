import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar, { IAvatar } from './Avatar';
import { mockAvatarProps } from './Avatar.mocks';

export default {
  title: 'templates/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAvatarProps.base,
} as IAvatar;

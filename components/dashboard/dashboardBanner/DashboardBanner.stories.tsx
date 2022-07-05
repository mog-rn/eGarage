import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardBanner, { IDashboardBanner } from './DashboardBanner';
import { mockDashboardBannerProps } from './DashboardBanner.mocks';

export default {
  title: 'templates/DashboardBanner',
  component: DashboardBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DashboardBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardBanner> = (args) => (
  <DashboardBanner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDashboardBannerProps.base,
} as IDashboardBanner;

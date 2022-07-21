import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardSearch, { IDashboardSearch } from './DashboardSearch';
import { mockDashboardSearchProps } from './DashboardSearch.mocks';

export default {
  title: 'templates/DashboardSearch',
  component: DashboardSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DashboardSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardSearch> = (args) => (
  <DashboardSearch {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDashboardSearchProps.base,
} as IDashboardSearch;

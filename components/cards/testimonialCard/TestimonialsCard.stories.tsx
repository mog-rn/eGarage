import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestimonialsCard, { ITestimonialsCard } from './TestimonialsCard';
import { mockTestimonialsCardProps } from './TestimonialsCard.mocks';

export default {
  title: 'testimonials/TestimonialsCard',
  component: TestimonialsCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TestimonialsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestimonialsCard> = (args) => (
  <TestimonialsCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTestimonialsCardProps.base,
} as ITestimonialsCard;

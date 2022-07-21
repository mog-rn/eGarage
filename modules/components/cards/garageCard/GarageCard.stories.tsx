import { ComponentStory, ComponentMeta } from '@storybook/react';
import GarageCard, { IGarageCard } from './GarageCard';
import { mockGarageCardProps } from './GarageCard.mocks';

export default {
  title: 'garages/GarageCard',
  component: GarageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GarageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GarageCard> = (args) => (
  <GarageCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGarageCardProps.base,
} as IGarageCard;

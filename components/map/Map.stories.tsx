import { ComponentStory, ComponentMeta } from '@storybook/react';
import Map, { IMap } from './Map';
import { mockMapProps } from './Map.mocks';

export default {
  title: 'templates/Map',
  component: Map,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Map>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMapProps.base,
} as IMap;

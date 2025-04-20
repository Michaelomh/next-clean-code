import { StoryFn, Meta } from '@storybook/react'

import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS, KitchenSinkBox, KitchenSinkContainer } from '@/utils/storybook'

import { Text } from './text'

export default {
  title: 'Design System/Text, Typography',
  component: Text,
  argTypes: {
    children: {
      description: 'Sets the `Text` content.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
      control: { type: 'text' },
    },
    style: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'p1', 'p2'],
      description: 'Sets the `Text` text style. style has the lowest specificity',
      table: { category: 'Display', type: { summary: 'h1 | h2 | h3 | p1 | p2' } },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Text`. ClassName has the highest specificity.',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    color: {
      control: 'text',
      description: 'Sets color for `Text`.',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Sets the `Text` size.',
      table: { category: 'Display', type: { summary: 'xs | sm |  md |  lg |  xl | 2xl | 3xl' } },
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Sets the `Text` font weight.',
      table: { category: 'Display', type: { summary: 'light | regular | medium | bold' } },
    },
    font: {
      control: 'select',
      options: ['sans', 'mono'],
      description: 'Sets the `Text` font family.',
      table: { category: 'Display', type: { summary: 'sans | mono' } },
    },
    noOfLines: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Sets the `Text` contents to a specific number of lines.',
      table: { category: 'Display', type: { summary: '1 | 2 | 3 | 4 | 5 | 6' } },
    },
    italics: {
      control: 'boolean',
      description: 'Sets the `Button` italics state',
      table: { category: 'Display', defaultValue: { summary: 'false' } },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Text>

const ControlTemplate: StoryFn<typeof Text> = (args) => {
  return <Text {...args}>{args.children}</Text>
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof Text> = () => {
  return (
    <>
      <KitchenSinkContainer header="Styles" subHeader="Showcases all text styles.">
        <KitchenSinkBox description="h1" span={24} className="min-h-auto">
          <Text style="h1">The quick brown fox jumps over the lazy dog</Text>
        </KitchenSinkBox>
        <KitchenSinkBox description="h2" span={24} className="min-h-auto">
          <Text style="h2">The quick brown fox jumps over the lazy dog</Text>
        </KitchenSinkBox>
        <KitchenSinkBox description="h3" span={24} className="min-h-auto">
          <Text style="h3">The quick brown fox jumps over the lazy dog</Text>
        </KitchenSinkBox>
        <KitchenSinkBox description="p1" span={24} className="min-h-auto">
          <Text style="p1">The quick brown fox jumps over the lazy dog</Text>
        </KitchenSinkBox>
        <KitchenSinkBox description="p2" span={24} className="min-h-auto">
          <Text style="p2">The quick brown fox jumps over the lazy dog</Text>
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

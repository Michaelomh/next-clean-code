import { StoryFn, Meta } from '@storybook/react'
import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS } from '@/utils/storybook/constants'
import { KitchenSinkContainer } from '@/utils/storybook/kitchen-sink-container'
import { KitchenSinkBox } from '@/utils/storybook/kitchen-sink-box'
import { Icon } from './icon'
import { fn } from '@storybook/test'
import { ExternalLink } from 'lucide-react'

export default {
  title: 'Design System/Iconography',
  component: Icon,
  argTypes: {
    icon: {
      description: 'Sets the `Icon` symbol. Fallback icon will be a question_mark symbol',
      table: { category: 'Content', type: { summary: 'string' } },
      control: { type: 'text' },
      defaultValue: { summary: 'question_mark' },
    },
    color: {
      description: 'Sets the `Icon` color.',
      table: { category: 'Display', type: { summary: 'string' } },
      control: { type: 'text' },
    },
    size: {
      description: 'Sets the `Icon` size.',
      table: { category: 'Display', type: { summary: 'number' } },
      control: { type: 'number' },
    },
    type: {
      description: 'Sets the `Icon` type.',
      control: 'select',
      options: ['outline', 'round', 'sharp'],
      table: { category: 'Display', type: { summary: 'outline | round | sharp' } },
      defaultValue: { summary: 'outline' },
    },
    opticalSize: {
      description:
        'Determines the `Icon` optical size. Automatically adjusts the stroke weight when you increase or decrease the icon size.',
      control: 'select',
      options: [20, 24, 40, 48],
      table: {
        category: 'Display',
        type: { summary: '20 | 24 | 40 | 48' },
        defaultValue: { summary: '48' },
      },
    },
    weight: {
      description: 'Defines the `Icon` stroke weight. thin (100) till bold (700)',
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700],
      table: {
        category: 'Display',
        type: { summary: '100 | 200 | 300 | 400 | 500 | 600 | 700' },
        defaultValue: { summary: '400' },
      },
    },
    grade: {
      description:
        'Sets the `Icon` emphasis. lower emphasis is used to reduce glare for light symbol, and higher emphasis is used to highlight a symbol.',
      control: 'select',
      options: [-25, 0, 200],
      table: {
        category: 'Display',
        type: { summary: '-25 | 0 | 200' },
        defaultValue: { summary: '0' },
      },
    },
    filled: {
      control: 'boolean',
      description: 'Determines if `Icon` should be filled or unfilled.',
      table: { category: 'Display', defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Icon` ',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    onClick: {
      description: 'Callback function when `Icon` is clicked.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    icon: 'person',
    size: 24,
    opticalSize: 48,
    grade: 0,
    weight: 400,
    filled: false,
    type: 'outline',
    onClick: fn(),
  },
} as Meta<typeof Icon>

const ControlTemplate: StoryFn<typeof Icon> = (args) => {
  return (
    <>
      <a
        href="https://marella.github.io/material-symbols/demo/"
        className="absolute top-1 left-1 text-center hover:underline"
        target="_blank"
      >
        Full icon list here <ExternalLink className="mb-1 inline" size={16} />
      </a>
      <Icon {...args} />
    </>
  )
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof Icon> = () => {
  return (
    <>
      <a
        href="https://marella.github.io/material-symbols/demo/"
        className="absolute top-1 left-1 text-center hover:underline"
        target="_blank"
      >
        Full icon list here <ExternalLink className="mb-1 inline" size={16} />
      </a>

      <KitchenSinkContainer header="Icon Types">
        <KitchenSinkBox description="outline (default)" span={4}>
          <Icon icon="person" type="outline" />
        </KitchenSinkBox>
        <KitchenSinkBox description="outline filled" span={4}>
          <Icon icon="person" type="outline" filled />
        </KitchenSinkBox>
        <KitchenSinkBox description="round" span={4}>
          <Icon icon="person" type="round" />
        </KitchenSinkBox>
        <KitchenSinkBox description="rounded filled" span={4}>
          <Icon icon="person" type="round" filled />
        </KitchenSinkBox>
        <KitchenSinkBox description="sharp" span={4}>
          <Icon icon="person" type="sharp" />
        </KitchenSinkBox>
        <KitchenSinkBox description="sharp filled" span={4}>
          <Icon icon="person" type="sharp" filled />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Weight Icon" subHeader="Define the stroke weight of the symbols.">
        <KitchenSinkBox description="thin (100)" span={4}>
          <Icon icon="person" weight={100} />
        </KitchenSinkBox>
        <KitchenSinkBox description="extralight (200)" span={4}>
          <Icon icon="person" weight={200} />
        </KitchenSinkBox>
        <KitchenSinkBox description="light (300)" span={4}>
          <Icon icon="person" weight={300} />
        </KitchenSinkBox>
        <KitchenSinkBox description="normal (400)" span={4}>
          <Icon icon="person" weight={400} />
        </KitchenSinkBox>
        <KitchenSinkBox description="medium (500)" span={4}>
          <Icon icon="person" weight={500} />
        </KitchenSinkBox>
        <KitchenSinkBox description="semibold (600)" span={4}>
          <Icon icon="person" weight={600} />
        </KitchenSinkBox>
        <KitchenSinkBox description="bold (700)" span={4}>
          <Icon icon="person" weight={700} />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Font size Icon (not working)">
        <KitchenSinkBox description="sm (16px)" span={4}>
          <Icon icon="person" size={16} className="!text-[16px]" />
        </KitchenSinkBox>
        <KitchenSinkBox description="md (24px)" span={4}>
          <Icon icon="person" size={24} className="!text-[24px]" />
        </KitchenSinkBox>
        <KitchenSinkBox description="lg (32px)" span={4}>
          <Icon icon="person" size={32} className="!text-[32px]" />
        </KitchenSinkBox>
        <KitchenSinkBox description="xl (48px)" span={4}>
          <Icon icon="person" size={48} className="!text-[48px]" />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer
        header="Grade Icon"
        subHeader="Lower emphasis is used to reduce glare for light symbols, higher emphasis is used to highlight a symbol."
      >
        <KitchenSinkBox description="No emphasis" span={4}>
          <Icon icon="person" grade={0} />
        </KitchenSinkBox>
        <KitchenSinkBox description="Low emphasis" span={4}>
          <Icon icon="person" grade={-25} />
        </KitchenSinkBox>
        <KitchenSinkBox description="High emphasis" span={4}>
          <Icon icon="person" grade={200} />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer
        header="Optical Size Icon"
        subHeader="Automatically adjust the stroke weight when you increase or decrease the icon size."
      >
        <KitchenSinkBox description="Optical Size (20)" span={4}>
          <Icon icon="person" opticalSize={20} />
        </KitchenSinkBox>
        <KitchenSinkBox description="Optical Size (24)" span={4}>
          <Icon icon="person" opticalSize={24} />
        </KitchenSinkBox>
        <KitchenSinkBox description="Optical Size (40)" span={4}>
          <Icon icon="person" opticalSize={40} />
        </KitchenSinkBox>
        <KitchenSinkBox description="Optical Size (48)" span={4}>
          <Icon icon="person" opticalSize={48} />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="various Scenarios">
        <KitchenSinkBox description="fallback" span={4}>
          <Icon />
        </KitchenSinkBox>
        <KitchenSinkBox description="colors" span={4}>
          <Icon icon="person" filled className="text-red-500" />
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

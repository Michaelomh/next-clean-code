import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { TbUser } from 'react-icons/tb'
import { FaUser } from 'react-icons/fa'

import {
  FloatingLink,
  KITCHEN_SINK_DECORATORS,
  KITCHEN_SINK_PARAMS,
  KitchenSinkBox,
  KitchenSinkContainer,
} from '@/utils/storybook'

export default {
  title: 'Design System/Iconography',
  component: TbUser,
  argTypes: {
    size: {
      description: 'Sets the `Icon` size.',
      table: { category: 'Display', type: { summary: 'number' } },
      control: { type: 'number' },
    },
    title: {
      description: 'Sets the `Icon` title for accessibility.',
      table: { category: 'Display', type: { summary: 'string' } },
      control: { type: 'text' },
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
    size: 24,
    title: 'Title for accessibility',
    onClick: fn(),
  },
} as Meta<typeof TbUser>

const ControlTemplate: StoryFn<typeof TbUser> = (args) => {
  return (
    <>
      <FloatingLink
        link="https://react-icons.github.io/react-icons/"
        position="top-left"
        text="Full icon list here"
        isExternal
      />
      <FaUser {...args} />
    </>
  )
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof TbUser> = () => {
  return (
    <>
      <FloatingLink
        link="https://react-icons.github.io/react-icons/"
        position="top-left"
        text="Full icon list here"
        isExternal
      />

      <KitchenSinkContainer header="Color" subHeader="To add color, you should be using className">
        <KitchenSinkBox description="currentColor (default)" span={4}>
          <FaUser />
        </KitchenSinkBox>
        <KitchenSinkBox description="text-red-500" span={4}>
          <FaUser className="text-red-500" />
        </KitchenSinkBox>
        <KitchenSinkBox description="text-amber-500" span={4}>
          <FaUser className="text-amber-500" />
        </KitchenSinkBox>
        <KitchenSinkBox description="text-sky-500" span={4}>
          <FaUser className="text-sky-500" />
        </KitchenSinkBox>
        <KitchenSinkBox description="text-emerald-500" span={4}>
          <FaUser className="text-emerald-500" />
        </KitchenSinkBox>
        <KitchenSinkBox description="text-stone-500" span={4}>
          <FaUser className="text-stone-500" />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer
        header="Sizes"
        subHeader="Even though you are able to set any size for the icons, you should only be using these 4 main sizes."
      >
        <KitchenSinkBox description="sm (16px, default)" span={4}>
          <FaUser size={16} />
        </KitchenSinkBox>
        <KitchenSinkBox description="md (24px)" span={4}>
          <FaUser size={24} />
        </KitchenSinkBox>
        <KitchenSinkBox description="lg (32px)" span={4}>
          <FaUser size={32} />
        </KitchenSinkBox>
        <KitchenSinkBox description="xl (48px)" span={4}>
          <FaUser size={48} />
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Scenarios">
        <KitchenSinkBox description="onclick" span={4}>
          <FaUser onClick={() => alert('icon clicked')} className="cursor-pointer" />
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

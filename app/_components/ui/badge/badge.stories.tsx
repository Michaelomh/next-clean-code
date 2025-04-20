import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { TbUserFilled, TbX } from 'react-icons/tb'

import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS, KitchenSinkBox, KitchenSinkContainer } from '@/utils/storybook'

import { Badge } from './badge'
import { Text } from '..'

export default {
  title: 'Design System/Badge, Tag, Chip',
  component: Badge,
  argTypes: {
    children: {
      control: false,
      description: 'Sets the `Badge` description content.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    variant: {
      description: 'Sets the `Badge` variant style.',
      control: 'select',
      options: ['default', 'success', 'warning', 'info', 'destructive'],
      table: { category: 'Display', type: { summary: 'default | success | warning | info | destructive' } },
      defaultValue: { summary: 'default' },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Badge` ',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Badge` disabled state.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'boolean',
      description: 'Sets the `Badge` rounded state.',
      table: { category: 'Display', defaultValue: { summary: 'false' } },
    },
    onClick: {
      description: 'Callback function when `Badge` is clicked.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    children: (
      <>
        <TbUserFilled />
        Label
      </>
    ),
    variant: 'default',
    onClick: fn(),
    rounded: false,
    disabled: false,
  },
} as Meta<typeof Badge>

const ControlTemplate: StoryFn<typeof Badge> = (args) => {
  return <Badge {...args}>{args.children}</Badge>
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof Badge> = () => {
  return (
    <>
      <KitchenSinkContainer header="Variants">
        <KitchenSinkBox description="default" span={8}>
          <Badge variant="default">
            <TbUserFilled />
            Default
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="default w/ action" span={8}>
          <Badge variant="default" onClick={() => {}}>
            <TbUserFilled />
            Default
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="default (disabled)" span={8}>
          <Badge variant="default" disabled>
            <TbUserFilled />
            Default
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success" span={8}>
          <Badge variant="success">
            <TbUserFilled />
            Success
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success w/ action" span={8}>
          <Badge variant="success" onClick={() => {}}>
            <TbUserFilled />
            Success
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success (disabled)" span={8}>
          <Badge variant="success" disabled>
            <TbUserFilled />
            Success
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning" span={8}>
          <Badge variant="warning">
            <TbUserFilled />
            Warning
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning w/ action" span={8}>
          <Badge variant="warning" onClick={() => {}}>
            <TbUserFilled />
            Warning
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning (disabled)" span={8}>
          <Badge variant="warning" disabled>
            <TbUserFilled />
            Warning
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info" span={8}>
          <Badge variant="info">
            <TbUserFilled />
            Info
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info w/ action" span={8}>
          <Badge variant="info" onClick={() => {}}>
            <TbUserFilled />
            Info
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info (disabled)" span={8}>
          <Badge variant="info" disabled>
            <TbUserFilled />
            Info
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive" span={8}>
          <Badge variant="destructive">
            <TbUserFilled />
            Destructive
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive w/ action" span={8}>
          <Badge variant="destructive" onClick={() => {}}>
            <TbUserFilled />
            Destructive
            <TbX />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive (disabled)" span={8}>
          <Badge variant="destructive" disabled>
            <TbUserFilled />
            Destructive
            <TbX />
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Sizes">
        <KitchenSinkBox description="large (24px)" span={8}>
          <Badge variant="default" size="lg">
            <TbUserFilled />
            Large
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="medium (20px)" span={8}>
          <Badge variant="default" size="md">
            <TbUserFilled />
            Medium
          </Badge>
        </KitchenSinkBox>

        <KitchenSinkBox description="small (16px)" span={8}>
          <Badge variant="default" size="sm">
            <TbUserFilled />
            Small
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Rounded">
        <KitchenSinkBox description="large + rounded" span={8}>
          <Badge variant="default" size="lg" rounded>
            <TbUserFilled />
            Default
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="medium + rounded" span={8}>
          <Badge variant="default" size="md" rounded>
            <TbUserFilled />
            Rounded
          </Badge>
        </KitchenSinkBox>

        <KitchenSinkBox description="small + rounded" span={8}>
          <Badge variant="default" size="sm" rounded>
            <TbUserFilled />
            Small
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Scenarios">
        <KitchenSinkBox description="handle long badges" span={8}>
          <div className="w-[200px]">
            <Badge>
              <Text className="w-full overflow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit consectetur
                adipisicing elit. Soluta, quidem molestias suscipit
              </Text>
            </Badge>
          </div>
        </KitchenSinkBox>
        <KitchenSinkBox description="handle long badges + icon" span={8}>
          <div className="w-[200px]">
            <Badge>
              <TbUserFilled />
              <Text className="w-full overflow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit consectetur
                adipisicing elit. Soluta, quidem molestias suscipit
              </Text>
            </Badge>
          </div>
        </KitchenSinkBox>

        <KitchenSinkBox description="with image" span={8}>
          <p>see https://www.shadcnui-blocks.com/components/badge</p>
        </KitchenSinkBox>

        <KitchenSinkBox description="status badges" span={8}>
          <p>see https://www.shadcnui-blocks.com/components/badge</p>
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS } from '@/utils/storybook/constants'
import { KitchenSinkContainer } from '@/utils/storybook/kitchen-sink-container'
import { KitchenSinkBox } from '@/utils/storybook/kitchen-sink-box'
import { User, X } from 'lucide-react'
import { Badge } from './badge'

export default {
  title: 'Design System/Badge, Tag',
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
        <User fill="currentColor" />
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
            <User fill="currentColor" />
            Default
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="default w/ action" span={8}>
          <Badge variant="default" onClick={() => {}}>
            <User fill="currentColor" />
            Default
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="default (disabled)" span={8}>
          <Badge variant="default" disabled>
            <User fill="currentColor" />
            Default
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success" span={8}>
          <Badge variant="success">
            <User fill="currentColor" />
            Success
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success w/ action" span={8}>
          <Badge variant="success" onClick={() => {}}>
            <User fill="currentColor" />
            Success
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="success (disabled)" span={8}>
          <Badge variant="success" disabled>
            <User fill="currentColor" />
            Success
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning" span={8}>
          <Badge variant="warning">
            <User fill="currentColor" />
            Warning
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning w/ action" span={8}>
          <Badge variant="warning" onClick={() => {}}>
            <User fill="currentColor" />
            Warning
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="warning (disabled)" span={8}>
          <Badge variant="warning" disabled>
            <User fill="currentColor" />
            Warning
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info" span={8}>
          <Badge variant="info">
            <User fill="currentColor" />
            Info
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info w/ action" span={8}>
          <Badge variant="info" onClick={() => {}}>
            <User fill="currentColor" />
            Info
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="info (disabled)" span={8}>
          <Badge variant="info" disabled>
            <User fill="currentColor" />
            Info
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive" span={8}>
          <Badge variant="destructive">
            <User fill="currentColor" />
            Destructive
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive w/ action" span={8}>
          <Badge variant="destructive" onClick={() => {}}>
            <User fill="currentColor" />
            Destructive
            <X />
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="destructive (disabled)" span={8}>
          <Badge variant="destructive" disabled>
            <User fill="currentColor" />
            Destructive
            <X />
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Sizes">
        <KitchenSinkBox description="large (24px)" span={8}>
          <Badge variant="default" size="lg">
            <User fill="currentColor" />
            Large
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="medium (20px)" span={8}>
          <Badge variant="default" size="md">
            <User fill="currentColor" />
            Medium
          </Badge>
        </KitchenSinkBox>

        <KitchenSinkBox description="small (16px)" span={8}>
          <Badge variant="default" size="sm">
            <User fill="currentColor" />
            Small
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Rounded">
        <KitchenSinkBox description="large + rounded" span={8}>
          <Badge variant="default" size="lg" rounded>
            <User fill="currentColor" />
            Default
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="medium + rounded" span={8}>
          <Badge variant="default" size="md" rounded>
            <User fill="currentColor" />
            Rounded
          </Badge>
        </KitchenSinkBox>

        <KitchenSinkBox description="small + rounded" span={8}>
          <Badge variant="default" size="sm" rounded>
            <User fill="currentColor" />
            Small
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Scenarios">
        <KitchenSinkBox description="handle long badges (not done)" span={8}>
          <Badge className="max-w-[240px]">
            <p className="line-clamp-1 w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit consectetur
              adipisicing elit. Soluta, quidem molestias suscipit
            </p>
          </Badge>
        </KitchenSinkBox>
        <KitchenSinkBox description="handle long badges + icon(not done)" span={8}>
          <Badge className="max-w-[240px]">
            <User fill="currentColor" />
            <p className="line-clamp-1 w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit consectetur
              adipisicing elit. Soluta, quidem molestias suscipit
            </p>
          </Badge>
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './button'
import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS } from '@/utils/storybook/constants'
import { KitchenSinkContainer } from '@/utils/storybook/kitchen-sink-container'
import { KitchenSinkBox } from '@/utils/storybook/kitchen-sink-box'
import { TbUser } from 'react-icons/tb'

export default {
  title: 'Design System/Button, IconButton',
  component: Button,
  argTypes: {
    children: {
      description: 'Sets the `Button` text.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
      control: { type: 'text' },
      defaultValue: { summary: 'Button' },
    },
    variant: {
      description: 'Sets the `Button` variant style.',
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      table: { category: 'Display', type: { summary: 'default | secondary | outline | ghost | destructive | link' } },
      defaultValue: { summary: 'default' },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Button` ',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    size: {
      description: 'Sets the `Button` size.',
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon-sm', 'icon-md', 'icon-lg'],
      table: {
        category: 'Display',
        type: { summary: 'sm | md | lg  | icon-sm | icon-md | icon-lg' },
        defaultValue: { summary: 'md' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Sets the `Button` size.',
      table: {
        category: 'Function',
        defaultValue: { summary: 'button' },
        type: { summary: 'button | submit | reset' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Used for Link navigation, to create a link that looks like a button.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Button` disabled state.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Sets the `Button` to full width.',
      table: { category: 'Display', defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Sets the `Button` loading state.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    loadingText: {
      control: 'text',
      if: { arg: 'loading' },
      description: 'Sets the `Button` loading text.',
      table: { category: 'Feature' },
    },
    spinnerPlacement: {
      control: 'boolean',
      if: { arg: 'loading' },
      description: 'Sets the spinner placement in `Button`.',
      table: { category: 'Feature', defaultValue: { summary: 'start' }, type: { summary: 'start|end' } },
    },
    onClick: {
      description: 'Callback function when `Button` is clicked.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    ondblclick: {
      description: 'Callback function when `Button` is clicked twice.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    onClick: fn(),
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    children: 'Label',
    fullWidth: false,
    asChild: false,
  },
} as Meta<typeof Button>

const ControlTemplate: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof Button> = () => {
  return (
    <>
      <KitchenSinkContainer header="Default variant" subHeader="Showcases all default variants">
        <KitchenSinkBox description="button" span={4}>
          <Button variant="default">default</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="default">
            <TbUser />
            default
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon" span={4}>
          <Button variant="default" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="default" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="default" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Secondary variant" subHeader="Showcases all secondary variants">
        <KitchenSinkBox description="button" span={4}>
          <Button variant="secondary">secondary</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="secondary">
            <TbUser />
            secondary
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon" span={4}>
          <Button variant="secondary" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="secondary" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="secondary" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Outline variant" subHeader="Showcases all outline variants">
        <KitchenSinkBox description="button" span={4}>
          <Button variant="outline">outline</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="outline">
            <TbUser />
            outline
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon" span={4}>
          <Button variant="outline" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="outline" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="outline" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Ghost variant" subHeader="Showcases all ghost variants">
        <KitchenSinkBox description="button" span={4}>
          <Button variant="ghost">ghost</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="ghost">
            <TbUser />
            ghost
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon" span={4}>
          <Button variant="ghost" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="ghost" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="ghost" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Destructive variant" subHeader="Showcases all destructive variants">
        <KitchenSinkBox description="button" span={4}>
          <Button variant="destructive">destructive</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="destructive">
            <TbUser />
            destructive
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon" span={4}>
          <Button variant="destructive" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="destructive" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="destructive" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Link variant" subHeader="Showcases all link variants">
        <KitchenSinkBox description="link button (md)" span={4}>
          <Button variant="link">link</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="link">
            <TbUser />
            link
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon (md)" span={4}>
          <Button variant="link" size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="loading" span={4}>
          <Button variant="link" loading>
            loading
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="disabled" span={4}>
          <Button variant="link" disabled>
            disabled
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" span={4}></KitchenSinkBox>
        <KitchenSinkBox description="link button (sm)" span={4}>
          <Button variant="link" size="sm">
            link
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="link" size="sm">
            <TbUser />
            link
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon (sm)" span={4}>
          <Button variant="link" size="icon-sm">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="link button (lg)" span={4}>
          <Button variant="link" size="lg">
            link
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="button + icon" span={4}>
          <Button variant="link" size="lg">
            <TbUser />
            link
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon (lg)" span={4}>
          <Button variant="link" size="icon-lg">
            <TbUser />
          </Button>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Sizes" subHeader="Showcases all button sizes in default variant">
        <KitchenSinkBox description="sm (36px)" span={5}>
          <Button size="sm">small</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="md (default, 40px)" span={5}>
          <Button size="md">medium</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="lg (44px)" span={5}>
          <Button size="lg">large</Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-sm" span={3}>
          <Button size="icon-sm">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-md" span={3}>
          <Button size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-lg" span={3}>
          <Button size="icon-lg">
            <TbUser />
          </Button>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="fullWidth" subHeader="Showcases all button in full width">
        <KitchenSinkBox description="sm" span={8} innerClassName="w-full">
          <Button fullWidth size="sm">
            small
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="md" span={8} innerClassName="w-full">
          <Button fullWidth size="md">
            medium
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="lg" span={8} innerClassName="w-full">
          <Button fullWidth size="lg">
            large
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-sm" span={8} innerClassName="w-full">
          <Button fullWidth size="icon-sm">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-md" span={8} innerClassName="w-full">
          <Button fullWidth size="icon-md">
            <TbUser />
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="icon-lg" span={8} innerClassName="w-full">
          <Button fullWidth size="icon-lg">
            <TbUser />
          </Button>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="loading" subHeader="Showcases button in various loading states">
        <KitchenSinkBox description="default loading" span={8}>
          <Button loading />
        </KitchenSinkBox>
        <KitchenSinkBox description="loading text" span={8}>
          <Button loading loadingText="Please wait" />
        </KitchenSinkBox>
        <KitchenSinkBox description="spinner placement end" span={8}>
          <Button loading loadingText="Please wait" spinnerPlacement="end" />
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

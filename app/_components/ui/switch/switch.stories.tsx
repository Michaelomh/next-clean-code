import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { TbPizza, TbSalad } from 'react-icons/tb'
import { z } from 'zod'

import {
  FloatingText,
  KITCHEN_SINK_DECORATORS,
  KITCHEN_SINK_PARAMS,
  KitchenSinkBox,
  KitchenSinkContainer,
} from '@/utils/storybook'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Switch } from '..'

export default {
  title: 'Design System/Switch',
  component: Switch,
  argTypes: {
    className: {
      control: 'text',
      description: 'Sets additional styles for `Switch`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    thumbClassName: {
      control: 'text',
      description: 'Sets additional styles for `SwitchThumb`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    checked: {
      control: false,
      description: 'Set the `Switch` checked state. To be used with react-hook-form field.',
      table: { category: 'Function' },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Switch` disabled state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      description: 'Adds a custom `SwitchThumb` Icon.',
      table: { category: 'Display', type: { summary: 'React.ReactNode' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Sets the `Switch` readonly state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    onCheckedChange: {
      description: 'Callback function when `Switch` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    readOnly: false,
    disabled: false,
    className: undefined,
    onCheckedChange: fn(),
  },
} as Meta<typeof Switch>

const controlsSchema = z.object({
  switch: z.boolean(),
})

const ControlTemplate: StoryFn<typeof Switch> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      switch: false,
    },
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  return (
    <>
      <FloatingText position="top-center" text="Form elements should always be wrapped around a Form" />
      <div className="flex items-center">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="switch"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Switch {...args} checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  )
}

export const Controls = ControlTemplate.bind({})

const FormSchema = z.object({
  switch1: z.boolean().optional(),
  switch2: z.boolean().optional(),
  disabled: z.boolean(),
  readonly: z.boolean(),
  error: z.boolean().refine((value) => value === true, {
    message: 'Must be true.',
  }),
  styling: z.boolean(),
  icon1: z.boolean(),
  icon2: z.boolean(),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  switch1: false,
  switch2: true,
  disabled: true,
  readonly: true,
  error: false,
  styling: false,
  icon1: false,
  icon2: false,
}

const KitchenSinkTemplate: StoryFn<typeof Switch> = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  useEffect(() => {
    // to set error on render
    form.setError('error', {
      type: 'manual',
      message: 'Must be true.',
    })
  }, [])

  return (
    <Form {...form}>
      <form className="w-full">
        <KitchenSinkContainer header="Switch types">
          <KitchenSinkBox description="default" span={12}>
            <FormField
              control={form.control}
              name="switch1"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Enable feature
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="default with description" span={12}>
            <FormField
              control={form.control}
              name="switch2"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Enable feature
                    </FormLabel>
                    <FormMessage>Enable feature X in application.</FormMessage>
                  </div>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled" span={12}>
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} disabled />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="readonly" span={12}>
            <FormField
              control={form.control}
              name="readonly"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} readOnly />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="error" span={12}>
            <FormField
              control={form.control}
              name="error"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>{' '}
                  <div className="space-y-1">
                    <FormLabel className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Enable feature
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Custom styling">
          <KitchenSinkBox description="Changing colors" span={12}>
            <FormField
              control={form.control}
              name="styling"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-purple-200"
                      thumbClassName="data-[state=checked]:bg-green-200 data-[state=unchecked]:bg-green-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="Changing switch icons" span={12}>
            <FormField
              control={form.control}
              name="icon1"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      icon={field.value === true ? <TbPizza className="h-4 w-4" /> : <TbSalad className="h-4 w-4" />}
                      className="h-7 w-12"
                      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="Static switch icon" span={12}>
            <FormField
              control={form.control}
              name="icon2"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      icon={<TbSalad className="h-4 w-4" />}
                      className="h-7 w-12"
                      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>
      </form>
    </Form>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

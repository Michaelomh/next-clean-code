import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { z } from 'zod'

import {
  FloatingText,
  KITCHEN_SINK_DECORATORS,
  KITCHEN_SINK_PARAMS,
  KitchenSinkBox,
  KitchenSinkContainer,
} from '@/utils/storybook'

import { Textarea, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '..'

export default {
  title: 'Design System/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Sets placeholder text for `Textarea`.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Textarea`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Textarea` disabled state.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'Sets how the `Textarea` can be resized.',
      table: {
        category: 'Feature',
        defaultValue: { summary: 'both' },
        type: { summary: 'none | both | horizontal | vertical' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Sets the `Textarea` max length that the textarea can hold.',
      table: { category: 'Feature' },
    },
    counterThreshold: {
      control: { type: 'range', min: 0, max: 100 },
      description:
        'Sets the threshold at which `Textarea` counter will appear. At 0, the counter will always show, at 100, the counter will only show when error.',
      table: { category: 'Feature', defaultValue: { summary: '0' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Sets the `Textarea` readonly state.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Determines if `Textarea` is autofocused on render.',
      table: { category: 'Feature', defaultValue: { summary: 'false' } },
    },
    onChange: {
      control: false,
      description: 'Callback function when `Textarea` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onInput: {
      control: false,
      description: 'Callback function when `Textarea` value is updated. (synonym of onChange)',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onFocus: {
      control: false,
      description: 'Callback function when `Textarea` is focused.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onBlur: {
      control: false,
      description: 'Callback function when `Textarea` is blurred.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    placeholder: 'placeholder text',
    className: undefined,
    readOnly: false,
    autoFocus: false,
    disabled: false,
    maxLength: 50,
    counterThreshold: 0,
    resize: 'both',
    onInput: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
} as Meta<typeof Textarea>

const controlsSchema = z.object({
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
})

const ControlTemplate: StoryFn<typeof Textarea> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      description: '',
    },
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  return (
    <>
      <FloatingText position="top-center" text="Form elements should always be wrapped around a Form" />
      <div className="flex h-[480px] w-[500px] items-center">
        <Form {...form}>
          <form className="w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...args} {...field} />
                  </FormControl>
                  <FormMessage>At least 10 characters.</FormMessage>
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
  textValue: z.string(),
  disabled: z.string(),
  readOnly: z.string(),
  error: z.string(),
  resize: z.string(),
  maxLength: z.string().max(50, {
    message: 'Username must not be longer than 50 characters.',
  }),
  expandable: z.string(),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  textValue: '',
  disabled: 'disabled',
  readOnly: 'readonly',
  error: 'error',
  resize: '',
  maxLength: '',
  expandable: '',
}

const KitchenSinkTemplate: StoryFn<typeof Textarea> = () => {
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
      message: 'error',
    })
  }, [])

  return (
    <Form {...form}>
      <form className="w-full">
        <KitchenSinkContainer header="Textarea Showcase">
          <KitchenSinkBox description="default" span={12}>
            <FormField
              control={form.control}
              name="textValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea resize="none" placeholder="textValue" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled" span={12}>
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea resize="none" placeholder="disabled" {...field} disabled />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="readonly (not done)" span={12}>
            <FormField
              control={form.control}
              name="readOnly"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea resize="none" placeholder="readOnly" {...field} readOnly />
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
                <FormItem>
                  <FormControl>
                    <Textarea resize="none" placeholder="error" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Resize">
          <KitchenSinkBox description="resize='both' (default)" span={12}>
            <FormField
              control={form.control}
              name="resize"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="resize='both'" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="resize='none'" span={12}>
            <FormField
              control={form.control}
              name="resize"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="resize='none'" resize="none" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="resize='horizontal'" span={12}>
            <FormField
              control={form.control}
              name="resize"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="resize='horizontal'" resize="horizontal" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="resize='vertical'" span={12}>
            <FormField
              control={form.control}
              name="resize"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="resize='vertical'" resize="vertical" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Max length textarea + counter">
          <KitchenSinkBox description="maxLength(50) + always show counter" span={12}>
            <FormField
              control={form.control}
              name="maxLength"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea resize="none" maxLength={50} placeholder="always show counter" {...field} />
                  </FormControl>
                  <FormMessage>Always show counter</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="maxLength(50) + show counter at 80%" span={12}>
            <FormField
              control={form.control}
              name="maxLength"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      resize="none"
                      maxLength={50}
                      counterThreshold={80}
                      placeholder="only show at 80% of maxLength"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>Show counter only at 80% threshold (40)</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Updating height and width textarea">
          <KitchenSinkBox description="200px height (more text doesn't change height)" span={12}>
            <FormField
              control={form.control}
              name="expandable"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="h-[200px]" placeholder="200px height" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="400px width (more text doesn't change width)" span={12}>
            <FormField
              control={form.control}
              name="expandable"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="w-[400px]" placeholder="400px width" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="expandable as it gets longer" span={12}>
            <FormField
              control={form.control}
              name="expandable"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="max-w-[400px]" placeholder="expandable as more text is written" {...field} />
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

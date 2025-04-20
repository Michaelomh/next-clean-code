import { StoryFn, Meta } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useEffect } from 'react'
import { TbPizza, TbSalad, TbBeer } from 'react-icons/tb'

import {
  FloatingText,
  KITCHEN_SINK_DECORATORS,
  KITCHEN_SINK_PARAMS,
  KitchenSinkBox,
  KitchenSinkContainer,
} from '@/utils/storybook'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
  RadioGroupPrimitive,
  Text,
} from '..'

export default {
  title: 'Design System/Radio Group',
  component: RadioGroup,
  argTypes: {
    className: {
      control: 'text',
      description: 'Sets additional styles for `Radio Group`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Radio Group` disabled state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    defaultValue: {
      control: 'text',
      description: 'Sets the `Radio Group` default value.',
      table: { category: 'Function' },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Sets the `Radio Group` orientation.',
      table: { category: 'Display' },
    },
    onValueChange: {
      control: false,
      description: 'Callback function when `Radio Group` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    disabled: false,
    defaultValue: 'value1',
  },
} as Meta<typeof RadioGroup>

const controlsSchema = z.object({
  options: z.enum(['value1', 'value2', 'value3']).refine((val) => val !== 'value3'),
})

const ControlTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      options: 'value1',
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
              name="options"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} {...args}>
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value="value1" />
                        </FormControl>
                        <FormLabel>Option 1</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value="value2" />
                        </FormControl>
                        <FormLabel>Option 2</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value="value3" />
                        </FormControl>
                        <FormLabel>Option 3 (error)</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage preserveSpace />
                </FormItem>
              )}
            />
            <Text style="p1">Selected: {form.watch('options')}</Text>
          </form>
        </Form>
      </div>
    </>
  )
}

export const Controls = ControlTemplate.bind({})

const options = [
  { id: 'pizza', label: 'Pizza', description: 'Italians love it.', icon: TbPizza },
  { id: 'salad', label: 'Salad', description: 'Only for vegetarians!', icon: TbSalad },
  { id: 'beer', label: 'Beer', description: 'Cold and refreshing', icon: TbBeer },
]

const FormSchema = z.object({
  radio1: z.enum(['pizza', 'salad', 'beer']),
  radio2: z.enum(['pizza', 'salad', 'beer']),
  disabled: z.enum(['pizza', 'salad', 'beer']),
  disabled2: z.enum(['pizza', 'salad', 'beer', 'disabled']),
  error: z.enum(['pizza', 'salad', 'beer']),
  horizontal: z.enum(['pizza', 'salad', 'beer']),
  custom1: z.enum(['pizza', 'salad', 'beer']),
  custom2: z.enum(['pizza', 'salad', 'beer']),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  radio1: undefined,
  radio2: undefined,
  disabled: 'pizza',
  disabled2: 'salad',
  error: 'pizza',
  horizontal: undefined,
  custom1: undefined,
  custom2: undefined,
}

const KitchenSinkTemplate: StoryFn<typeof RadioGroup> = () => {
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

  // For indeterminate

  return (
    <Form {...form}>
      <form className="w-full">
        <KitchenSinkContainer header="Radio Group types">
          <KitchenSinkBox description="default" span={12}>
            <FormField
              control={form.control}
              name="radio1"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <FormLabel>
                            <option.icon />
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>

          <KitchenSinkBox description="default w/ description" span={12}>
            <FormField
              control={form.control}
              name="radio2"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <div className="flex flex-col gap-1">
                            <FormLabel>{option.label}</FormLabel>
                            <FormMessage>{option.description}</FormMessage>
                          </div>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>

          <KitchenSinkBox description="disabled (radioGroup)" span={12}>
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} disabled>
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <FormLabel>{option.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled (radioGroupItem)" span={12}>
            <FormField
              control={form.control}
              name="disabled2"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <FormLabel>{option.label}</FormLabel>
                        </FormItem>
                      ))}
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem disabled value="disabled" />
                        </FormControl>
                        <FormLabel>Disabled</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="error" span={12}>
            <FormField
              control={form.control}
              name="error"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <FormLabel>
                            <option.icon />
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Common Scenarios">
          <KitchenSinkBox description="horizontal radio Group" span={12}>
            <FormField
              control={form.control}
              name="horizontal"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} orientation="horizontal">
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupItem value={option.id} />
                          </FormControl>
                          <FormLabel>
                            <option.icon />
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>

          <KitchenSinkBox description="custom radio Group" span={12}>
            <FormField
              control={form.control}
              name="horizontal"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} orientation="horizontal">
                      {options.map((option) => (
                        <FormItem key={option.id} className="flex items-center">
                          <FormControl>
                            <RadioGroupPrimitive.Item
                              value={option.id}
                              className="ring-border flex gap-2 rounded px-3 py-2 ring-[1px] data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
                            >
                              <option.icon />
                              <FormLabel>{option.label}</FormLabel>
                            </RadioGroupPrimitive.Item>
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
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

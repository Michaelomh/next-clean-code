import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useEffect, useState } from 'react'
import { TbPizza, TbSalad, TbBeer, TbIceCream2, TbCircleCheck } from 'react-icons/tb'

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Checkbox,
  CheckboxPrimitive,
} from '..'

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  argTypes: {
    className: {
      control: 'text',
      description: 'Sets additional styles for `Checkbox`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    checked: {
      control: 'boolean',
      description: 'Set the `Checkbox` checked state. To be used with react-hook-form field.',
      table: { category: 'Function' },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Checkbox` disabled state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Sets the `Checkbox` readonly state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    onCheckedChange: {
      description: 'Callback function when `Checkbox` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    readOnly: false,
    disabled: false,
    className: undefined,
    onCheckedChange: fn(),
  },
} as Meta<typeof Checkbox>

const controlsSchema = z.object({
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: 'You must accept the terms and conditions to continue',
  }),
})

const ControlTemplate: StoryFn<typeof Checkbox> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      acceptTerms: false,
    },
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  return (
    <>
      <FloatingText position="top-center" text="Form elements should always be wrapped around a Form" />
      <div className="flex h-[480px] w-[400px] items-center">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox {...args} checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I agree to the Terms and Conditions and Privacy Policy
                    </FormLabel>
                    <FormMessage preserveSpace />
                  </div>
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
  check1: z.boolean(),
  check2: z.boolean(),
  disabled: z.boolean(),
  readonly: z.boolean(),
  error: z.boolean(),
  orientation: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'There needs to be at least 1 selected.',
  }),
  indeterminate: z.array(z.string()),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  check1: false,
  check2: false,
  disabled: true,
  readonly: true,
  error: false,
  orientation: [],
  indeterminate: [],
}

const KitchenSinkTemplate: StoryFn<typeof Checkbox> = () => {
  const options = [
    { id: 'pizza', label: 'Pizza', icon: TbPizza },
    { id: 'salad', label: 'Salad', icon: TbSalad },
    { id: 'beer', label: 'Beer', icon: TbBeer },
    { id: 'ice-cream', label: 'Ice Cream', icon: TbIceCream2 },
  ]

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
  const [indeterminateCheck, setIndeterminateCheck] = useState<CheckboxPrimitive.CheckedState>(false)

  const handleParentCheckedChange = () => {
    switch (indeterminateCheck) {
      case 'indeterminate':
        setIndeterminateCheck(false)
        form.setValue('indeterminate', [])
        break
      case true:
        setIndeterminateCheck(false)
        form.setValue('indeterminate', [])
        break
      case false:
        setIndeterminateCheck(true)
        form.setValue(
          'indeterminate',
          options.map((item) => item.id),
        )
        break
    }
  }

  const handleChildCheckedChange = (checkedOptions: string[]) => {
    if (checkedOptions.length === 0) {
      setIndeterminateCheck(false)
      return
    } else if (checkedOptions.length === options.length) {
      setIndeterminateCheck(true)
      return
    }

    setIndeterminateCheck('indeterminate')
  }

  return (
    <Form {...form}>
      <form className="w-full">
        <KitchenSinkContainer header="Checkbox types">
          <KitchenSinkBox description="checkbox + title" span={8}>
            <FormField
              control={form.control}
              name="check1"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="flex flex-col gap-2">
                    <FormLabel>Admin Role</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="checkbox + title w/ description" span={8}>
            <FormField
              control={form.control}
              name="check2"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="flex flex-col gap-2">
                    <FormLabel>Admin Role</FormLabel>
                    <FormMessage>This role has access to everything</FormMessage>
                  </div>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled checkbox" span={8}>
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="readonly checkbox (needs work)" span={8}>
            <FormField
              control={form.control}
              name="readonly"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-4">
                  <FormControl>
                    <Checkbox checked={field.value} className="pointer-events-none" />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="error checkbox" span={8}>
            {' '}
            <FormField
              control={form.control}
              name="error"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Common checkbox scenarios">
          <KitchenSinkBox description="horizontal checkbox" span={12}>
            <FormField
              control={form.control}
              name="orientation"
              render={() => (
                <>
                  <div className="mb-2">
                    <FormLabel className="text-base">Multi select checkbox</FormLabel>
                    <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                  </div>
                  {/* This classname makes it horizontal */}
                  <FormItem className="flex space-x-4">
                    {options.map((option) => (
                      <FormField
                        key={option.id}
                        control={form.control}
                        name="orientation"
                        render={({ field }) => {
                          return (
                            <FormItem key={option.id} className="flex flex-row items-start space-y-0 space-x-1">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, option.id])
                                      : field.onChange(field.value?.filter((value) => value !== option.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                <option.icon />
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </FormItem>
                  <FormMessage preserveSpace />
                </>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="custom checkbox (not linked to form)" span={12}>
            <div className="grid w-full max-w-sm grid-cols-4 gap-2">
              {options.map((option) => (
                <CheckboxPrimitive.Root
                  key={option.id}
                  className="ring-border text-muted-foreground data-[state=checked]:ring-primary data-[state=checked]:text-primary relative rounded-lg p-2 text-start ring-[1px] data-[state=checked]:ring-2"
                >
                  <option.icon className="mb-3" />
                  <span className="font-medium tracking-tight">{option.label}</span>
                  <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
                    <TbCircleCheck className="fill-primary text-primary-foreground" />
                  </CheckboxPrimitive.Indicator>
                </CheckboxPrimitive.Root>
              ))}
            </div>
          </KitchenSinkBox>

          <KitchenSinkBox description="vertical checkbox" span={12}>
            <FormField
              control={form.control}
              name="orientation"
              render={() => (
                <FormItem>
                  <div>
                    <FormLabel className="text-base">Multi select checkbox</FormLabel>
                    <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                  </div>
                  {options.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="orientation"
                      render={({ field }) => {
                        return (
                          <FormItem key={option.id} className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(option.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, option.id])
                                    : field.onChange(field.value?.filter((value) => value !== option.id))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              <option.icon />
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage preserveSpace />
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="indeterminate checkbox" span={12}>
            <div className="flex flex-col items-center space-y-4">
              <div className="mb-0 flex items-center">
                <Checkbox checked={indeterminateCheck} onCheckedChange={handleParentCheckedChange} />
                <FormLabel className="pl-4">Unhealthy foods</FormLabel>
              </div>
              <div className="space-y-2 pl-6">
                <div className="flex items-center"></div>
                {options.map((option) => (
                  <FormField
                    key={option.id}
                    control={form.control}
                    name="indeterminate"
                    render={({ field }) => {
                      return (
                        <FormItem key={option.id} className="flex flex-row items-start space-y-0 space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                const checkedList = checked
                                  ? [...field.value, option.id]
                                  : field.value?.filter((value) => value !== option.id)
                                handleChildCheckedChange(checkedList)
                                field.onChange(checkedList)
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <option.icon />
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
            </div>
          </KitchenSinkBox>
        </KitchenSinkContainer>
      </form>
    </Form>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS

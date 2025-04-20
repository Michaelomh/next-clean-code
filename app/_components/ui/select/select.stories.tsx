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

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Text,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  FormLabel,
  Button,
} from '..'
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbUser, TbX } from 'react-icons/tb'

export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    className: {
      control: 'text',
      description: 'Sets additional styles for `Select`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    defaultValue: {
      control: 'text',
      description: 'Sets the `Select` default value when initially rendered.',
      table: { category: 'Content' },
    },
    value: {
      control: 'text',
      description: 'Sets the controlled value of `Select`. Should be used with `onValueChange`',
      table: { category: 'Content' },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Select` disabled state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'boolean',
      description: 'Sets the `Select` with rounded corners.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Sets the `Select` readonly state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    open: {
      control: 'boolean',
      description: 'Sets the controlled open state of `Select`. Should be used with `onOpenChange`.',
      table: { category: 'Function', type: { summary: 'boolean' } },
    },
    icon: {
      control: false,
      description: 'Adds an icon to the `Select`.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    dropdownIcon: {
      control: false,
      description: 'Adds a custom `Select Dropdown` Icon.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    selectSide: {
      control: false,
      description: 'Add content on right side of `Select`.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    onValueChange: {
      description: 'Callback function when `Select` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onOpenChange: {
      description: 'Callback function when `Select` is opened.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    readOnly: false,
    disabled: false,
    rounded: false,
    defaultValue: '1',
    icon: <TbUser />,
    selectSide: 'info',
    className: undefined,
    onValueChange: fn(),
    onOpenChange: fn(),
  },
} as Meta<typeof Select>

const controlsSchema = z.object({
  option: z.string().refine((value) => value !== 'error', "Option can't be 'error'"),
})

const options = [
  { id: '1', label: 'Option 1', icon: TbHexagonNumber1 },
  { id: '2', label: 'Option 2', icon: TbHexagonNumber2 },
  { id: '3', label: 'Option 3', icon: TbHexagonNumber3 },
]

const ControlTemplate: StoryFn<typeof Select> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      option: '1',
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
              name="option"
              render={({ field }) => (
                <FormItem>
                  <Select {...args} onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger {...args}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Header for Options</SelectLabel>
                        {options.map((option) => (
                          <SelectItem value={option.id} key={option.id}>
                            {option.label}
                          </SelectItem>
                        ))}
                        <SelectSeparator />
                        <SelectItem value="error">ERROR</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage preserveSpace />
                  <Text style="p2">Select value: {field.value}</Text>
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
  select: z.string(),
  disabled1: z.string(),
  disabled2: z.string(),
  readonly: z.string(),
  error: z.string(),

  scrollable: z.string(),
  customDropdown: z.string(),
  leftIcon: z.string(),
  reset1: z.string(),
  reset2: z.string(),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  select: '',
  disabled1: '',
  disabled2: '',
  readonly: '',
  error: '',

  scrollable: '',
  customDropdown: '',
  leftIcon: '',

  reset1: '',
  reset2: '',
}

const KitchenSinkTemplate: StoryFn<typeof Select> = () => {
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
      message: 'Error message',
    })
  }, [])

  return (
    <Form {...form}>
      <form className="w-full">
        <KitchenSinkContainer header="Select types">
          <KitchenSinkBox description="default" span={12}>
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>Helper Text</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled" span={12}>
            <FormField
              control={form.control}
              name="disabled1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>Helper Text</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled option" span={12}>
            <FormField
              control={form.control}
              name="disabled2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="disabled" disabled>
                        Disabled
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>Helper Text</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="readonly" span={12}>
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} readOnly>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>Helper Text</FormMessage>
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
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>Helper Text</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Select with Icons">
          <KitchenSinkBox description="left Icon" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Left Icon in Select</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger icon={<TbUser />}>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="left Icon in Options" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Left Icon in Options</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.icon && <option.icon />} {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Right Icon in Select</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger selectSide={<TbUser />}>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon, actionable (not working)" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RightIcon with Action</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        selectSide={
                          <TbX
                            onClick={() => {
                              console.log('clicked!')
                              form.setValue('customDropdown', '')
                            }}
                            className="cursor-pointer"
                          />
                        }
                      >
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon, text" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Right text in Select</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        selectSide={
                          <Text style="p2" color="text-stone-400" italics>
                            info
                          </Text>
                        }
                      >
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="custom dropdown button" span={12}>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Dropdown Icon</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger dropdownIcon={<TbUser />}>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Select Scenarios">
          <KitchenSinkBox description="Scrollable select options with Headers" span={12}>
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectGroup key={option.id}>
                          <SelectLabel>{option.label}</SelectLabel>
                          {[...Array(11).keys()].map((index) => (
                            <SelectItem value={`Option ${option.id}.${index}`} key={index}>
                              {`Option ${option.id}.${index}`}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="Reset Select Button" span={12}>
            <FormField
              control={form.control}
              name="reset1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                      <SelectSeparator />
                      <Button
                        fullWidth
                        size="sm"
                        onClick={(e) => {
                          console.log(field)
                          e.stopPropagation()
                          form.setValue('reset1', '')
                        }}
                      >
                        Clear
                      </Button>
                    </SelectContent>
                  </Select>
                  <Text style="p2">Selected: {form.watch('reset1')}</Text>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="Reset Select Option" span={12}>
            <FormField
              control={form.control}
              name="reset2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Option Selection</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem value={option.id} key={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Text style="p2">Selected: {form.watch('reset2')}</Text>
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

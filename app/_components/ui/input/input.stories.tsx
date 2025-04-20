import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { TbEye, TbEyeClosed, TbInfoCircle, TbSearch, TbX } from 'react-icons/tb'
import { MdAttachMoney } from 'react-icons/md'
import { useEffect, useState } from 'react'

import { cn } from '@/app/_components/utils'
import {
  FloatingText,
  KITCHEN_SINK_DECORATORS,
  KITCHEN_SINK_PARAMS,
  KitchenSinkBox,
  KitchenSinkContainer,
} from '@/utils/storybook'

import {
  Text,
  Form,
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  Input,
} from '..'

export default {
  title: 'Design System/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Sets placeholder text for `Input`.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    icon: {
      control: false,
      description: 'Sets left icon for `Input`.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    inputSide: {
      control: false,
      description: 'Sets right side content for `Input`.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Input`',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'file'],
      description: 'Sets the `Input` type.',
      table: {
        category: 'Function',
        defaultValue: { summary: 'text' },
        type: { summary: 'text | password | file' },
      },
    },
    autoComplete: {
      control: 'select',
      options: ['on', 'off', 'name', 'email', 'username', 'country'],
      description: 'Sets the `Input` type.',
      table: {
        category: 'Function',
        defaultValue: { summary: 'text' },
        type: { summary: 'on | off | name | email | username | country' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the `Input` disabled state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'boolean',
      description: 'Sets the `Input` with rounded corners.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Sets the `Input` readOnly state.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    autoFocus: {
      control: 'boolean',
      description:
        'Determines if `Input` is autofocused on render. Select true and refresh the page to see it in action.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    onChange: {
      control: false,
      description: 'Callback function when `Input` value is updated.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onInput: {
      control: false,
      description: 'Callback function when `Input` value is updated. (synonym of onChange)',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onFocus: {
      control: false,
      description: 'Callback function when `Input` is focused.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
    onBlur: {
      control: false,
      description: 'Callback function when `Input` is blurred.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    placeholder: 'placeholder',
    icon: <TbSearch />,
    inputSide: 'info',
    type: 'text',
    readOnly: false,
    autoFocus: false,
    rounded: false,
    autoComplete: 'off',
    disabled: false,
    className: undefined,
    onInput: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
} as Meta<typeof Input>

const controlsSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
})

const ControlTemplate: StoryFn<typeof Input> = (args) => {
  const form = useForm<z.infer<typeof controlsSchema>>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      name: '',
    },
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  return (
    <>
      <FloatingText position="top-center" text="Form elements should always be wrapped around a Form" />
      <div className="flex h-[480px] w-[300px] items-center">
        <Form {...form}>
          <form className="w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...args} {...field} />
                  </FormControl>
                  <FormMessage>At least 2 characters.</FormMessage>
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
  numberValue: z.coerce
    .number({
      required_error: 'Please enter your value.',
      invalid_type_error: 'value must be a number',
    })
    .optional()
    .or(z.literal('')),
  passwordValue: z.string(),
  disabled: z.string(),
  readOnly: z.string(),
  error: z.string(),
  textValueIcon1: z.string(),
  textValueIcon2: z.string(),
  textValueIcon3: z.string(),
  textValueIcon4: z.string(),
  username: z
    .string()
    .min(2, {
      message: undefined,
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  search: z.string().optional(),
  email: z.string().email('Please enter a valid email.').optional(),
  currency: z.coerce
    .number({
      required_error: 'Please enter the currency.',
      invalid_type_error: 'Currency must be a valid number',
    })
    .positive('You currency cannot be negative.')
    .optional()
    .or(z.literal('')),
  password: z
    .string()
    .min(12, 'Password must be at least 12 characters')
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: 'Password must contain at least one special character',
    })
    .refine((value) => /\d/.test(value), {
      message: 'Password must contain at least one number',
    })
    .refine((value) => /[a-zA-Z]/.test(value), {
      message: 'Password must contain at least one letter',
    }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  textValue: '',
  numberValue: '',
  passwordValue: '',
  disabled: 'disabled',
  readOnly: 'readonly',
  error: 'error',
  password: '',
  urls: [{ value: '' }],
}

const KitchenSinkTemplate: StoryFn<typeof Input> = () => {
  // For display/hiding password
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    // error validation is done when there is any state change. (default is onSubmit)
    mode: 'onChange',
  })

  // to set expandable input (in array)
  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
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
        <KitchenSinkContainer header="Input types">
          <KitchenSinkBox description="handling text" span={12}>
            <FormField
              control={form.control}
              name="textValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="textValue" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="handling numbers" span={12}>
            <FormField
              control={form.control}
              name="numberValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="number" {...field} type="number" />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="handling password" span={12}>
            <FormField
              control={form.control}
              name="passwordValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="disabled input" span={12}>
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="readonly input" span={12}>
            <FormField
              control={form.control}
              name="readOnly"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input readOnly {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="error input" span={12}>
            <FormField
              control={form.control}
              name="error"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Input with Icons">
          <KitchenSinkBox description="left Icon" span={12}>
            <FormField
              control={form.control}
              name="textValueIcon1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="textValueIcon1" icon={<TbSearch />} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon" span={12}>
            <FormField
              control={form.control}
              name="textValueIcon2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="textValueIcon2" inputSide={<TbInfoCircle />} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon + Action" span={12}>
            <FormField
              control={form.control}
              name="textValueIcon3"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="textValueIcon3"
                      inputSide={
                        <Button variant="unstyled" onClick={() => alert('Icon clicked')}>
                          <TbX />
                        </Button>
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="right Icon + Text" span={12}>
            <FormField
              control={form.control}
              name="textValueIcon4"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="textValueIcon4"
                      inputSide={
                        <Text style="p2" size="xs" className="hover:cursor-pointer">
                          info
                        </Text>
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
        </KitchenSinkContainer>

        <KitchenSinkContainer header="Common input scenarios">
          <KitchenSinkBox description="full input" span={12}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage>At least 2 characters. Cannot be more than 30 characters.</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="search bar + clear" span={12}>
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="searching..."
                      icon={<TbSearch />}
                      inputSide={
                        <Button
                          variant="unstyled"
                          onClick={() => {
                            form.setValue('search', '')
                          }}
                        >
                          <TbX />
                        </Button>
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="password + show password + validation" span={12}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormDescription>Create a strong password that meets all requirements.</FormDescription>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        {...field}
                        className="pr-10"
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <TbEyeClosed size={20} /> : <TbEye size={20} />}
                    </button>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li className={form.watch('password').length >= 12 ? 'text-green-600' : ''}>
                      ✓ At least 12 characters
                    </li>
                    <li className={/[!@#$%^&*(),.?":{}|<>]/.test(form.watch('password')) ? 'text-green-600' : ''}>
                      ✓ At least one special character
                    </li>
                    <li className={/\d/.test(form.watch('password')) ? 'text-green-600' : ''}>✓ At least one number</li>
                    <li className={/[a-zA-Z]/.test(form.watch('password')) ? 'text-green-600' : ''}>
                      ✓ At least one letter
                    </li>
                  </ul>
                  <FormMessage />
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="email address + validation" span={12}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage>Optional email, but if there is something, check if valid email.</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="currency + validation" span={12}>
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Input icon={<MdAttachMoney />} type="number" {...field} />
                  </FormControl>
                  <FormMessage>Only valid currency values</FormMessage>
                </FormItem>
              )}
            />
          </KitchenSinkBox>
          <KitchenSinkBox description="expandable input" span={12}>
            <div>
              {fields.map((field, index) => (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`urls.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn(index !== 0 && 'sr-only')}>URLs</FormLabel>
                      <FormMessage className={cn(index !== 0 && 'sr-only')}>
                        Add multiple URLs separated by commas. Text description don&apos;t need to be below the input.
                      </FormMessage>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
              <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: '' })}>
                Add URL
              </Button>
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

'use client'

import {
  Text,
  Input,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { cn } from '@/app/_components/utils'
import { ChangeEvent, useState } from 'react'
import { TbEyeClosed, TbEye, TbSearch, TbX, TbArrowNarrowLeft } from 'react-icons/tb'
import Link from 'next/link'

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: undefined,
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z.string().email('Please enter a valid email.').optional(),
  age: z.coerce
    .number({
      required_error: 'Please enter your age.',
      invalid_type_error: 'Age must be a number',
    })
    .positive('You age cannot be negative.')
    .max(99, 'Age must be less than 100.')
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

const FormSchema2 = z.object({
  search: z.string(),
  password: z.string().min(12, 'Password must be at least 12 characters'),
})

type FormValues = z.infer<typeof FormSchema>
type FormValues2 = z.infer<typeof FormSchema2>

const defaultValues: Partial<FormValues> = {
  username: '',
  password: '',
  urls: [{ value: 'https://shadcn.com' }, { value: 'http://twitter.com/shadcn' }],
}

const defaultValues2: Partial<FormValues2> = {
  search: '',
}

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  const form2 = useForm<FormValues2>({
    resolver: zodResolver(FormSchema2),
    defaultValues: defaultValues2,
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  function onSubmit(data: FormValues) {
    console.log('onSubmit')
    console.log(data)
  }

  function onSubmit2(data: FormValues2) {
    console.log('onSubmit2')
    console.log(data)
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Link href="/test" className="flex items-center gap-2">
        <TbArrowNarrowLeft size={36} />
        <Text style="h1">Input Testing</Text>
      </Link>

      <div>
        <Text style="h2">Basic form, validation only done when trying to submit</Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number Input</FormLabel>
                  <FormControl>
                    <Input placeholder="what is your age" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>

      <div className="my-20">
        <Text style="h2">Basic form, validation only done when trying to submit</Text>
        <Form {...form2}>
          <form onSubmit={form2.handleSubmit(onSubmit2)} className="space-y-8">
            <FormField
              control={form2.control}
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
                            form2.setValue('search', '')
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

            <FormField
              control={form2.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="searching..."
                      icon={<TbSearch />}
                      inputSide={
                        <Button variant="unstyled" onClick={() => form2.setValue('search', '')}>
                          <TbX />
                        </Button>
                      }
                      rounded
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form2.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test event handlers</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onBlur={() => console.log('input blurred')}
                      onFocus={() => console.log('input focused')}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        console.log('input changed', e.target.value)
                        field.onChange(e)
                      }}
                      onInput={(e: ChangeEvent<HTMLInputElement>) => {
                        console.log('input changed', e.target.value)
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

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
                        inputSide={
                          showPassword ? (
                            <Button variant="unstyled" onClick={togglePasswordVisibility} size="icon-lg">
                              <TbEyeClosed />
                            </Button>
                          ) : (
                            <Button variant="unstyled" onClick={togglePasswordVisibility} size="icon-lg">
                              <TbEye />
                            </Button>
                          )
                        }
                        {...field}
                        className="pr-10"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

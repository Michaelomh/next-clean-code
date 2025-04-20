'use client'

import {
  Text,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  Checkbox,
} from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import {
  TbArrowNarrowLeft,
  TbBeer,
  TbCircleCheck,
  TbIceCream2,
  TbPill,
  TbPizza,
  TbPlaneTilt,
  TbRecycle,
  TbSalad,
} from 'react-icons/tb'

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const

const foodItems = [
  {
    id: 'pizza',
    label: 'Pizza',
    icon: TbPizza,
  },
  {
    id: 'salad',
    label: 'Salad',
    icon: TbSalad,
  },
  {
    id: 'beer',
    label: 'Beer',
    icon: TbBeer,
  },
  {
    id: 'ice-cream',
    label: 'Ice Cream',
    icon: TbIceCream2,
  },
]

const cardCheckbox = [
  {
    label: 'Colors',
    value: 'colors',
    icon: TbPill,
  },
  {
    label: 'Emojis',
    value: 'emojis',
    icon: TbPlaneTilt,
  },
  {
    label: 'Spacing',
    value: 'spacing',
    icon: TbRecycle,
  },
]

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  foodItems: z.array(z.string()).refine((value) => value.some((item) => item)),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: 'You must accept the terms and conditions to continue',
  }),
  isAdmin: z.boolean(),
  isSize: z.boolean(),
})

type FormValues = z.infer<typeof FormSchema>

const defaultValues: Partial<FormValues> = {
  items: ['recents', 'home'],
  foodItems: [],
  acceptTerms: true,
  isAdmin: false,
  isSize: false,
}

export default function Home() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  function onSubmit(data: FormValues) {
    console.log('onSubmit')
    console.log(data)
  }
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Link href="/test" className="flex items-center gap-2">
        <TbArrowNarrowLeft size={36} />
        <Text style="h1">Checkbox Testing</Text>
      </Link>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Multi select checkbox</FormLabel>
                    <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary underline">
                          Terms and Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary underline">
                          Privacy Policy
                        </Link>
                      </FormLabel>
                      <FormMessage preserveSpace />
                    </div>
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name="isAdmin"
              render={({ field }) => {
                return (
                  <FormItem className="flex w-full items-center gap-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="flex flex-col gap-2">
                      <FormLabel>Admin Role</FormLabel>
                      <FormMessage>This role has access to everything</FormMessage>
                    </div>
                  </FormItem>
                )
              }}
            />

            <Text>Position - vertical vs horizontal</Text>
            <FormField
              control={form.control}
              name="foodItems"
              render={() => (
                <FormItem className="flex space-x-4">
                  {foodItems.map(({ id, label, icon: Icon }) => (
                    <FormField
                      key={id}
                      control={form.control}
                      name="foodItems"
                      render={({ field }) => {
                        return (
                          <FormItem key={id} className="flex flex-row items-start space-y-0 space-x-1">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, id])
                                    : field.onChange(field.value?.filter((value) => value !== id))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              <Icon />
                              {label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Text>Card checkbox</Text>
            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {cardCheckbox.map((option) => (
                <CheckboxPrimitive.Root
                  key={option.value}
                  className="ring-border text-muted-foreground data-[state=checked]:ring-primary data-[state=checked]:text-primary relative rounded-lg px-4 py-3 text-start ring-[1px] data-[state=checked]:ring-2"
                >
                  <option.icon className="mb-3" />
                  <span className="font-medium tracking-tight">{option.label}</span>
                  <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
                    <TbCircleCheck className="fill-primary text-primary-foreground" />
                  </CheckboxPrimitive.Indicator>
                </CheckboxPrimitive.Root>
              ))}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

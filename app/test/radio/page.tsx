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
  RadioGroup,
  RadioGroupItem,
} from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const options1 = [
  {
    value: '4gb',
    label: '4GB + 64GB',
  },
  {
    value: '6gb',
    label: '6GB + 128GB',
  },
  {
    value: '8gb',
    label: '8GB + 128GB',
  },
]

const FormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  pricing: z.enum(['premium', 'standard', 'free']),
})

type formValues = z.infer<typeof FormSchema>

const defaultValues: Partial<formValues> = {
  type: undefined,
  pricing: 'free',
}

export default function Home() {
  const form = useForm<formValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  function onSubmit(data: formValues) {
    console.log(data)
  }
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Link href="/test" className="flex items-center gap-2">
        <TbArrowNarrowLeft size={36} />
        <Text style="h1">Radio Group Testing</Text>
      </Link>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notify me about... (label + error when empty)</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">All new messages</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pricing"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Choose your pricing plan!. (label + description)</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="free" />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel>Free</FormLabel>
                          <FormMessage>free for everything.</FormMessage>
                        </div>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="standard" />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel>Standard</FormLabel>
                          <FormMessage>9.99$ for everything.</FormMessage>
                        </div>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="premium" />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel>Premium</FormLabel>
                          <FormMessage>18.99$ for everything.</FormMessage>
                        </div>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Text>Position - vertical vs horizontal</Text>

            <Text>Card checkbox 1</Text>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

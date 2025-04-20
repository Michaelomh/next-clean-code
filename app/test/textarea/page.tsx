'use client'

import {
  Text,
  Button,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const formSchema = z.object({
  bio: z.string().max(160).min(4),
  bio2: z.string().optional(),
  maxLength: z
    .string()
    .max(
      50,
      "Can't be longer than 50 char. If the error message is too long, please update the FormMessage / FormDescription width accordingly. (e.g. w-[calc(100%-80px)] 2 digit width = 46px, 3 digit width = 62px",
    )
    .optional(),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
})

type formValues = z.infer<typeof formSchema>

// This can come from your database or API.
const defaultValues: Partial<formValues> = {
  bio: 'I own a computer.',
  bio2: '',
  maxLength: '',
}

export default function Home() {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  function onSubmit(data: formValues) {
    console.log(data)
  }
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Link href="/test" className="flex items-center gap-2">
        <TbArrowNarrowLeft size={36} />
        <Text style="h1">Texarea Testing</Text>
      </Link>

      <div>
        <Text style="h2">Basic form, validation only done when trying to submit</Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us a little bit about yourself" resize="none" {...field} />
                  </FormControl>
                  <FormMessage>
                    You can <span>@mention</span> other users and organizations to link to them.
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testing resize</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Resizable" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Counter (maxlength = 50)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="maxlength = 50" maxLength={50} {...field} />
                  </FormControl>
                  <FormMessage className="w-[calc(100%-80px)]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Counter (show counter only if length is beyond threshold)</FormLabel>
                  <FormDescription>Show counter only when threshold is hit 80%(40)</FormDescription>
                  <FormControl>
                    <Textarea placeholder="maxlength = 50" maxLength={50} counterThreshold={80} {...field} />
                  </FormControl>
                  <FormMessage className="w-[calc(100%-80px)]" />
                </FormItem>
              )}
            />

            <Button type="submit">Update profile</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

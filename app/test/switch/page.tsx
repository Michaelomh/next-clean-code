'use client'

import { Text, Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Switch } from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const formSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

type formValues = z.infer<typeof formSchema>

const defaultValues: Partial<formValues> = {
  marketing_emails: false,
  security_emails: false,
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
        <Text style="h1">Switch Testing</Text>
      </Link>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Marketing emails</FormLabel>
                    <FormMessage>Receive emails about new products, features, and more.</FormMessage>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Text>Switch with label and descrpition</Text>

            <Text>Switch with custom icon</Text>

            <Text>Switch size (sm, md, lg, xl)</Text>

            <Text>Switch colors (custom styling on and off) - it's like colors</Text>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

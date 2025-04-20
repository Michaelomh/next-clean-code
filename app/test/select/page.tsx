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
  SelectTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@ui/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { TbApple, TbArrowNarrowLeft, TbCarrot, TbCherry, TbLemon2, TbUser } from 'react-icons/tb'

const formSchema = z.object({
  email: z.string().email(),
  timezone: z.string(),
  customDropdown: z.string(),
  rounded: z.string(),
  iconLeft: z.string(),
})

type formValues = z.infer<typeof formSchema>

const defaultValues: Partial<formValues> = {
  email: '',
}

export default function Home() {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  function onSubmit(data: formValues) {
    console.log(data)
  }

  const fruits = [
    { value: 'apple', label: 'Apple', icon: TbApple },
    { value: 'carrot', label: 'Carrot', icon: TbCarrot },
    { value: 'cherry', label: 'Cherry', icon: TbCherry },
    { value: 'citrus', label: 'Citrus', icon: TbLemon2 },
  ]

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Link href="/test" className="flex items-center gap-2">
        <TbArrowNarrowLeft size={36} />
        <Text style="h1">Select Testing</Text>
      </Link>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Text style="h1">Basic</Text>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">m@support.com</SelectItem>
                      <SelectItem value="m@support">invalid email (when submit)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>You can manage email addresses in your email settings.</FormMessage>
                </FormItem>
              )}
            />

            <Text style="h1">Scrollable (options with Headers)</Text>
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezone</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                        <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                        <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                        <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                        <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                        <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                        <SelectItem value="cst">China Standard Time (CST)</SelectItem>
                        <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                        <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                        <SelectItem value="ist">Indonesia Central Standard Time (WITA)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Text style="h1">Custom dropdown Icon</Text>
            <FormField
              control={form.control}
              name="customDropdown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Dropdown</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger dropdownIcon={<TbUser />}>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="option1">Option1</SelectItem>
                      <SelectItem value="option2">Option2</SelectItem>
                      <SelectItem value="option3">Option3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Text style="h1">Rounded</Text>
            <FormField
              control={form.control}
              name="rounded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>rounded</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger rounded>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="option1">Option1</SelectItem>
                      <SelectItem value="option2">Option2</SelectItem>
                      <SelectItem value="option3">Option3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Text style="h1">with Icon left</Text>

            <FormField
              control={form.control}
              name="iconLeft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon left</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fruits.map((fruit) => (
                        <SelectItem key={fruit.value} value={fruit.value}>
                          <div className="flex items-center gap-2">
                            <fruit.icon className="h-4 w-4" /> {fruit.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Text style="h1">open by default</Text>
            <FormField
              control={form.control}
              name="iconLeft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon left</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} open>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fruits.map((fruit) => (
                        <SelectItem key={fruit.value} value={fruit.value}>
                          <div className="flex items-center gap-2">
                            <fruit.icon className="h-4 w-4" /> {fruit.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Text style="h1">Multiselect</Text>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

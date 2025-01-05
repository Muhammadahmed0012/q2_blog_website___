"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type FormValues = z.infer<typeof formSchema>

const formSchema = z.object({
  youremail: z.string().min(2).max(50),
})

const ConatctForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      youremail: "",
    }
  })

  function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center items-center space-x-2"
      >
        <FormField
          control={form.control}
          name="youremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  className="bg-white text-black sm:w-[220px] w-[190px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#7c4ee4] border border-white hover:bg-white hover:text-[#7c4ee4] mt-2"
        >
          Get Started
        </Button>
      </form>
    </Form>
  )
}

export default ConatctForm

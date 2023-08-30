"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { labels, priorities, statuses } from "./data/data"

const formSchema = z.object({
  goalname: z.string().min(2, {
    message: "Goal name must be at least 2 characters.",
  }),
  status: z.string(),
  priority: z.string(),
  label: z.string()
})

export function GoalForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goalname: "",
      status: "todo",
      priority: "medium",
      label: ""
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="goalname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Goal</FormLabel>
              <FormControl>
                <Input placeholder="Exercise for 15 minutes" {...field} />
              </FormControl>
              <FormDescription>
                This is name for your goal.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
              <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status, index) => (
                    <SelectItem key={index} value={status.value}>
                      <span className="flex flex-1 items-center">
                        {status.icon && (
                          <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        {status.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
              <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority, index) => (
                    <SelectItem key={index} value={priority.value}>
                      <span className="flex flex-1 items-center">
                        {priority.icon && (
                          <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        {priority.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Label" />
                </SelectTrigger>
                <SelectContent>
                  {labels.map((label, index) => (
                    <SelectItem key={index} value={label.value}>
                      <span className="flex flex-1 items-center">
                        {label.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </Form>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GoalForm } from "./goal-form"
import { PlusCircledIcon } from "@radix-ui/react-icons"


export function GoalDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-400 h-8 px-2 lg:px-3"><PlusCircledIcon className="mr-2 h-4 w-4" />Add Goal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Add a Goal</DialogTitle>
          <DialogDescription>
            Add a goal name, status and priority 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <GoalForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
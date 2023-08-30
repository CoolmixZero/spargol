import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { taskSchema } from "@/components/data/schema"


import { Heading } from "@/components/heading"
import { GanttChartSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Spargol | Today's Goals",
  description: "A goal and issue tracker.",
}

// const goals = [
//   {
//     title: "Workout for 10 minutes",
//     description: "If I'll have some time, go for a run",
//     priority: "HIGH",
//     status: "COMPLETE"
//   },
//   {
//     title: "Read 3 chapters of a book",
//     description: "Choose a book from the shelf and start reading",
//     priority: "MEDIUM",
//     status: "INCOMPLETE"
//   },
//   {
//     title: "Cook a homemade dinner",
//     description: "Try out that new recipe you found online",
//     priority: "HIGH",
//     status: "INCOMPLETE"
//   },
//   {
//     title: "Learn a new guitar chord",
//     description: "Practice the chord transitions for smoother playing",
//     priority: "LOW",
//     status: "COMPLETE"
//   },
//   {
//     title: "Plan a weekend getaway",
//     description: "Research and decide on a destination for a short trip",
//     priority: "MEDIUM",
//     status: "INCOMPLETE"
//   },
//   {
//     title: "Complete a coding tutorial",
//     description: "Follow the steps of the tutorial to learn a new skill",
//     priority: "HIGH",
//     status: "COMPLETE"
//   },
//   {
//     title: "Organize the workspace",
//     description: "Clean up and declutter the desk and shelves",
//     priority: "MEDIUM",
//     status: "INCOMPLETE"
//   },
//   {
//     title: "Practice meditation",
//     description: "Set aside 15 minutes for mindfulness meditation",
//     priority: "LOW",
//     status: "INCOMPLETE"
//   },
//   {
//     title: "Write a journal entry",
//     description: "Reflect on the day and jot down thoughts in the journal",
//     priority: "MEDIUM",
//     status: "COMPLETE"
//   },
//   {
//     title: "Create a budget for the month",
//     description: "Review expenses and income to plan out finances",
//     priority: "HIGH",
//     status: "INCOMPLETE"
//   }
// ];

// Simulate a database read for tasks.

async function getGoals() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/data/goals.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function Today() {
  const goals = await getGoals();

  return (
    <div className="relative p-4">
      <Heading
          title="Your goals for today"
          description="Here&apos;s a list of your tasks for this month!"
          icon={GanttChartSquare}
          iconColor="text-yellow-400"
          bgColor="bg-yellow-400/10"
        />  
      <div className="relative h-full sm:w-fit flex-1 flex-col space-y-8 px-8 pb-8 md:flex">
        <DataTable data={goals} columns={columns} />
      </div>
    </div>
  )
}

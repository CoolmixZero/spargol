"use client"

import Link from "next/link";
import { IoSparklesSharp } from "react-icons/io5"
import { usePathname } from "next/navigation"
import { CalendarDays, Code, GanttChartSquare, LayoutDashboard, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({weight: "400", subsets: ["latin"]});

const routes = [
  {
    label: "Today",
    icon: GanttChartSquare,
    href: "/today",
  },
  {
    label: "Calendar",
    icon: CalendarDays,
    href: "/calendar",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  }
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full space-y-4 py-4 border-r border-white/5">
      <div className="px-3 py-2 flex-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
        <Link href="/today" className="flex gap-1 items-center pl-3 mb-14">
          <IoSparklesSharp className="text-yellow-200"/>
          <h1 className={cn("text-2xl font-bold", pacifico.className)} >
            Spargol
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              prefetch={false}
              href={route.href}
              key={route.href}
              className={cn(`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition hover:text-yellow-500`,
              pathname === route.href ? `text-yellow-400 bg-white/10 hover:text-yellow-500` : `text-zinc-400`
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3 text-yellow-400")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
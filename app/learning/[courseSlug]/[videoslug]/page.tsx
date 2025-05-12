"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Settings, Volume2, Maximize2 } from "lucide-react"
import Image from "next/image"
import courseThumbnail from "/public/assets/images/course-thumb.png"
import { useRouter, usePathname } from "next/navigation"

type VideoSlugProps = {
  videoUrl: string
}

export default function VideoSlug({ videoUrl }: VideoSlugProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (direction: "next" | "prev") => {
    const parts = pathname.split("/")
    const currentId = parts[parts.length - 1]

    if (isNaN(currentId as any)) {
      console.error("invalid ID:", pathname)
      return
    }

    const newId =
      direction === "next"
        ? Number(currentId) + 1
        : Number(currentId) - 1

    if (newId < 1) return

    parts[parts.length - 1] = newId.toString()
    const newPath = parts.join("/")

    router.push(newPath)
  }

  return (
    <div className="w-full px-6 md:px-12 py-10">
      <h1 className="text-3xl font-bold text-[#2A2A2A]">
        Introduction to Programming
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        Get Started with Python if you have no coding experience
      </p>

      <Tabs defaultValue="classroom" className="mt-6">
        <TabsList className="bg-transparent border-b border-gray-300 px-0">
          <TabsTrigger
            value="classroom"
            className="text-base font-semibold text-[#202124] border-b-2 border-[#202124] rounded-none px-0 mr-6 data-[state=inactive]:border-none data-[state=inactive]:text-gray-500"
          >
            Classroom
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="text-base font-medium text-gray-500 border-none rounded-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-[#202124] data-[state=active]:text-[#202124]"
          >
            Data(0)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6 max-w-lg">
        <Card className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Image
              src={courseThumbnail}
              alt="Course"
              className="w-14 h-14 rounded"
            />
            <div>
              <h3 className="font-medium text-sm text-[#202124]">
                Introduction to Programming
              </h3>
              <p className="text-xs text-gray-500">
                Get Started with Python if you have no coding experience
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Module <span className="font-semibold">1/5</span>
          </div>
        </Card>
      </div>

      <div className="mt-8 w-full flex flex-col gap-8">
        <div className="w-full">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              width="100%"
              height="380"
              allow="autoplay"
              allowFullScreen
              className="w-full rounded-lg"
            />
            <div className="absolute top-4 left-4 text-white">
              <ChevronLeft size={24} />
            </div>
            <div className="absolute top-4 right-4 text-white flex gap-4">
              <Settings size={20} />
              <Volume2 size={20} />
              <Maximize2 size={20} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <Button
            className="bg-[#4393F4] text-white hover:bg-[#3b82dd]"
            onClick={() => handleNavigation("prev")}
          >
            PREVIOUS
          </Button>
          <Button
            className="bg-[#4393F4] text-white hover:bg-[#3b82dd]"
            onClick={() => handleNavigation("next")}
          >
            NEXT
          </Button>
        </div>
      </div>
    </div>
  )
}

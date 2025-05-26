// components/VideoSlug.tsx
"use client"

import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Settings, Volume2, Maximize2 } from "lucide-react"
import Image from "next/image"
import courseThumbnail from "/public/assets/images/course-thumb.png"
import { useRouter, usePathname } from "next/navigation"

// Next.js page props interface for the actual page
interface PageProps {
  params: { courseSlug: string; videoslug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Component props interface
interface VideoSlugProps {
  videoUrl: string
  courseSlug?: string
  videoSlug?: string
}

// Function to get video URL based on course slug and video slug
function getVideoUrl(courseSlug: string, videoSlug: string): string {
  const videoUrls: { [key: string]: { [key: string]: string } } = {
    "intro-to-programming": {
      "1": "https://drive.google.com/file/d/1DKFmbduWTR_8p2xP3FZkkcUO5A1Q5HIW/preview",
      "2": "https://drive.google.com/file/d/1p60Ey6KS5caUqgjpB5ujOMqM_0-LAYEB/preview",
    },
    "python-basics": {
      "1": "https://example.com/python-video1.mp4",
      "2": "https://example.com/python-video2.mp4",
    },
  }

  return (
    videoUrls[courseSlug]?.[videoSlug] ||
    "https://example.com/default-video.mp4"
  )
}

// VideoSlug Component (reusable)
export function VideoSlug({ videoUrl, courseSlug, videoSlug }: VideoSlugProps) {
  const router = useRouter()
  const pathname = usePathname()

  const parts = pathname.split("/")
  const videoSlug = parts[parts.length - 1]

  const handleNavigation = (direction: "next" | "prev") => {
    const currentId = videoSlug

    if (isNaN(Number(currentId))) {
      console.error("invalid ID:", pathname)
      return
    }

    const newId =
      direction === "next" ? Number(currentId) + 1 : Number(currentId) - 1

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
            className="text-base font-medium text-gray-500 border-none rounded-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-[#202124] data-[state=active]:text-[#202124]">
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
            {videoUrl ? (
              <iframe
                src={videoUrl}
                width="100%"
                height="380"
                allow="autoplay"
                allowFullScreen
                className="w-full rounded-lg"
                title={`Video ${videoSlug || "Player"}`}
              />
            ) : (
              <div className="w-full h-[380px] flex items-center justify-center text-white">
                <p>Video not available</p>
              </div>
            )}
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

// Default export for Next.js page
export default function Page({ params, searchParams }: PageProps) {
  const { courseSlug, videoslug } = params

  // Get video URL based on course slug and video slug
  const videoUrl = getVideoUrl(courseSlug, videoslug)

  // You can also get videoUrl from searchParams if it's passed as a query parameter
  // const videoUrl = (searchParams.videoUrl as string) || getVideoUrl(courseSlug, videoslug)

  return (
    <VideoSlug
      videoUrl={videoUrl}
      courseSlug={courseSlug}
      videoSlug={videoslug}
    />
  )
}

// "use client"

// import React from "react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ChevronLeft, Settings, Volume2, Maximize2 } from "lucide-react"
// import Image from "next/image"
// import courseThumbnail from "/public/assets/images/course-thumb.png"
// import { useRouter, usePathname } from "next/navigation"

// type VideoSlugProps = {
//   videoUrl: string
// }

// export default function VideoSlug({ videoUrl }: VideoSlugProps) {
//   const router = useRouter()
//   const pathname = usePathname()

//   const handleNavigation = (direction: "next" | "prev") => {
//     const parts = pathname.split("/")
//     const currentId = parts[parts.length - 1]

//     if (isNaN(currentId as any)) {
//       console.error("invalid ID:", pathname)
//       return
//     }

//     const newId =
//       direction === "next"
//         ? Number(currentId) + 1
//         : Number(currentId) - 1

//     if (newId < 1) return

//     parts[parts.length - 1] = newId.toString()
//     const newPath = parts.join("/")

//     router.push(newPath)
//   }

//   return (
//     <div className="w-full px-6 md:px-12 py-10">
//       <h1 className="text-3xl font-bold text-[#2A2A2A]">
//         Introduction to Programming
//       </h1>
//       <p className="text-gray-600 text-sm mt-1">
//         Get Started with Python if you have no coding experience
//       </p>

//       <Tabs defaultValue="classroom" className="mt-6">
//         <TabsList className="bg-transparent border-b border-gray-300 px-0">
//           <TabsTrigger
//             value="classroom"
//             className="text-base font-semibold text-[#202124] border-b-2 border-[#202124] rounded-none px-0 mr-6 data-[state=inactive]:border-none data-[state=inactive]:text-gray-500"
//           >
//             Classroom
//           </TabsTrigger>
//           <TabsTrigger
//             value="data"
//             className="text-base font-medium text-gray-500 border-none rounded-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-[#202124] data-[state=active]:text-[#202124]"
//           >
//             Data(0)
//           </TabsTrigger>
//         </TabsList>
//       </Tabs>

//       <div className="mt-6 max-w-lg">
//         <Card className="flex items-center justify-between p-4">
//           <div className="flex items-center gap-4">
//             <Image
//               src={courseThumbnail}
//               alt="Course"
//               className="w-14 h-14 rounded"
//             />
//             <div>
//               <h3 className="font-medium text-sm text-[#202124]">
//                 Introduction to Programming
//               </h3>
//               <p className="text-xs text-gray-500">
//                 Get Started with Python if you have no coding experience
//               </p>
//             </div>
//           </div>
//           <div className="text-sm text-gray-600">
//             Module <span className="font-semibold">1/5</span>
//           </div>
//         </Card>
//       </div>

//       <div className="mt-8 w-full flex flex-col gap-8">
//         <div className="w-full">
//           <div className="relative bg-black rounded-lg overflow-hidden">
//             <iframe
//               src={videoUrl}
//               width="100%"
//               height="380"
//               allow="autoplay"
//               allowFullScreen
//               className="w-full rounded-lg"
//             />
//             <div className="absolute top-4 left-4 text-white">
//               <ChevronLeft size={24} />
//             </div>
//             <div className="absolute top-4 right-4 text-white flex gap-4">
//               <Settings size={20} />
//               <Volume2 size={20} />
//               <Maximize2 size={20} />
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mt-3">
//           <Button
//             className="bg-[#4393F4] text-white hover:bg-[#3b82dd]"
//             onClick={() => handleNavigation("prev")}
//           >
//             PREVIOUS
//           </Button>
//           <Button
//             className="bg-[#4393F4] text-white hover:bg-[#3b82dd]"
//             onClick={() => handleNavigation("next")}
//           >
//             NEXT
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

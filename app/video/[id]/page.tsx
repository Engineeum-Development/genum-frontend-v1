import React from "react"
import VideoSlug from "@/app/learning/[courseSlug]/[videoslug]/page"

const videoMap: Record<string, string> = {
  "1": "https://drive.google.com/file/d/1Urb8mGWPHfcoQAZXw1ZH5E51xwOoGSZb/preview",
  "2": "https://drive.google.com/file/d/1TmHpqq9lqOM3lBijjOe4V-ACVbK-DD4C/preview",
  "3": "https://drive.google.com/file/d/1OiwKXCeu_UsRpkaCze28D6HU8Dbjf38n/preview",
  "4": "https://drive.google.com/file/d/1c50ujmzG1W74VP129UDG9Vv08jUrE0aL/preview",


}

type Props = {
  params: {
    id: string
  }
}

export default function VideoPage({ params }: Props) {
  const videoUrl = videoMap[params.id] || ""

  return <VideoSlug videoUrl={videoUrl} />
}

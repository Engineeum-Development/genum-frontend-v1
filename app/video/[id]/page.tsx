import React from "react"
import VideoSlug from "@/app/learning/[courseSlug]/[videoslug]/page"

const videoMap: Record<string, string> = {
  "1": "https://drive.google.com/file/d/1DKFmbduWTR_8p2xP3FZkkcUO5A1Q5HIW/preview",
  "2": "https://drive.google.com/file/d/1p60Ey6KS5caUqgjpB5ujOMqM_0-LAYEB/preview",
  "3": "https://drive.google.com/file/d/1rpYqdgmflVYgnAZlsroseOmYhh5Vb8L9/preview",
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

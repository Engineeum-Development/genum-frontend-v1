import React from "react"
import CardImg from "/public/assets/images/card--img.png"
import Image from "next/image"
import Link from "next/link"

type Course = {
  title: string
  description: string
  id: string
  image: string
}

type LearningCardProps = {
  course: Course
}

function LearningCard({ course }: LearningCardProps) {
  return (
    <Link href={`/video/${course.id}`}>
      <div className="w-[285px] h-[230px] border border-[#202124] rounded-sm p-2 flex flex-col hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="flex gap-1 items-center p-1">
          <p className="text-[#202124] font-semibold text-xl">
            {course.title}
          </p>
          <Image width={70} height={70} src={CardImg} alt="" />
        </div>
        <p className="mt-3 text-sm text-[#0A0A0B]">2 hours. 1 guided project</p>
        <p className="mt-3 text-sm text-[#0A0A0B] mb-2">
          {course.description}
        </p>
        <span className="border-t border-[#202124] text-[#0A0A0B] mt-6">
          No prerequisites
        </span>
      </div>
    </Link>
  )
}

export default LearningCard

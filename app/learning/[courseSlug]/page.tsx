import React from "react";
import learningImg from "/public/assets/images/genum--learning.png";
import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi2"
import { IoListSharp } from "react-icons/io5"
import { IoGrid } from "react-icons/io5"
import LearningCard from "@/app/_components/learningCard";

function page() {
    return (
      <div className="flex flex-col w-full gap-8">
        <div className="flex w-11/12 mx-auto justify-between items-end">
          <div>
            <h2 className="font-bold text-2xl text-[#2A2A2A] mb-3">Learning</h2>
            <p className="font-sans text-base text-[#202124] font-normal">
              Contribute, download and work with datasets specific to Africa
            </p>
            <button className="bg-[#4393F4] text-[#F7F7F7] py-3 px-2 w-[212px] rounded mt-8">
              Get started
            </button>
          </div>
          <div>
            <Image src={learningImg} className="w-96 h-80" alt="learning" />
          </div>
        </div>
        <div className="w-11/12 mx-auto flex-col flex gap-6 items-center mt-8">
          <div className="w-full mx-auto flex justify-between items-center">
            <h2 className="flex gap-1 items-center text-[#202124] font-medium text-lg">
              <HiOutlineBookOpen className="text-xl" /> Course
            </h2>
            <div className="flex gap-2 items-center text-xl">
              <IoListSharp className="text-2xl" />
              <IoGrid />
            </div>
          </div>
          <div className="w-full flex ">
            <p className="text-[#202124] font-normal text-base">
              Go from beginner to expert in 6 months! Upskill with our
              self-paced, structured courses designed to be completed in 6
              months. Build and showcase your own solutions, and boost your
              confidence in machine learning!
            </p>
          </div>
        </div>
        <div className="w-[95%] mb-12 mx-auto flex flex-wrap justify-center gap-1 items-start">
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
        </div>
      </div>
    )
}

export default page
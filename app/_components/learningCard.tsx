import React from "react";
import CardImg from "/public/assets/images/card--img.png"
import Image from "next/image";


function LearningCard() {
    return (
      <div className="w-[285px] cursor-pointer border-[#202124] h-[230px] border border-1 rounded-sm p-2 flex flex-col ">
        <div className="flex gap-1 items-center p-1">
          <h5 className="text-[#202124] font-semibold text-xl">
            Introduction to programming{" "}
          </h5>
          <Image width={70} height={70} src={CardImg} alt="" />
        </div>
        <p className="mt-3 text-sm text-[#0A0A0B]">2 hours. 1 guided project</p>
        <p className="mt-3 text-sm text-[#0A0A0B] mb-2">
          Get Started with Python if you have no coding experience
        </p>
        <span className="border-t border-[#202124] text-[#0A0A0B] mt-6">
          No prerequisites
        </span>
      </div>
    )
}

export default LearningCard
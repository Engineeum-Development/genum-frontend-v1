"use client";

import img1 from "@/public/assets/images/data-img-npfl.png";
import menu from "@/public/assets/images/data-more-icon.png";
import progressDummy from "@/public/assets/images/progress-dummy.png";
import likeIcon from "@/public/assets/images/like-Icon.png";
import Image from "next/image";

import { Card, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";

function DatasetGrid() {
  const router = useRouter();

  function handleClick() {
    router.push("/datasets/[id]");
  }
  // console.log("running");
  return (
    <Card
      className="mt-6 max-w-[264px] bg-[#FAFAFA] p-3 shrink-0"
      onClick={handleClick}
    >
      <Image
        src={img1}
        alt="data-img"
        className="max-h-[114px] rounded-[10px] border border-[#6E6E6E]"
      />
      <div className="flex items-center justify-between gap-[19px] mt-3">
        <CardHeader className="py-0 px-0 text-[20px] font-semibold">
          Construction Materials Prices in Nigeria
        </CardHeader>
        <Image src={menu} alt="data-more-icon" className="max-h-[114px]" />
      </div>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3">
        Grace Adeboye. Updated 3 days ago
      </p>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3">
        Rating 9.0 . 15 kB
      </p>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3">
        1 File (CSV)
      </p>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center ">
          <div className="border-y border-l px-3 py-[7px] rounded-l-md border-[#202124]">
            <Image src={likeIcon} alt="icon-like" className="" />
          </div>
          <p className="px-3 py-2 border border-[#202124] rounded-r-md text-[9.13px]">
            12
          </p>
        </div>
        <Image className="" src={progressDummy} alt="progress" />
      </div>
    </Card>
  );
}

export default DatasetGrid;

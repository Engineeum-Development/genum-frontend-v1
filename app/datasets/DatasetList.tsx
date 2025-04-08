import img1 from "@/public/assets/images/data-img-npfl.png";
import menu from "@/public/assets/images/data-more-icon.png";
import progressDummy from "@/public/assets/images/progress-dummy.png";
import likeIcon from "@/public/assets/images/like-Icon.png";
import Image from "next/image";

import { Card, CardHeader } from "@/components/ui/card";

function DatasetList() {
  return (
    <Card className="shadow-none border-none flex mt-[48px] justify-between gap-1 w-full flex-col sm:flex-row">
      <div className="flex items-start sm:justify-between gap-[19px] ">
        <Image
          src={img1}
          alt="data-img"
          className="w-[100px] h-[100px] rounded-[10px] border border-[#6E6E6E] size-[18px] shrink-0"
        />
        <div className="flex items-start justify-between px] flex-col ">
          <CardHeader className="py-0 px-0 text-[20px] font-semibold">
            Construction Materials Prices in Nigeria
          </CardHeader>
          <div className="hidden sm:block">
            <p className="text-[13px] text-[#0A0A0B] font-medium ">
              Grace Adeboye. Updated 3 days ago
            </p>
            <p className="text-[13px] text-[#0A0A0B] font-medium">
              Rating 9.0 . 15 kB
            </p>
            <p className="text-[13px] text-[#0A0A0B] font-medium ">
              1 File (CSV)
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 gap-2">
        <div className="sm:hidden">
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            Grace Adeboye. Updated 3 days ago
          </p>
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            Rating 9.0 . 15 kB
          </p>
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            1 File (CSV)
          </p>
        </div>
        <div className="flex items-end  w-fit flex-col gap-[2px]">
          <div className="flex items-center">
            <div className="border-y border-l px-3 py-[7.5px] rounded-l-md border-[#202124] shrink-0">
              <Image src={likeIcon} alt="icon-like" className="" />
            </div>
            <p className="px-3 py-2 border border-[#202124] rounded-r-md text-[9.13px]">
              12
            </p>
          </div>
          <Image src={menu} alt="data-more-icon" className=" rotate-90 mr-2" />
        </div>
      </div>
    </Card>
  );
}

export default DatasetList;

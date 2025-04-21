import gridIcon from "@/public/assets/images/icon-grid.png";
import listIcon from "@/public/assets/images/icon-list.png";
import arrowDown from "@/public/assets/images/arrow-down-icon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import trendingUp from "@/public/assets/images/trending-up-icon.png";
import viewIcon from "@/public/assets/images/eye-icon.png";
import downloadIcon from "@/public/assets/images/download-icon.png";
import chatIcon from "@/public/assets/images/chat-icon.png";
import profileIcon from "@/public/assets/images/profile-icon.png";
import iconRight from "@/public/assets/images/icon-right.png";

function ActivityOverview() {
  return (
    <div className="mt-[56px]">
      <div className="mt-6 flex justify-between items-center flex-col gap-3 min-[500px]:flex-row min-[500px]:items-center">
        <div className="flex gap-3 items-center">
          <Image src={trendingUp} alt="trending-up" />
          <p className="font-semibold text-[25px]">Activity Overview</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="">Relevance</p>
          <Button className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none">
            <Image src={arrowDown} alt="arrow-down" />
          </Button>
          <Button className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none">
            <Image src={listIcon} alt="list-icon" />
          </Button>
          <Button className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none py-0">
            <Image src={gridIcon} alt="grid-icon" />
          </Button>
        </div>
      </div>

      <div className="mt-[48px] flex items-center sm:items-start justify-between flex-wrap gap-5">
        <div className="flex flex-col lg:items-start sm:w-fit w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={viewIcon} alt="view-icon" />
            <p className="text-[20px] font-semibold text-[#2A2A2A]">Views</p>
          </div>
          <p className="  text-[#2A2A2A] text-[39px] font-bold  w-full text-center">
            1
          </p>
          <p className="text-[#6E6E6E] text-[15px] font-semibold">
            in the last 30 days
          </p>
        </div>
        <div className="flex flex-col lg:items-start sm:w-fit w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={downloadIcon} alt="view-icon" />
            <p className="text-[20px] font-semibold text-[#2A2A2A]">
              Downloads
            </p>
          </div>
          <p className="  text-[#2A2A2A] text-[39px] font-bold  w-full text-center">
            1
          </p>
          <p className="text-[#6E6E6E] text-[15px] font-semibold">
            in the last 30 days
          </p>
        </div>
        <div className="flex flex-col lg:items-start sm:w-fit w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={iconRight} alt="view-icon" className="rotate-90" />
            <p className="text-[20px] font-semibold text-[#2A2A2A]">
              Engagements
            </p>
          </div>
          <p className="  text-[#2A2A2A] text-[39px] font-bold  w-full text-center">
            1
          </p>
          <p className="text-[#6E6E6E] text-[15px] font-semibold">
            in the last 30 days
          </p>
        </div>
        <div className="flex flex-col lg:items-start sm:w-fit w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={chatIcon} alt="view-icon" />
            <p className="text-[20px] font-semibold text-[#2A2A2A]">Comments</p>
          </div>
          <p className="  text-[#2A2A2A] text-[39px] font-bold  w-full text-center">
            1
          </p>
          <p className="text-[#6E6E6E] text-[15px] font-semibold">
            in the last 30 days
          </p>
        </div>
        <div className="flex flex-col lg:items-start sm:w-fit w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={profileIcon} alt="view-icon" />
            <p className="text-[20px] font-semibold text-[#2A2A2A] text-">
              Top Contributor
            </p>
          </div>
          <p className="  text-[#2A2A2A] text-[39px] font-bold  w-full text-center">
            1
          </p>
          <p className="text-[#6E6E6E] text-[15px] font-semibold">
            in the last 30 days
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityOverview;

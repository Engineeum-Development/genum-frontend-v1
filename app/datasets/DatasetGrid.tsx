"use client";

import menu from "@/public/assets/images/data-more-icon.png";
import likeIcon from "@/public/assets/images/like-Icon.png";
import Image from "next/image";

import { Card, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { getInitials } from "../helpers";
import { upvoteDataset } from "../api/datasets";

function DatasetGrid({ data }: any) {
  const router = useRouter();

  function handleClick() {
    router.push(`/datasets/${data.datasetId}`);
  }

  async function handleUpvote() {
    // data.datasetId
    try {
      const res = await upvoteDataset(data.datasetId);
      router.refresh();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="mt-6 max-w-[264px] bg-[#FAFAFA] p-3 shrink-0">
      {data.imgUrl ? (
        <Image
          src={data.imgUrl}
          alt="data-img"
          className=" max-h-[114px] rounded-[10px] border border-[#6E6E6E]"
        />
      ) : (
        <div className=" flex items-center justify-center bg-gray-100 text-gray-600 text-lg font-semibold  h-[114px] rounded-[10px] border border-[#6E6E6E] shrink-0">
          {getInitials(data?.name)}
        </div>
      )}
      <div
        className="flex items-center justify-between gap-[19px] mt-3 cursor-pointer"
        onClick={handleClick}
      >
        <CardHeader className="py-0 px-0 text-[20px] font-semibold">
          {data.name || " Construction Materials Prices in Nigeria"}
        </CardHeader>
        <Image src={menu} alt="data-more-icon" className="max-h-[114px]" />
      </div>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3 text-wrap">
        {data?.collaborators[0].collaboratorName}. Updated 3 days ago
      </p>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3">
        Rating 9.0 . 15 kB
      </p>
      <p className="text-[13px] text-[#0A0A0B] font-medium mt-3">
        1 File ({data.contentType || "CSV"})
      </p>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center ">
          <button
            className="border-y border-l px-3 py-[7px] rounded-l-md border-[#202124]"
            onClick={handleUpvote}
          >
            <Image src={likeIcon} alt="icon-like" className="" />
          </button>
          <p className="px-3 py-2 border border-[#202124] rounded-r-md text-[9.13px]">
            {data.upvotes || 0}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default DatasetGrid;

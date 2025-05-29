"use client";

import Image from "next/image";

import menu from "@/public/assets/images/data-more-icon.png";
import likeIcon from "@/public/assets/images/like-Icon.png";

import { Card, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { getInitials } from "../helpers";
import { upvoteDataset } from "../api/datasets";
import { revalidatePath } from "next/cache";

function DatasetList({ data }: any) {
  const router = useRouter();
  function handleClick() {
    router.push(`/datasets/${data.datasetId}`);
  }

  // console.log(data);
  async function handleUpvote() {
    // data.datasetId
    try {
      const res = await upvoteDataset(data.datasetId);
      // revalidatePath("/datasets");
      router.refresh();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="shadow-none border-none flex mt-[20px] justify-between gap-1 w-full flex-col sm:flex-row">
      <div
        className="flex items-start sm:justify-between gap-[19px] cursor-pointer "
        onClick={handleClick}
      >
        {data.imgUrl ? (
          <Image
            src={data.imgUrl}
            alt="data-img"
            className="w-[100px] h-[100px] rounded-[10px] border border-[#6E6E6E] size-[18px] shrink-0"
          />
        ) : (
          <div className=" flex items-center justify-center bg-gray-100 text-gray-600 text-lg font-semibold w-[100px] h-[100px] rounded-[10px] border border-[#6E6E6E] shrink-0">
            {getInitials(data?.name)}
          </div>
        )}
        <div className="flex items-start justify-between px] flex-col">
          <CardHeader className="py-0 px-0 text-[20px] font-semibold">
            {data.name || " Construction Materials Prices in Nigeria"}
          </CardHeader>
          <div className="hidden sm:block">
            <p className="text-[13px] text-[#0A0A0B] font-medium ">
              {data?.collaborators[0].collaboratorName}. Updated 3 days ago
            </p>
            <p className="text-[13px] text-[#0A0A0B] font-medium">
              Rating 9.0 . 15 kB
            </p>
            <p className="text-[13px] text-[#0A0A0B] font-medium ">
              1 File ({data.contentType || "CSV"})
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 gap-2">
        <div className="sm:hidden">
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            {data.uploaderName}. Updated 3 days ago
          </p>
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            Rating 9.0 . 15 kB
          </p>
          <p className="text-[13px] text-[#0A0A0B] font-medium ">
            1 File ({data.contentType || "CSV"})
          </p>
        </div>
        <div className="flex items-end  w-fit flex-col gap-[2px]">
          <div className="flex items-center">
            <button
              className="border-y border-l px-3 py-[7.5px] rounded-l-md border-[#202124] shrink-0"
              onClick={handleUpvote}
            >
              <Image src={likeIcon} alt="icon-like" className="" />
            </button>
            <p className="px-3 py-2 border border-[#202124] rounded-r-md text-[9.13px]">
              {data.upvotes || 0}
            </p>
          </div>
          <Image src={menu} alt="data-more-icon" className=" rotate-90 mr-2" />
        </div>
      </div>
    </Card>
  );
}

export default DatasetList;

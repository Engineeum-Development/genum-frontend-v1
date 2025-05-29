import likeIcon from "@/public/assets/images/like-Icon.png";
import Image from "next/image";
import menu from "@/public/assets/images/data-more-icon.png";
import { getInitials } from "@/app/helpers";

function DatasetHero({ data }: any) {
  // console.log(data);

  return (
    <>
      <div className=" flex justify-between sm:items-center gap-3 border-t pt-5 flex-wrap min-[370px]:flex-nowrap">
        <div className="flex items-center gap-3">
          {data?.avatar ? (
            <Image src={data.avatar} alt="avatar" />
          ) : (
            <div className=" flex items-center justify-center bg-gray-100 text-gray-600 text-lg font-semibold size-10  rounded-full border border-[#6E6E6E] shrink-0">
              {getInitials(data?.collaborators[0].collaboratorName)}
            </div>
          )}
          <p className="">{data && data?.collaborators[0].collaboratorName}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center ">
            <div className="border-y border-l px-3 py-[7px] rounded-l-md border-[#202124] shrink-0">
              <Image src={likeIcon} alt="icon-like" className="" />
            </div>
            <p className="px-3 py-2 border border-[#202124] rounded-r-md text-[9.13px]">
              {data?.upvotes || 0}
            </p>
          </div>

          <a
            className="bg-[#4393F4] text-white py-0 text-[11px] px-1 min-[500px]:px-4 min-[500px]:text-[13px] min-[500px]:py-2 max-w-[212px] hover:bg-[#4393F4] text-center rounded-[7px]"
            // onClick={handleClick}
            download
            href={data?.fileDownloadUrl}
          >
            + Download
          </a>

          <Image src={menu} alt="data-more-icon" className="max-h-[114px]" />
        </div>
      </div>

      <div className="flex justify-between items-start sm:items-center gap-5 mt-10 md:pl-5 flex-col sm:flex-row ">
        <div className="flex justify-between gap-2  flex-col md:max-w-[337px] sm:max-w-[400px] ">
          <h1 className="text-[35px] font-bold text-[#2A2A2A]">{data?.name}</h1>
          <p className="mt-[10px] font-medium text-[#202124] text-[14px]">
            Be part of Africa&apos;s AI revolution. Contribute, connect, and
            create the future today on Genum
          </p>
        </div>

        {data?.thumbnailURL ? (
          <Image
            src={data.thumbnailURL}
            alt="img"
            className="w-full max-w-[356px] max-h-[239px] "
          />
        ) : (
          <div className=" flex items-center justify-center bg-gray-100 text-gray-600 text-lg font-semibold w-full max-w-[356px] max-h-[239px] h-[236px]  rounded-[10px] border border-[#6E6E6E] shrink-0">
            {getInitials(data?.name)}
          </div>
        )}
      </div>
    </>
  );
}

export default DatasetHero;

import Image from "next/image";

import preview from "@/public/assets/images/data-preview.png";
import boardIcon from "@/public/assets/images/view-boards.png";
import arrowRight from "@/public/assets/images/icon-right.png";
import folderIcon from "@/public/assets/images/folder-open.png";
import Link from "next/link";

function DataContent({ data }: any) {
  console.log(data);
  return (
    <div className="mt-[29px]">
      <div className="flex  gap-6 flex-col lg:flex-row justify-between ">
        <div className="xl:max-w-[798px] lg:max-w-[700px]">
          <h1 className="text-[31px] font-semibold text-[#2A2A2A]">
            About Dataset
          </h1>
          <h3 className="text-[25px] mt-[30px] font-semibold text-[#2A2A2A]">
            {data?.name || ""}
          </h3>
          <p className="mt-[15px] text-[16px]">{data?.description || ""}</p>
        </div>
        <div className="lg:max-w-[278px] flex-wrap items-center flex lg:flex-col gap-6 lg:items-start">
          <div className="flex items-start min-[446px]:items-center flex-col lg:items-start">
            <h2 className="text-[#2A2A2A] font-semibold text-[16px]">
              Usability
            </h2>
            <p className="text-[16px] font-normal text-[#202124] my-2">
              {data?.usability || ""}
            </p>
          </div>

          <div className="flex items-start min-[446px]:items-center flex-col lg:items-start">
            <h2 className="text-[#2A2A2A] font-semibold text-[16px]">
              License
            </h2>
            <p className="text-[16px] font-normal text-[#202124] my-2">
              {data?.license?.licenseName || ""}
            </p>
          </div>

          <div className="flex items-start min-[446px]:items-center flex-col lg:items-start">
            <h2 className="text-[#2A2A2A] font-semibold text-[16px]">
              License URL
            </h2>
            <Link
              href={data?.license?.licenseUrl || ""}
              className="text-[16px] font-normal text-[#202124]  my-2"
            >
              {data?.license?.licenseUrl || ""}
            </Link>
          </div>

          <div>
            <h2 className="text-[#2A2A2A] font-semibold text-[16px]">Tags</h2>
            <div className="flex gap-2 flex-wrap  my-2 ">
              {data?.tags?.map((tag: any) => (
                <p
                  className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] w-fit"
                  key={tag.name}
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[47px] flex gap-6 flex-col md:flex-row">
        <div>
          <Image src={preview} alt="preview-image" />
        </div>
        <div className="flex justify-between items-start flex-wrap md:flex-col">
          <div>
            <h1 className="text-[#2A2A2A] font-semibold text-[20px] mb-[15px]">
              Data Explorer
            </h1>
            <p>Version 1 (56.80 kB)</p>
            <div className="flex gap-[20px] mt-[12.5px] items-center">
              <Image src={boardIcon} alt="board-icon" className="size-[24px]" />
              <p className="text-[#202124] text-[16px] font-semibold">
                ebola data cs
              </p>
            </div>
            <div className="flex gap-[20px] mt-[12.5px] items-center md:border-b-2 pb-2 border-[#2A2A2A]">
              <Image src={boardIcon} alt="board-icon" className="size-[24px]" />
              <p className="text-[#202124] text-[16px] font-semibold">
                excel sample csv.
              </p>
            </div>
          </div>

          <div className="md:mt-[16px]">
            <h1 className="text-[#2A2A2A] font-semibold text-[20px] mb-[15px]">
              Summary
            </h1>
            <div className="flex gap-[20px] mt-[12.5px] items-center">
              <Image
                src={arrowRight}
                alt="board-icon"
                className="size-[24px]"
              />
              <Image
                src={folderIcon}
                alt="board-icon"
                className="size-[24px]"
              />
              <p className="text-[#202124] text-[14px] font-semibold">1 File</p>
            </div>
            <div className="flex gap-[20px] mt-[12.5px] items-center md:border-b-2 pb-2 border-[#2A2A2A]">
              <Image
                src={arrowRight}
                alt="board-icon"
                className="size-[24px]"
              />
              <Image src={boardIcon} alt="board-icon" className="size-[24px]" />
              <p className="text-[#202124] text-[14px] font-semibold">
                12 columns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataContent;

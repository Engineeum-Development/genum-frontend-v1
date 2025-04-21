import arrowDown from "@/public/assets/images/arrow-down-icon.png";
import Image from "next/image";
import DatasetGrid from "../DatasetGrid";

function RelatedDatasets() {
  return (
    <div className="mt-[29px]">
      <div className="flex items-center gap-2 relative">
        <Image
          src={arrowDown}
          alt="arrow-down"
          className="absolute top-7 w-[19px]"
        />
        <Image
          src={arrowDown}
          alt="arrow-down"
          className="absolute rotate-180 top-3 w-[19px] h-[px]"
        />
        <h1 className="text-[31px] font-semibold text-[#2A2A2A] ml-8">
          Related Datasets
        </h1>
      </div>

      <div className="flex gap-3 mt-[29px]">
        <DatasetGrid />
      </div>
    </div>
  );
}

export default RelatedDatasets;

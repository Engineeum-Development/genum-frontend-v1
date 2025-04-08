import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import searchLogo from "@/public/assets/images/search-icon.png";
import Datasets from "./Datasets";

function page() {
  return (
    <div className="px-10 py-10">
      <div className="flex justify-between items-center gap-2">
        <div>
          <h1 className="text-[25px] font-semibold">Datasets</h1>
          <p className="mt-[10px] font-medium text-[#202124] text-[14px]">
            Contribute, download and work with datasets specific to Africa
          </p>
        </div>
        <Button className="bg-[#4393F4] text-white py-0 text-[11px] px-1 min-[500px]:px-4 min-[500px]:text-[13px] min-[500px]:py-2 ">
          {" "}
          + Add New Dataset
        </Button>
      </div>
      <p className="mt-[27px] text-[#202124] font-semibold text-[20px]">
        Find up to 10,000+ quality public datasets about Africa, contributed by
        our community members to build Africa&apos;s next ML solution
      </p>
      <div className="mt-[24px] relative">
        <Input
          type="search"
          placeholder="Search datasets"
          className="pl-10 text-[#9C9C9C] py-3 border border-[#2A2A2A]"
        />
        <Image
          src={searchLogo}
          alt="search-icon"
          className="absolute top-2 left-3 size-[18px]"
        />
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide">
        <Button className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px]">
          All Datasets
        </Button>
        <Button className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px]">
          Healthcare
        </Button>
        <Button className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px]">
          Startup funding data
        </Button>
      </div>

      <Datasets />
    </div>
  );
}

export default page;

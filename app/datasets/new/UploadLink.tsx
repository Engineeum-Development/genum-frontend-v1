import remoteLinkIcon from "@/public/assets/images/remote-url-icon (1).png";
import cloudLinkIcon from "@/public/assets/images/cloud-url-icon.png";
import gitLinkIcon from "@/public/assets/images/github-url-icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";

function UploadLink() {
  return (
    <div className="mt-[29px] space-y-[30px]">
      <div className="border shadow-lg md:py-8 md:px-6 py-6 px-5 rounded-[15px] flex gap-[22px] sm:items-center items-start  flex-col sm:flex-row">
        <div className="flex items-center gap-[22px]">
          <Checkbox className="size-[30px] border-[3px]" name="link" />

          <Image src={remoteLinkIcon} alt="icon" />
        </div>

        <div>
          <p className="text-[24px] font-semibold">Remote URL</p>
          <p>Create a dataset from remote URLs</p>
          <p>URLs must point to a file</p>
        </div>
      </div>

      <div className="border shadow-lg md:py-8 md:px-6 py-6 px-5 rounded-[15px] flex gap-[22px] sm:items-center items-start  flex-col sm:flex-row">
        <div className="flex items-center gap-[22px]">
          <Checkbox className="size-[30px] border-[3px]" name="link" />

          <Image src={cloudLinkIcon} alt="icon" />
        </div>

        <div>
          <p className="text-[24px] font-semibold">Import GitHub Repository</p>
          <p>Create from a github repository archive</p>
          <p>URLs must point to a file</p>
        </div>
      </div>

      <div className="border shadow-lg md:py-8 md:px-6 py-6 px-5 rounded-[15px] flex gap-[22px] sm:items-center items-start  flex-col sm:flex-row">
        <div className="flex items-center gap-[22px]">
          <Checkbox className="size-[30px] border-[3px]" name="link" />

          <Image src={gitLinkIcon} alt="icon" />
        </div>

        <div>
          <p className="text-[24px] font-semibold">Remote URL</p>
          <p>Create a dataset from remote URLs</p>
          <p>URLs must point to a file</p>
        </div>
      </div>

      <div className="relative mt-7">
        <Input
          type="text"
          placeholder="Enter Remote URL"
          className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
        />
        <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
          URL
        </p>
      </div>

      <div className="flex justify-end border-t-[2px] pt-[12px]">
        <Button className="bg-[#858585]">Browse Files</Button>
      </div>
    </div>
  );
}

export default UploadLink;

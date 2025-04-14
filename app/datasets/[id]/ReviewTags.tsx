import Image from "next/image";
import ideaIcon from "@/public/assets/images/idea-icon.png";
import boardIcon from "@/public/assets/images/view-boards.png";
import arrowRight from "@/public/assets/images/icon-right.png";
import folderIcon from "@/public/assets/images/folder-open.png";

function ReviewTags() {
  return (
    <div className="mt-[56px] flex gap-6 pb-[70px] border-b-2 flex-col md:flex-row">
      <div className="flex-1 max-w-[798px]">
        <div className="flex items-center gap-[22px]">
          <Image src={ideaIcon} alt="idea-icon" />
          <h1 className="text-[24px] font-semibold">
            What others are saying concerning this dataset
          </h1>
        </div>

        <h1 className="font-semibold text-[20px] mt-[30px]">Tags</h1>
        <div className="mt-[15px]">
          <h6 className="text-[16px]">What have you used this dataset for?</h6>
          <div className="flex gap-2 flex-wrap  my-2 ">
            {["Learning 6", "Research 1", "Application 1", "Education 1"].map(
              (value) => (
                <p
                  className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[8px] w-fit"
                  key={value}
                >
                  {value}
                </p>
              )
            )}
          </div>
        </div>

        <div className="mt-[16px]">
          <h6 className="text-[16px]">How would you describe this dataset?</h6>
          <div className="flex gap-2 flex-wrap  my-2 ">
            {[
              "Well documented",
              "Original 1",
              "Clean data 10",
              "Well maintained 1",
              "Other",
            ].map((value) => (
              <p
                className="bg-transparent text-[#2A2A2A] border border-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[8px] w-fit"
                key={value}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
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
            <Image src={arrowRight} alt="board-icon" className="size-[24px]" />
            <Image src={folderIcon} alt="board-icon" className="size-[24px]" />
            <p className="text-[#202124] text-[14px] font-semibold">1 File</p>
          </div>
          <div className="flex gap-[20px] mt-[12.5px] items-center md:border-b-2 pb-2 border-[#2A2A2A]">
            <Image src={arrowRight} alt="board-icon" className="size-[24px]" />
            <Image src={boardIcon} alt="board-icon" className="size-[24px]" />
            <p className="text-[#202124] text-[14px] font-semibold">
              12 columns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTags;

import { Section } from "../data";
// import Image from "next/image";
import DatasetList from "./DatasetList";

interface sectionProps {
  section: Section;
}

function DatasetListSection({ data }: any) {
  return (
    <div className="py-[25px]">
      {/* <div className="flex gap-3 items-center">
        <Image src={section.icon} width={48} height={48} alt="icon" />
        <p className="font-semibold text-[25px]">{section.title}</p>
      </div> */}

      <div>
        {data?.map((item: any) => (
          <DatasetList key={item.datasetId} data={item} />
        ))}
      </div>
    </div>
  );
}

export default DatasetListSection;

import { Section } from "../data";
import Image from "next/image";
import DatasetGrid from "./DatasetGrid";

interface sectionProps {
  section: Section;
}
function DatasetGridSection({ section }: sectionProps) {
  //   console.log("running");
  return (
    <div className="py-[25px]">
      <div className="flex gap-3 items-center">
        <Image src={section.icon} width={48} height={48} alt="icon" />
        <p className="font-semibold text-[25px]">{section.title}</p>
      </div>

      <div className="flex gap-3 items-center overflow-x-auto scrollbar-hide">
        {section.items.map((item) => (
          <DatasetGrid key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default DatasetGridSection;

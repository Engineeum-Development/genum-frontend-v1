import { Section } from "../data";
import Image from "next/image";
import DatasetList from "./DatasetList";

interface sectionProps {
  section: Section;
}

function DatasetListSection({ section }: sectionProps) {
  return (
    <div className="py-[25px]">
      <div className="flex gap-3 items-center">
        <Image src={section.icon} width={48} height={48} alt="icon" />
        <p className="font-semibold text-[25px]">{section.title}</p>
      </div>

      <div>
        {section.items.map((item) => (
          <DatasetList key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default DatasetListSection;

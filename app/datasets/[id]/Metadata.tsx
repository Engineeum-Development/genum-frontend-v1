import metadataIcon from "@/public/assets/images/metadata-icon.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Metadata({ data }: any) {
  return (
    <div className="mt-[53px]">
      <div className="flex gap-2 items-center border-b-2 pb-[34px]">
        <Image src={metadataIcon} alt="metadata-icon" />
        <h1 className="font-semibold text-[32px]">Metadata</h1>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            Collaborators
          </AccordionTrigger>
          <AccordionContent>
            {data?.collaborators?.collaboratorName || ""}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            Authors
          </AccordionTrigger>
          <AccordionContent>{data?.authors || ""}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            Coverage
          </AccordionTrigger>
          <AccordionContent>{data?.coverage || ""}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            DOI Citation
          </AccordionTrigger>
          <AccordionContent>{data?.doiCitation || ""}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            License
          </AccordionTrigger>
          <AccordionContent>
            {data?.license?.licenseName || ""}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-[24px] font-medium hover:no-underline">
            Expected date frequency
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Metadata;

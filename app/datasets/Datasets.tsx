"use client";

import gridIcon from "@/public/assets/images/icon-grid.png";
import listIcon from "@/public/assets/images/icon-list.png";
import arrowDown from "@/public/assets/images/arrow-down-icon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sectionsData } from "../data";
import DatasetListSection from "./DatasetListSection";
import DatasetGridSection from "./DatasetGridSection";

function Datasets() {
  const [view, setView] = useState("list");
  return (
    <div className="mt-6">
      <div className="flex gap-2 items-center justify-end">
        <p className="">Relevance</p>
        <Button className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none">
          <Image src={arrowDown} alt="arrow-down" />
        </Button>
        <Button
          className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none"
          onClick={() => setView("list")}
        >
          <Image src={listIcon} alt="list-icon" />
        </Button>
        <Button
          className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none "
          onClick={() => setView("grid")}
        >
          <Image src={gridIcon} alt="grid-icon" />
        </Button>
      </div>

      <div className="divide-y-2">
        {sectionsData.map((section) =>
          view === "list" ? (
            <DatasetListSection key={section.id} section={section} />
          ) : (
            <DatasetGridSection key={section.id} section={section} />
          )
        )}
      </div>
    </div>
  );
}

export default Datasets;

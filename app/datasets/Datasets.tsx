"use client";

import trendingUp from "@/public/assets/images/trending-up-icon.png";
import gridIcon from "@/public/assets/images/icon-grid.png";
import listIcon from "@/public/assets/images/icon-list.png";
import arrowDown from "@/public/assets/images/arrow-down-icon.png";
import DatasetGrid from "./DatasetGrid";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DatasetList from "./DatasetList";

function Datasets() {
  const [view, setView] = useState("list");
  return (
    <div>
      <div className="mt-6 flex justify-between items-start flex-col gap-3 min-[500px]:flex-row min-[500px]:items-center">
        <div className="flex gap-3 items-center">
          <Image src={trendingUp} alt="trending-up" />
          <p className="font-semibold text-[25px]">Trending Data</p>
        </div>
        <div className="flex gap-2 items-center">
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
            className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none py-0"
            onClick={() => setView("grid")}
          >
            <Image src={gridIcon} alt="grid-icon" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {view === "list" && <DatasetList />}
        {view === "grid" && <DatasetGrid />}
      </div>
    </div>
  );
}

export default Datasets;

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getDatasets } from "../api/datasets";

import gridIcon from "@/public/assets/images/icon-grid.png";
import listIcon from "@/public/assets/images/icon-list.png";
import arrowDown from "@/public/assets/images/arrow-down-icon.png";

import { Button } from "@/components/ui/button";

import DatasetGridSection from "./DatasetGridSection";
import DatasetListSection from "./DatasetListSection";
import IsLoading from "../_components/IsLoading";

function Datasets() {
  const [view, setView] = useState("list");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setLoading(true);
      try {
        const datasets = await getDatasets();
        if (isMounted) {
          setData(datasets);
        }
      } catch (err: any) {
        console.error(err);
        if (isMounted) {
          // setError(err.message || 'Unknown error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // console.log(data);
  return (
    <div className="mt-6">
      {loading && <IsLoading />}
      {data && !loading && (
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
      )}

      <div className="divide-y-2">
        {view === "list" ? (
          <DatasetListSection data={data} />
        ) : (
          <DatasetGridSection data={data} />
        )}
      </div>
    </div>
  );
}

export default Datasets;

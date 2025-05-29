"use client";

import { getDataset } from "@/app/api/datasets";
import DatasetDetails from "./DatasetDetails";
import DatasetHero from "./DatasetHero";
import { useEffect, useState } from "react";
import IsLoading from "@/app/_components/IsLoading";

function Page({ params }: any) {
  const [fullData, setFullData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(params.id);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const data = await getDataset(params.id);
        if (isMounted) {
          setFullData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    load();

    return () => {
      isMounted = false;
    };
  }, [params.id]);

  // console.log(fullData);
  return (
    <div className="md:px-16 py-10 sm:px-10 px-7">
      {isLoading && <IsLoading />}
      {!isLoading && (
        <>
          <DatasetHero data={fullData} />
          <DatasetDetails data={fullData} />
        </>
      )}
    </div>
  );
}

export default Page;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DataContent from "./DataContent";

function AboutDataset() {
  return (
    <Tabs
      defaultValue="data-card"
      className="w-full items-start justify-center  border-b-2 pb-6"
    >
      <TabsList className="bg-transparent border-b border-[#858585] items-start  flex rounded-none p-0 sm:gap-4 flex-wrap">
        <TabsTrigger
          value="data-card"
          className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A]  rounded-none py-[8px] "
        >
          Data Card
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A]  rounded-none py-2"
        >
          Code (0)
        </TabsTrigger>
        <TabsTrigger
          value="discussion"
          className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A]  rounded-none py-2"
        >
          Discussion(0)
        </TabsTrigger>
        <TabsTrigger
          value="suggestion"
          className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A]  rounded-none py-2"
        >
          Suggestion(0)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="data-card">
        <DataContent />
      </TabsContent>
      <TabsContent value="code">
        <div className="mt-[29px]">code</div>
      </TabsContent>
      <TabsContent value="discussion">
        <div className="mt-[29px]">discussion</div>
      </TabsContent>
      <TabsContent value="suggestion">
        <div className="mt-[29px]">suggestion</div>
      </TabsContent>
    </Tabs>
  );
}

export default AboutDataset;

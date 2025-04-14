"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Settings, Volume2, Maximize2 } from "lucide-react";
import Image from "next/image";
import courseThumbnail from "/public/assets/images/course-thumb.png";

export default function VideoSlug() {
  return (
    <div className="w-full px-6 md:px-12 py-10">
      <h1 className="text-3xl font-bold text-[#2A2A2A]">Introduction to Programmming</h1>
      <p className="text-gray-600 text-sm mt-1">
        Get Started with Python if you have no coding experience
      </p>

    
      <Tabs defaultValue="classroom" className="mt-6">
        <TabsList className="bg-transparent border-b border-gray-300 px-0">
          <TabsTrigger
            value="classroom"
            className="text-base font-semibold text-[#202124] border-b-2 border-[#202124] rounded-none px-0 mr-6 data-[state=inactive]:border-none data-[state=inactive]:text-gray-500"
          >
            Classroom
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="text-base font-medium text-gray-500 border-none rounded-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-[#202124] data-[state=active]:text-[#202124]"
          >
            Data(0)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      
      <div className="mt-6 max-w-lg">
        <Card className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Image src={courseThumbnail} alt="Course" className="w-14 h-14 rounded" />
            <div>
              <h3 className="font-medium text-sm text-[#202124]">Introduction to Programming</h3>
              <p className="text-xs text-gray-500">
                Get Started with Python if you have no coding experience
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-600">Module <span className="font-semibold">1/5</span></div>
        </Card>
      </div>

      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video controls className="w-full h-[380px] object-cover">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-4 left-4 text-white">
              <ChevronLeft size={24} />
            </div>
            <div className="absolute top-4 right-4 text-white flex gap-4">
              <Settings size={20} />
              <Volume2 size={20} />
              <Maximize2 size={20} />
            </div>
          </div>
        </div>

        
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#202124]">Usability</p>
              <p className="text-sm">8.24</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#202124]">License</p>
              <a href="#" className="text-blue-500 text-sm underline">MIT</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#202124]">Expected update frequency</p>
              <a href="#" className="text-blue-500 text-sm underline">MIT</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#202124] mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {["Health", "African", "Infection", "Diseases", "WHO", "Economy", "Climate change", "Emergency"].map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>

          
          <div className="p-4 bg-[#E6F0FF] rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700 font-medium">Your Turn</p>
              <p className="text-xs text-gray-600 mt-1">Try the exercise: Syntax, Variables and Numbers</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-sm">Skip</Button>
              <Button className="text-sm bg-[#4393F4] text-white px-6">Start</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

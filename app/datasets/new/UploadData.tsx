"use client";

import Image from "next/image";
import { useState } from "react";

import UploadLink from "./UploadLink";
import UploadDataModal from "./UploadDataModal";

import duplicateIcon from "@/public/assets/images/icon-duplicate.png";
import searchLogo from "@/public/assets/images/search-icon.png";
import arrowDown from "@/public/assets/images/arrow-down-icon.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function UploadData() {
  const [step, setStep] = useState(1);
  return (
    <div className="mb-5">
      <div className="flex gap-10 border-b-[2px] font-bold text-[16.82px]">
        <p className="pb-2 border-b-2">File</p>
        <p className="pb-2 border-b-2">Link</p>
        <p className="pb-2 border-b-2">Notebook Output</p>
      </div>

      {step === 1 && <Drop />}
      {step === 2 && <UploadLink />}
      {step === 3 && <NotebookOutput />}
    </div>
  );
}

function Drop() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<any>();

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setIsDragging(false);

    console.log(files);
    if (files.length > 0) {
      const firstFile = files[0];
      setFile(firstFile);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files || [];
    if (files.length > 0) {
      const firstFile = files[0];
      setFile(firstFile);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="px-[68px]">
      {file && (
        <Dialog>
          <DialogTrigger className="bg-[#61B7F6]  mt-3 flex items-center justify-center py-2  justify-self-end text-center -mb-10 w-full max-w-[100px] text-white rounded-[12px] ">
            Upload file
          </DialogTrigger>

          <DialogContent>
            <UploadDataModal file={file} />
          </DialogContent>
        </Dialog>
      )}
      <div className="p-[2px]  bg-gradient-to-r from-[#E018F2] to-[#61B7F6] mt-[59px] mx-auto shadow-lg rounded-[20px]">
        <div
          className={`rounded-[20px] p-4 h-[450px] flex items-center justify-center flex-col ${
            isDragging
              ? "ring-4 ring-[#61B7F6] border-dashed border-2 border-[#61B7F6] bg-[#61B7F6]/20"
              : "bg-[white]/90"
          } `}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Image src={duplicateIcon} alt="duplicate icon" />
          <p className="font-semibold text-[32px] text-[#202124] text-wrap text-center">
            {file ? file.name : " Drag & drop files to upload"}
          </p>

          <div className="flex flex-col items-center gap-3 mt-[70px]">
            <p>or</p>
            <label
              htmlFor="doc-upload"
              className=" flex flex-col items-center justify-center cursor-pointer"
            >
              <Button className="bg-transparent text-[#2A2A2A] font-semibold border border-[#2A2A2A] shadow-none hover:bg-transparent cursor-pointer pointer-events-none">
                {file ? "Change File" : "Browse files"}
              </Button>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                id="doc-upload"
                accept=".csv,text/csv"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotebookOutput() {
  return (
    <>
      <div className="flex w-full items-center mt-[24px] gap-[14px]">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search datasets"
            className="pl-10 text-[#9C9C9C] py-3 border border-[#2A2A2A]"
          />
          <Image
            src={searchLogo}
            alt="search-icon"
            className="absolute top-2 left-3 size-[18px]"
          />
        </div>
        <div className="flex items-center">
          <p>Your Work</p>
          <Button className="bg-transparent text-[#2A2A2A] px-1 py-0 hover:bg-transparent rounded-[11px] shadow-none">
            <Image src={arrowDown} alt="arrow-down" />
          </Button>
        </div>
      </div>

      <div className="h-[419px] mt-5  flex flex-col items-center justify-center">
        <p className="text-[24px] font-semibold">No notebook output found</p>
        <p className="text-[#2A2A2A]">
          We couldn’t find notebook with data outputs on genum
        </p>
      </div>
    </>
  );
}

export default UploadData;

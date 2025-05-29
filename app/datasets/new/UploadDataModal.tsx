"use client";

import Spinner from "@/app/_components/Spinner";
import { uploadDataset } from "@/app/api/datasets";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = Record<"name" | "tag" | "description", string>;

function UploadDataModal({ file }: { file: File }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, formState, handleSubmit, control, setError, reset } =
    useForm<FormValues>();
  const { errors } = formState;

  async function onSubmit(data: FormValues) {
    if (data.description.split(" ").length < 10) {
      setError("description", {
        message: "Description must be at least 10 words long",
      });

      return;
    }
    const metadata = {
      datasetName: data.name,
      tags: [data.tag],
      description: data.description,
      visibility: "public",
    };

    try {
      setIsLoading(true);
      const res = await uploadDataset({ file, metadata });
      // console.log(res);
      if (res) {
        reset();
        router.push("/datasets");
        toast.success("Dataset uploaded successfully");
      }
    } catch (error: any) {
      //   console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <DialogTitle>Upload Dataset</DialogTitle>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 relative">
          <Input
            type="name"
            disabled={isLoading}
            placeholder="e.g Ebola crisis in Africa"
            className={`w-full shadow-none border text-[#2A2A2A] text-[16px]   p-4 focus:outline-none active:outline-none   ${
              errors.name ? "border-[#670C0C]" : "border-[#858585]"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          <p className="absolute  -top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Name of Dataset
          </p>
          {errors.name && (
            <p className="text-[13px] text-[#670C0C]">{errors.name?.message}</p>
          )}
        </div>

        <div className="relative mt-7">
          <div
            className={` border rounded-[8px]   ${
              errors.tag ? "border-[#670C0C]" : "border-[#858585]"
            }`}
          >
            <Controller
              name="tag"
              rules={{ required: "Please select a tag" }}
              disabled={isLoading}
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="e.g Finance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="artsandentertainment">
                      Arts and Entertainment
                    </SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="ml">Machine Learning</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[rgb(42,42,42)]">
            Tag
          </p>
          <p className="text-xs text-[#670C0C] ml-1">{errors.tag?.message}</p>
        </div>

        <div className="mt-6 relative">
          <Textarea
            disabled={isLoading}
            placeholder="e.g Health crises, including outbreaks of infectious diseases and rising non-communicable diseases."
            className={`w-full shadow-none border text-[#2A2A2A] text-[16px]   p-4 focus:outline-none active:outline-none   ${
              errors.name ? "border-[#670C0C]" : "border-[#858585]"
            }`}
            {...register("description", {
              required: "Description is required",
            })}
          />
          <p className="absolute  -top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Description
          </p>
          {errors.description && (
            <p className="text-[13px] text-[#670C0C]">
              {errors.description?.message}
            </p>
          )}
        </div>

        <Button className="bg-[#61B7F6]  mt-3 flex items-center justify-center py-2  justify-self-end text-center w-full max-w-[100px] text-white rounded-[12px] ">
          {isLoading ? <Spinner /> : "Upload"}
        </Button>
      </form>
    </div>
  );
}

export default UploadDataModal;

"use client";

import Image from "next/image";
import googleIcon from "/public/assets/images/google-icon.png";
import emailIcon from "/public/assets/images/email-icon.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Spinner from "./Spinner";
import { redirect, useRouter } from "next/navigation";
import { createUser } from "../api/user";
import toast from "react-hot-toast";

function SignUp() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  // console.log(showEmailForm);

  return (
    <div className="flex flex-col items-center justify-center">
      {!showEmailForm && (
        <>
          <Button className="w-full bg-white border shadow-none max-w-[290px] mt-[33px] rounded-lg mx-auto px-[13px] py-[20px] hover:bg-transparent border-[#858585]">
            <Image src={googleIcon} alt="google icon" className="w-[30px]" />
            <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
              Sign up with Google
            </span>
          </Button>
          <Button
            className="w-full bg-white border shadow-none max-w-[290px] mt-[33px] rounded-lg mx-auto px-[13px] py-[20px] hover:bg-transparent border-[#858585]"
            onClick={() => setShowEmailForm(true)}
          >
            <Image src={emailIcon} alt="google icon" className="w-[30px]" />
            <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
              Sign up with Email
            </span>
          </Button>
        </>
      )}

      {showEmailForm && <EmailForm />}
      <div className="mt-7">
        Dont have an account?{" "}
        <TabsList className="bg-transparent p-0 shadow-none">
          <TabsTrigger
            value="signin"
            className="text-[#4393F4]  p-0 shadow-none"
          >
            Sign In
          </TabsTrigger>
        </TabsList>
      </div>
    </div>
  );
}

type FormValues = Record<
  | "gender"
  | "firstName"
  | "lastName"
  | "country"
  | "email"
  | "password"
  | "confirmPassword",
  string
>;

function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, formState, handleSubmit, control, setError, reset } =
    useForm<FormValues>();
  const router = useRouter();
  const { errors } = formState;

  async function onSubmit(data: FormValues) {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords do not match",
      });
      return;
    }

    const newData = { ...data, gender: data.gender.toUpperCase() };
    const { confirmPassword, ...dataApi } = newData;

    setIsLoading(true);

    try {
      const userData = await createUser(dataApi);
      if (userData) {
        toast.success("Signup successful, Verify your email to continue", {
          duration: 8000,
        });
        // window.location.reload();
        reset();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-64 overflow-auto overscroll scrollbar-hide">
      <form className=" px-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center justify-between gap-7">
          <div className="relative mt-[12px] ">
            <Input
              type="text"
              disabled={isLoading}
              placeholder="e.g George"
              className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-4 focus:outline-none ${
                errors.firstName ? "border-[#670C0C]  " : "border-[#858585]"
              }`}
              {...register("firstName", { required: "First name is required" })}
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              First Name
            </p>
            <p className="text-xs text-[#670C0C] ml-1">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="relative mt-[12px]">
            <Input
              type="text"
              disabled={isLoading}
              placeholder="e.g Smith"
              className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-4 focus:outline-none ${
                errors.lastName ? "border-[#670C0C]  " : "border-[#858585]"
              }`}
              {...register("lastName", { required: "Last name is required" })}
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              Last Name
            </p>
            <p className="text-xs text-[#670C0C] ml-1">
              {errors.lastName?.message}
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          <Input
            type="email"
            disabled={isLoading}
            placeholder="e.g engeenum@gmail.com"
            className={`w-full shadow-none border text-[#2A2A2A] text-[16px]   p-4 focus:outline-none  ${
              errors.email ? "border-[#670C0C]  " : "border-[#858585]"
            }`}
            {...register("email", { required: "Email is required" })}
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Email
          </p>
          <p className="text-xs text-[#670C0C] ml-1">{errors.email?.message}</p>
        </div>

        <div className="w-full flex gap-8 mt-7">
          <div className="relative">
            <div
              className={` border rounded-[8px]   ${
                errors.gender ? "border-[#670C0C]" : "border-[#858585]"
              }`}
            >
              <Controller
                name="gender"
                rules={{ required: "Please select a gender" }}
                disabled={isLoading}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px] border-none">
                      <SelectValue placeholder="e.g Male" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[rgb(42,42,42)]">
              Gender
            </p>
            <p className="text-xs text-[#670C0C] ml-1">
              {errors.gender?.message}
            </p>
          </div>

          <div className="relative ">
            <Input
              type="text"
              disabled={isLoading}
              placeholder="e.g Nigeria"
              className={`w-full shadow-none  text-[#2A2A2A] text-[16px]   p-4 focus:outline-none  ${
                errors.country ? "border-[#670C0C]" : "border-[#858585]"
              }`}
              {...register("country", { required: "Country is required" })}
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              Country
            </p>
            <p className="text-xs text-[#670C0C] ml-1">
              {errors.country?.message}
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          <Input
            type="text"
            disabled={isLoading}
            placeholder="e.g engeenum@gmail.com"
            className={`w-full shadow-none border text-[#2A2A2A] text-[16px]   p-4 focus:outline-none   ${
              errors.password ? "border-[#670C0C]" : "border-[#858585]"
            }`}
            {...register("password", { required: "Please enter a password" })}
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Enter Password
          </p>
          <p className="text-xs text-[#670C0C] ml-1">
            {errors.password?.message}
          </p>
        </div>

        <div className="relative mt-7">
          <Input
            type="text"
            placeholder="e.g engeenum@gmail.com"
            disabled={isLoading}
            className={`w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none   ${
              errors.confirmPassword ? "border-[#670C0C]" : "border-[#858585]"
            }`}
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Confirm Password
          </p>
          <p className="text-xs text-[#670C0C] ml-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <Button
          className="bg-[#4393F4] w-full py-2 hover:bg-[#4393F4] mt-[20px] md:max-w-[360px] max-w-[250px] mx-auto flex justify-center"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "  Sign Up"}
        </Button>
      </form>

      <div className="flex flex-col items-center justify-center md:max-w-[360px] max-w-[250px] mx-auto">
        <div className="flex items-center justify-center mt-[10px] w-full">
          <div className=" h-[1px] bg-[#858585]  mt-1 w-full"></div>
          <p className="mx-5 text-[#2A2A2A] font-bold text-[16px]">or</p>
          <div className=" h-[1px] bg-[#858585] w-full mt-1"></div>
        </div>

        <Button className="w-full bg-white border shadow-none max-w-[360px] mx-auto mt-[20px] rounded-lg flex items-center justify-center px-[13px] py-[20px] hover:bg-transparent border-[#858585]">
          <Image src={googleIcon} alt="google icon" className="w-[30px]" />
          <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
            Sign up with Google
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SignUp;

"use client";
import Image from "next/image";
import googleIcon from "/public/assets/images/google-icon.png";
import emailIcon from "/public/assets/images/email-icon.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

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

function EmailForm() {
  return (
    <div className="h-64 overflow-auto overscroll scrollbar-hide">
      <form className=" px-1">
        <div className="w-full flex items-center justify-between gap-7">
          <div className="relative mt-[12px]">
            <Input
              type="text"
              placeholder="e.g George"
              className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              First Name
            </p>
          </div>
          <div className="relative mt-[12px]">
            <Input
              type="text"
              placeholder="e.g Smith"
              className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              Last Name
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          <Input
            type="email"
            placeholder="e.g engeenum@gmail.com"
            className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Email
          </p>
        </div>

        <div className="w-full flex gap-8 mt-7">
          <div className="relative ">
            <Input
              type="text"
              placeholder="e.g George"
              className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              Gender
            </p>
          </div>
          <div className="relative ">
            <Input
              type="text"
              placeholder="e.g Nigeria"
              className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
            />
            <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
              Country
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          <Input
            type="password"
            placeholder="e.g engeenum@gmail.com"
            className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Enter Password
          </p>
        </div>

        <div className="relative mt-7">
          <Input
            type="password"
            placeholder="e.g engeenum@gmail.com"
            className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
          />
          <p className="absolute -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Confirm Password
          </p>
        </div>

        <Button className="bg-[#4393F4] w-full py-2 hover:bg-[#4393F4] mt-[20px] md:max-w-[360px] max-w-[250px] mx-auto flex justify-center">
          Sign Up
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

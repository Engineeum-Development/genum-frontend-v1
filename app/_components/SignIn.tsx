"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import googleIcon from "/public/assets/images/google-icon.png";
import emailIcon from "/public/assets/images/email-icon.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { useForm } from "react-hook-form";

function SignIn() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      {!showEmailForm && (
        <>
          <Button className="w-full bg-white border shadow-none max-w-[290px] mt-[33px] rounded-lg mx-auto px-[13px] py-[20px] hover:bg-transparent border-[#858585]">
            <Image src={googleIcon} alt="google icon" className="w-[30px]" />
            <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
              Sign in with Google
            </span>
          </Button>
          <Button
            className="w-full bg-white border shadow-none max-w-[290px] mt-[33px] rounded-lg mx-auto px-[13px] py-[20px] hover:bg-transparent border-[#858585]"
            onClick={() => setShowEmailForm(true)}
          >
            <Image src={emailIcon} alt="google icon" className="w-[30px]" />
            <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
              Sign in with Email
            </span>
          </Button>
        </>
      )}

      {showEmailForm && <EmailForm />}
    </div>
  );
}

function EmailForm() {
  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;
  console.log(errors);

  function onSubmit() {}

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mt-[12px]">
        <Input
          type="email"
          placeholder="e.g engeenum@gmail.com"
          className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-4 focus:outline-none active:outline-none,   ${
            errors.email ? "border-[#670C0C]" : "border-[#858585]"
          }`}
          {...register("email", { required: "This field is required" })}
        />
        <p className="absolute  -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
          Email
        </p>

        {errors.email && (
          <p className="text-[13px] text-[#670C0C]">
            {String(errors.email.message)}
          </p>
        )}
      </div>

      <div className="relative mt-[32px]">
        <Input
          type="password"
          placeholder="e.g engeenum@gmail.com"
          className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
        />
        <p className="absolute  -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
          Password
        </p>

        <Dialog>
          <DialogTrigger className="bg-transparent shadow-none text-[#670C0C] hover:bg-transparent w-fit flex items-center justify-self-end px-0">
            Forgot Password ?
          </DialogTrigger>
          <DialogContent className="max-w-[300px] min-[400px]:max-w-[500px]">
            <ForgotPasswordModal />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[360px] mx-auto">
        <Button className="bg-[#4393F4] w-full py-2 hover:bg-[#4393F4] mt-[10px]">
          Login
        </Button>

        <div className="flex items-center justify-center mt-[10px] w-full">
          <div className=" h-[1px] bg-[#858585]  mt-1 w-full"></div>
          <p className="mx-5 text-[#2A2A2A] font-bold text-[16px]">or</p>
          <div className=" h-[1px] bg-[#858585] w-full mt-1"></div>
        </div>

        <Button className="w-full bg-white border shadow-none max-w-[360px] mx-auto mt-[20px] rounded-lg flex items-center justify-center px-[13px] py-[20px] hover:bg-transparent border-[#858585]">
          <Image src={googleIcon} alt="google icon" className="w-[30px]" />
          <span className="text-[#2A2A2A] font-semibold ml-[17px] text-[17px] ">
            Sign in with Google
          </span>
        </Button>

        <div className="mt-3">
          Dont have an account?{" "}
          <TabsList className="bg-transparent p-0">
            <TabsTrigger value="signup" className="text-[#4393F4]  p-0">
              SignUp
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
    </form>
  );
}

export default SignIn;

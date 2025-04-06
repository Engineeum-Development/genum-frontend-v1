"use client";

import Image from "next/image";
import logo from "/public/assets/images/genum-logo-blue.png";
import lockIcon from "/public/assets/images/resetpassword-icon.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function ForgotPasswordModal() {
  const [step, setStep] = useState(1);

  function handleClick() {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  }

  return (
    <div>
      <Image src={logo} alt="logo" height={100} className="w-[430px] mb-2" />

      <div className="flex flex-col items-center justify-center">
        {step === 1 && <Step1 handleClick={handleClick} />}
        {step === 2 && <Step2 handleClick={handleClick} />}
        {step === 3 && <Step3 />}
      </div>
    </div>
  );
}

function Step1({ handleClick }: { handleClick: () => void }) {
  return (
    <>
      <p className="text-[#202124] text-[17px]  max-w-[384px]">
        Enter the email address linked with your account and a link to reset
        your password will be sent to you
      </p>

      <div className="relative mt-[24px] w-full mx-auto">
        <Input
          type="email"
          placeholder="e.g engeenum@gmail.com"
          className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px] max-w-[408px]  p-4 focus:outline-none mx-auto"
        />
        <p className="absolute  -top-2 sm:-top-3 bg-white left-3 sm:left-9 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A] ">
          Email
        </p>

        <Button
          className="bg-[#4393F4] w-full py-2 hover:bg-[#4393F4] mt-[40px] max-w-[360px] flex  mx-auto"
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

function Step2({ handleClick }: { handleClick: () => void }) {
  return (
    <>
      <Image src={lockIcon} alt="lock icon" className="w-[32px] mx-auto" />
      <p className="mt-[14px] text-[#060909] font-semibold">RESET PASSWORD</p>

      <div className="w-full max-w-[408px] mx-auto mt-[16px]">
        <div className="relative mt-[12px]">
          <Input
            type="password"
            placeholder="***************"
            className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
          />
          <p className="absolute  -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Enter New Password
          </p>
        </div>

        <div className="relative mt-[32px]">
          <Input
            type="password"
            placeholder="***************"
            className="w-full shadow-none border-b border-[#858585] text-[#2A2A2A] text-[16px]   p-4 focus:outline-none"
          />
          <p className="absolute  -top-2 sm:-top-3 bg-white left-2 font-bold sm:text-[15px] text-[12px] text-[#2A2A2A]">
            Confirm New Password
          </p>
        </div>

        <Button
          className="bg-[#4393F4] w-full py-2 hover:bg-[#4393F4] mt-[40px] max-w-[408px] flex  mx-auto"
          onClick={handleClick}
        >
          Reset Password
        </Button>
      </div>
    </>
  );
}

function Step3() {
  return (
    <>
      <h1 className="text-[#202124] sm:text-[28px] text-[25px] font-semibold  max-w-[384px]">
        Password Reset Successful
      </h1>
      <p className="mt-10 text-center max-w-[384px] mb-5">
        Your password reset was successful. Please login with your new password
      </p>
    </>
  );
}

export default ForgotPasswordModal;

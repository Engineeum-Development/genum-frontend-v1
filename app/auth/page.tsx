import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import logo from "/public/assets/images/genum-logo-blue.png";
import authBg from "/public/assets/images/auth-bg.png";
import SignIn from "../_components/SignIn";
import SignUp from "../_components/SignUp";

function Page() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen  px-5 relative   w-full ">
      <div>
        <Image
          src={authBg}
          alt="logo"
          className=" absolute inset-0 h-full w-full -z-30 -top-1"
        />
        <div className="absolute inset-0 bg-white opacity-50 -z-20"></div>
      </div>

      <div className="bg-white px-[42px] py-[23px] rounded-lg shadow-md flex flex-col items-center justify-center max-w-[513px]">
        <Image src={logo} alt="logo" height={100} className="w-[430px]" />
        <h1 className="font-bold text-[31px] my-[20px]">Welcome!</h1>
        <Tabs
          defaultValue="signin"
          className="w-full items-center justify-center "
        >
          <TabsList className="bg-transparent border-b border-[#858585] items-center justify-center flex rounded-none p-0 h-auto">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A] w-full rounded-none py-[8px] "
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#2A2A2A] text-[#858585] data-[state=active]:text-[#2A2A2A] w-full rounded-none py-2"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignIn />
          </TabsContent>
          <TabsContent value="signup">
            <SignUp />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Page;

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { verifyEmail } from "../api/user";
import Image from "next/image";
import Logo from "../../public/assets/images/genum-logo-blue.png";
import toast from "react-hot-toast";

function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function emailVerification() {
      setIsLoading(true);
      try {
        if (token) {
          const res = await verifyEmail(token);
          if (res === "confirmed") {
            setIsVerified(true);
            toast.success("Email Verification sucessful. Login to continue");
            router.push("/auth");
          }
        }
      } catch (error: any) {
        if (error.message.includes("expired")) {
          toast.error("Took too long to verify email, signup again", {
            duration: 10000,
          });
          router.push("/auth");
        }
      } finally {
        setIsLoading(false);
      }
    }
    emailVerification();
  }, [token, router]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <Image
          src={Logo}
          alt="Genum Logo"
          className="w-full h-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-center mb-4">
          Email Verification
        </h2>

        {isLoading && (
          <p className="text-center text-gray-600">
            Verifying your email... Please wait.
          </p>
        )}
        {!isLoading && !isVerified && (
          <button
            className="text-center text-white px-5 w-full bg-blue-600 max-w-[250px] py-2 rounded-lg mx-auto  flex justify-center"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        )}
        {isVerified && (
          <p className="text-center text-green-500">
            Email verified successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default Page;

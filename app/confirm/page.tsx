import { Suspense } from "react";
import ConfirmEmail from "./ConfirmEmail";

function Page() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <p className="text-center">Loading...</p>
          </div>
        </div>
      }
    >
      <ConfirmEmail />
    </Suspense>
  );
}

export default Page;

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import  ClientLayout  from "@/app/_components/clientLayout" ;

export const metadata: Metadata = {
  title: "Genum",
  description: "Data repository for Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className=""> <ClientLayout> {children} </ClientLayout></div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            error: {
              duration: 5000,
            },
          }}
        />
      </body>
    </html>
  );
}

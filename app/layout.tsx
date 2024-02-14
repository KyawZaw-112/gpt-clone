import type { Metadata } from "next"
import "./globals.css";
import SideBar from "@/components/SideBar";


export const metadata: Metadata = {
  title: "Chat GPT Clone",
  description: "This is clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
          <SideBar />
          </div>
          <div className="bg-[#171717] flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

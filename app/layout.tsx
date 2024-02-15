import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Landing from "@/app/Landing";

export const metadata: Metadata = {
  title: "Chat GPT Clone",
  description: "This is clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Landing />
          ) : (
            <div className="flex">
              <div className="max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
                <SideBar />
              </div>
              <div className="bg-[#171717] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import "./globals.css";


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

          <div className="bg-[#343541] flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

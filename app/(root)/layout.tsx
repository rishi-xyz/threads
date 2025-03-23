import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en' className="scroll-smooth">
        <body className={`${inter.className} bg-dark-1 min-h-screen transition-colors duration-300`}>
          <Topbar />

          <main className='flex flex-row transition-all duration-300'>
            <LeftSidebar />
            <section className='main-container flex-1 transition-all duration-300'>
              <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 transition-all duration-300'>
                {children}
              </div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { ConvexClientProvider } from "@/Components/convex-client-provider";
import { Toaster } from "@/Components/ui/sonner";

import "./globals.css";
import "@liveblocks/react-ui/styles.css"
import "@liveblocks/react-tiptap/styles.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NuqsAdapter>
            <ConvexClientProvider>
              <Toaster />
               {children}
            </ConvexClientProvider>
          </NuqsAdapter>
        </body>
      </html>
  );
}

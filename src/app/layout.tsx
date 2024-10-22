import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont text-gray-300">
        <Layout>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}

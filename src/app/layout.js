import Navbar from "@/Components/Navbar";
import { UseStoreContextProvider } from "@/Components/UseStoreContext";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Collage",
  description:
    "Image Collage Maker is a lightweight web app designed for creating simple yet beautiful collages using your own images. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body className={`bg-blue-50 hide-scrollbar ${inter.className}`}>
        <UseStoreContextProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <div className="mt-20 md:mt-5 ">{children}</div>{" "}
        </UseStoreContextProvider>
      </body>
    </html>
  );
}

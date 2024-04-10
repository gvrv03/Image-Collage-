"use client";
import Canvas from "@/Components/Canvas";
import Sidebar from "@/Components/Sidebar";


export default function Home() {

  return (
    <main className=" w-full    place-items-center grid">
      <div className=" flex  flex-col md:flex-row gap-5 w-full  h-[82vh] container   m-auto ">
        <Sidebar />
        <Canvas />
      </div>

    </main>
  );
}

"use client";
import React from "react";
import { useAppStore } from "./UseStoreContext";

const Canvas = () => {
  return (
    <div className="bg-white p-5   h-full w-full md:w-[80%] rounded-md ">
      <div className="text-3xl font-semibold text-blue-600 text-center pb-5 font-serif">
        Canvas
      </div>

      <div className="h-[2px] bg-gray-100 my-5" />

      <div className="  h-[85%]  border border-dashed  rounded-md hide-scrollbar  overflow-y-scroll  w-full ">
        <MainCanvas />
      </div>
    </div>
  );
};

const MainCanvas = () => {
  const { images, bgColor, reportTemplateRef, cols, borderColor, borderSize } =
    useAppStore();
  return (
    <div ref={reportTemplateRef} className="p-5 ">
      <div
        className={`grid  gap-5  flex-wrap      p-5 rounded-md`}
        style={{
          backgroundColor: bgColor ? bgColor : "white",
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr)`,
        }}
      >
        {images.length === 0 && (
          <div className=" p-5 w-full h-full ">Images not Found</div>
        )}
        {images.map((item, index) => {
          return (
            <img
              key={index}
              style={{ border: `${borderSize}px solid ${borderColor}` }}
              src={item?.url}
              alt={item?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Canvas;

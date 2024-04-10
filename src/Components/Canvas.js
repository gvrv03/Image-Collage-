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

      <div className="  h-[85%]  hide-scrollbar  overflow-y-scroll  w-full ">
        <MainCanvas />
      </div>
    </div>
  );
};

const MainCanvas = () => {
  const {
    images,
    bgColor,
    reportTemplateRef,
    cols,
    borderColor,
    borderSize,
    handleImageUpload,
  } = useAppStore();
  if (images.length != 0) {
    return (
      <div ref={reportTemplateRef} className="p-5 ">
        <div
          className={`grid  gap-5  flex-wrap      border border-dashed  p-5 rounded-md`}
          style={{
            backgroundColor: bgColor ? bgColor : "white",
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr)`,
          }}
        >
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
  } else {
    return (
      <div className="p-5 w-full relative grid place-items-center h-full ">
        <input
          onChange={handleImageUpload}
          type="file"
          draggable={true}
          accept="image/*"
          multiple
          className="z-30 file:cursor-pointer file:bg-transparent file:border  file:text-transparent  file:border-dashed file:text-black text-white file:rounded-md h-full file:h-full file:border-blue-400 file:py-10 file:px-20 file:w-full w-full file:outline-none"
        />
        <div className="z-10 absolute grid place-items-center gap-5 p-10">
          <i className="uil uil-image-upload text-blue-600 text-8xl" />
          <p className="text-gray-400" >Upload Or Drag the Image</p>{" "}
        </div>
      </div>
    );
  }
};

export default Canvas;

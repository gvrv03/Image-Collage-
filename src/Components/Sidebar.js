"use client";
import React from "react";
import { toast } from "react-hot-toast";
import Spinner from "./Spinner";
import { useAppStore } from "./UseStoreContext";

const Sidebar = () => {
  const {
    images,
    setimages,
    bgColor,
    setbgColor,
    handleGeneratePDF,
    setcols,
    download,
    cols,
    setborderColor,
    setborderSize,
    handleImageUpload,
  } = useAppStore();

  return (
    <div className="bg-white p-5  w-full md:w-[20%] rounded-md ">
      {/* Image Upload Components */}
      <div>
        <div className="flex gap-2 outline-none items-center font-semibold text-blue-600">
          <i className="uil text-xl uil-cloud-upload" />
          <p>Uploaded Image</p>
          {/* <input
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            multiple
            className=" file:cursor-pointer file:bg-transparent file:text-black text-white  file:border-none  file:outline-none"
          /> */}
        </div>

        <div className="mt-5 w-full relative grid place-items-center h-full ">
          <input
            onChange={handleImageUpload}
            type="file"
            draggable={true}
            accept="image/*"
            multiple
            className="z-30 file:cursor-pointer file:bg-transparent file:border  file:text-transparent  file:border-dashed file:text-black text-white file:rounded-md  file:border-blue-400 file:py-10 file:px-20 file:w-full w-full file:outline-none"
          />
          <div className=" absolute flex items-center gap-2">
            <i className="uil uil-image-upload text-blue-600 text-2xl" />
            <p className="text-gray-400 text-xs">
              Upload Or Drag the Image
            </p>{" "}
          </div>
        </div>

        <div className="gap-2 flex flex-col mt-5">
          {images.length === 0 ? (
            <div className="text-sm p-5 h-60 border-dashed border flex flex-col items-center ">
              <img src="/notfound.png" alt="notfound" className="w-40" />
              <p>No Images Found</p>{" "}
            </div>
          ) : (
            <div className="gap-2 flex  h-60 overflow-y-scroll hide-scrollbar  flex-col border border-dashed p-2 ">
              {images.map((item, index) => {
                return (
                  <ImageView
                    key={index}
                    name={item?.name}
                    url={item?.url}
                    index={index}
                    images={images}
                    setimages={setimages}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="h-[2px] bg-gray-100 my-5" />

      <div className="flex gap-5 mt-5 items-center ">
        <div className="w-full">
          <p className=" text-gray-500">Color</p>
          <input
            placeholder="Ex. #fffff"
            type="color"
            onChange={(e) => {
              setbgColor(e.target.value);
            }}
            className="w-full h-12  outline-none border-none  rounded-md "
          />
        </div>
        <div className="w-full">
          <p className="  font-medium text-gray-500">Columns</p>
          <input
            placeholder="cols"
            type="number"
            max={12}
            min={1}
            value={cols}
            onChange={(e) => {
              setcols(e.target.value);
            }}
            className=" border  w-full py-2 px-2  outline-none rounded-md "
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-500">Border</p>
        <div className="flex gap-5 mt-2">
          <input
            onChange={(e) => {
              setborderColor(e.target.value);
            }}
            type="color"
            className="outline-none  w-full h-12 rounded-md border"
          />
          <input
            type="number"
            defaultValue={0}
            min={0}
            onChange={(e) => {
              setborderSize(e.target.value);
            }}
            max={10}
            className="outline-none  px-5 w-full py-2 rounded-md border"
          />
        </div>
      </div>

      <button
        className="flex items-center  disabled:bg-blue-300 justify-center bg-blue-600 px-20 w-full rounded-md py-3 text-white font-semibold mt-5"
        onClick={handleGeneratePDF}
        disabled={images.length === 0 ? true : false}
      >
        {download ? (
          <Spinner />
        ) : (
          <p className="flex gap-5">
            {" "}
            <span className="uil uil-cloud-download" />
            <span>Download</span>
          </p>
        )}
      </button>
    </div>
  );
};

const ImageView = ({ name, url, index, images, setimages }) => {
  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setimages(updatedImages);
  };

  return (
    <div className="flex  items-center gap-2 bg-gray-50 p-2 justify-between ">
      <img className="h-[40px] w-[40px] " src={url} alt={name} />
      <p>{name.substring(0, 8)}...</p>
      <button
        onClick={() => handleDeleteImage(index)}
        className=" p-2 hover:bg-gray-100 text-2xl uil uil-times"
      />
    </div>
  );
};

export default Sidebar;

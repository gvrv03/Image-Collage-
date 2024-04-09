"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  const [images, setimages] = useState([]);
  const [bgColor, setbgColor] = useState("");
  const [cols, setcols] = useState(4);
  const [download, setdownload] = useState(false);
  const [borderColor, setborderColor] = useState("");
  const [borderSize, setborderSize] = useState(0);

  const reportTemplateRef = useRef();
  const handleGeneratePDF = async () => {
    const input = reportTemplateRef.current;
    setdownload(true);
    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("Collage.pdf");
      toast.success("Collage Downloaded");
      setdownload(false);
    } catch (error) {
      setdownload(false);

      toast.error("Error Occur : ", error);
    }
  };
  return (
    <useStoreContext.Provider
      value={{
        images,
        setimages,
        bgColor,
        setbgColor,
        reportTemplateRef,
        handleGeneratePDF,
        cols,
        setcols,
        download,
        borderColor,
        setborderColor,
        borderSize,
        setborderSize,
      }}
    >
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}

'use client'
import { useState,useEffect } from "react";

function Right() {
  const [Responsive, setResponsive] = useState(false);
  useEffect(() => {
    handleResize()
    function handleResize() {
      if (window.innerWidth < 600) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    }

    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    !Responsive?
    <div className="w-[10%]  h-[calc(100vh-70px)] flex flex-col justify-end items-center">
    <div className="h-[150px]"><p className="text_fancy rotate-90 text-[#35A29F]">m.saadurrehmanweb@gmail.com</p></div>
    <div className="w-[1px] h-[70px] bg-[#35A29F]"></div>
  </div>
  :null
  )
}

export default Right
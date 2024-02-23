"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const Homepage = () => {
  // useEffect(() => {
  //     handleResize()
  //     function handleResize() {
  //       if (window.innerWidth < 600) {
  //         setResponsive(true);
  //       } else {
  //         setResponsive(false);
  //       }
  //     }

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  return (
    <div className="w-[80%]  pl-24 pt-14 flex flex-col sm:w-full responsive_c">
      <div className="sm:w-full">
        <p className="text_fancy2 text-[1.1rem] text-[#35A29F]">
          Hi, my name is
        </p>
        <h1 className="text_heading pt-2 text-[#c8d1f0]">Muhammad Saad.</h1>
        <p className="text_heading text-[#8c93ac]">
          I code dreams into Reality.
        </p>
        <span className="text-[#777b8b] lg:w-[60%] inline-block mt-2 font-medium reponsive_ab">
          Mastering the MERN(MongoDB, Express.js, React.js and Next.js, Node.js)
          stack to sculpt exquisite web creations that captivate and innovate.
        </span>
      </div>
      <div className="w-[100%] lg:w-[200px] flex justify-center  mt-16 h-[80px]">
        <Link
          href="/about"
          className="border-[2px] hover:bg-[#35a29F] hover:text-black cursor-pointer transition-all  text-[#35A29F] flex justify-center items-center h-[60px] font-bold border-[#35A29F] rounded-md w-auto pl-6 pr-6 "
        >
          More about me
        </Link>
      </div>
    </div>
  );
};
export default Homepage;

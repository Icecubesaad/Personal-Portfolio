"use client";
import Sidebar from "./Sidebar";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
function Header() {
  const [Responsive, setResponsive] = useState(false);
  const [open, setopen] = useState(false);
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
  return !Responsive ? (
    <div className="w-full items-center pr-[50px] h-[70px] bg-[#0f192d] flex flex-row-reverse">
      <div className="flex flex-row gap-[30px] h-full items-center">
        <div>
          <Link className="text_fancy" href="/">
            <span className="text-[#35A29F]">01.</span> home
          </Link>
        </div>
        <div>
          <Link className="text_fancy" href="/about">
            <span className="text-[#35A29F]">02.</span> about
          </Link>
        </div>
        <div>
          <Link className="text_fancy" href="/projects">
            <span className="text-[#35A29F]">03.</span> projects
          </Link>
        </div>
        <div>
          <Link className="text_fancy" href="/experience">
            <span className="text-[#35A29F]">04.</span> experience
          </Link>
        </div>
        <div className="text_fancy">
          <Link href="/contact">
            <span className="text-[#35A29F]">05.</span> contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            download="saad_resume"
            href="/resume.pdf"
            target="_blank"
            className="w-auto pl-4 pr-4 h-[40px] border-[2px] border-[#35A29F] rounded-md text-[#35A29F] text_fancy hover:bg-[#35a29F] transition-all font-bold flex justify-center items-center hover:text-black cursor-pointer"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <>
   { open?<Sidebar setopen={setopen} />:<></>}
    <div className="flex h-[70px] bg-[#0f192d] flex-row-reverse pr-8">
      <button onClick={()=>setopen(true)}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </button>
    </div>
    </>
  );
}

export default Header;

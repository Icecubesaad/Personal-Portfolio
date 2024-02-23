import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
const Sidebar = ({setopen}) => {
  return (
    <div className="w-[80%] h-screen bg-[#0f192d] absolute right-0 top-0 flex flex-col z-[99999] pl-4 ">
        <button onClick={()=>{setopen(false)}} className=" flex flex-row-reverse pt-6 pr-4">
            <CloseIcon sx={{fontSize:50}}/>
        </button>
      <div className=" flex flex-col gap-10 mt-16">
        <div>
          <Link onClick={()=>{setopen(false)}} className="sidebar" href="/about">
            <span className="text-[#35A29F]">01.</span> about
          </Link>
        </div>
        <div>
          <Link onClick={()=>{setopen(false)}} className="sidebar" href="/projects">
            <span className="text-[#35A29F]">02.</span> projects
          </Link>
        </div>
        <div>
          <Link onClick={()=>{setopen(false)}} className="sidebar" href="/experience">
            <span className="text-[#35A29F]">03.</span> experience
          </Link>
        </div>
        <div className="sidebar">
          <Link onClick={()=>{setopen(false)}} href="/contact">
            <span className="text-[#35A29F]">04.</span> contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link
          onClick={()=>{setopen(false)}}
            download="saad_resume"
            href="/resume.pdf"
            target="_blank"
            className="w-auto pl-10 pr-10 h-[60px] border-[2px] border-[#35A29F] rounded-md text-[#35A29F] text_fancy hover:bg-[#35a29F] transition-all font-bold flex justify-center items-center hover:text-black cursor-pointer"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

'use client'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect,useState } from 'react';
function Left() {
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
    <div className="w-[10%] h-[calc(100vh-70px)] flex justify-end flex-col items-center gap-4">
        <div className="flex flex-col">
        <a href='https://github.com/Icecubesaad'><GitHubIcon sx={{fontSize:38}}/></a>
        <a href='https://www.linkedin.com/in/muhammad-saad-ur-rehman-4aa938284/'><LinkedInIcon sx={{fontSize:38}}/></a>
        <a href=''><TwitterIcon sx={{fontSize:38}}/></a>
        </div>
        <div className="w-[1px] h-[150px] bg-[#35A29F]">

        </div>
      </div>
      :null
  )
}

export default Left
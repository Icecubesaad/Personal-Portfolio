"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const About = () => {
    const [responsive, setresponsive] = useState(100);
    useEffect(() => {
        handleResize()
        function handleResize() {
          if (window.innerWidth < 600) {
            setresponsive(50);
          } else {
            setresponsive(100);
          }
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <div className="w-[80%] pl-24 pt-14 flex flex-col overflow-y-scroll custom-scrollbar pb-20 responsive_c">
      <h1 className="text_fancy3">About</h1>
      <div className="w-[80%] text-xl text-[#777b8b] reponsive_ab text-justify">
        Hi there! I{"'"}m Saad, a 19-year-old MERN stack developer with two
        years of hands-on experience in the field. 🚀 Passionate about crafting
        innovative digital solutions, I{"'"}ve been freelancing my skills for
        the past year, bringing ideas to life and delivering top-notch web
        experiences. Here{"'"}s my stack :
      </div>
      <h1 className="text_fancy3  mt-6">FrontEnd Stack</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/Next.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Next.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/React.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">React.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/Html.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">HTML</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/Css.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">CSS</div>
        </div>
      </div>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center mt-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/js.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Javascript</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/Tailwind.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Tailwind css</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/Mu.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Material UI</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/fm.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Framer Motion</div>
        </div>
      </div>
      <h1 className="text_fancy3  mt-6">Backend Stack</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/node.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Node.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/express.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Express.js</div>
        </div>
      </div>
      <h1 className="text_fancy3  mt-6">DataBase</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/mongo.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">MongoDB</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image src="/firebase.svg" alt="nextjs" height={responsive} width={responsive} />
          </div>
          <div className="text_fancy4">Firebase</div>
        </div>
      </div>
      <h1 className="text_fancy3  mt-6">Other Skills</h1>
      <div className="flex flex-col gap-4 justify-center">
        <p className="text_fancy2">- RESTful API Development</p>
        <p className="text_fancy2">
          - Authentication and Authorization (e.g., JWT, OAuth)
        </p>
        <p className="text_fancy2">- API Integration</p>
        <p className="text_fancy2">- Query Optimization</p>
      </div>
    </div>
  );
};
export default About;

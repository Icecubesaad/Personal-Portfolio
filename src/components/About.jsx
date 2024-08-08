"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const About = () => {
  const [responsive, setresponsive] = useState(100);
  useEffect(() => {
    handleResize();
    function handleResize() {
      if (window.innerWidth < 600) {
        setresponsive(50);
      } else {
        setresponsive(80);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="about" className="w-full pl-24 pt-14 flex flex-col overflow-y-scroll custom-scrollbar pb-20 responsive_c">
      <h1 className="nunito text-4xl font-[700]">About</h1>
      <div className="w-full nunito font-[600] text-[#c8d1f0] text-xl reponsive_ab text-justify">
      <span className=" mt-2 block leading-[2rem]">
  Hey there 👋 <br/> 
  <span className=" block mt-2">
    Since 2020, I have been developing my abilities as a motivated programmer with a solid background in web development. My primary focus is on the MERN stack, although I am proficient in a wide range of technologies, including React, Next.js, Express, and Node.js. Currently, I am pursuing a bachelor's degree in computer science at the University of Central Punjab, where I am constantly researching new technologies. As a self-taught programmer, I have undertaken numerous projects, showcasing my ability to learn independently and implement innovative solutions. Additionally, I have gained practical experience by working as a freelancer and collaborating effectively within teams, including my role at Ittefaq Electronics and Uplift where I contributed in building web and mobile applications. I absolutely love and thrive in the aspect of constantly learning and pondering on challenging problems. My passion for coding and commitment to lifelong learning motivate me to look for fresh opportunities and challenges in the web development industry. I'm excited to network with like-minded people and provide my expertise to worthwhile causes.
  </span>
</span>

      </div>
      <h1 className="nunito text-3xl font-[700]  mt-6">FrontEnd Stack</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center mt-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/next.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Next.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/React.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">React.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/Html.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">HTML</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/Css.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">CSS</div>
        </div>
      </div>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center mt-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/js.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Javascript</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/Tailwind.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Tailwind css</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/Mu.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Material UI</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/fm.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Framer Motion</div>
        </div>
      </div>
      <h1 className="nunito text-3xl font-[700]  mt-10">Backend Stack</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/node.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Node.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/express.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Express.js</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/fastapi.png"
              alt="fastapi"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Fastapi</div>
        </div>
      </div>
      <h1 className="nunito text-3xl font-[700]  mt-6">DataBase</h1>
      <div className="flex flex-row lg:gap-20 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/mongo.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">MongoDB</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <Image
              src="/firebase.svg"
              alt="nextjs"
              height={responsive}
              width={responsive}
            />
          </div>
          <div className="nunito text-2xl font-[500]">Firebase</div>
        </div>
      </div>
      <h1 className="nunito text-3xl font-[700]  mt-6">Other Skills</h1>
      <div className="flex flex-col gap-4 justify-center mt-5">
        <p className="nunito text-2xl font-[500]">- RESTful API Development</p>
        <p className="nunito text-2xl font-[500]">
          - Authentication and Authorization (e.g., JWT, OAuth)
        </p>
        <p className="nunito text-2xl font-[500]">- API Integration</p>
        <p className="nunito text-2xl font-[500]">- Query Optimization</p>
      </div>
    </div>
  );
};
export default About;

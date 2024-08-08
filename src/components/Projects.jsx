import React from "react";
import Image from "next/image";
function Projects() {
  return (
    <div id="projects" className=" pl-5 md:pl-20 pb-20">
      <h1 className=" nunito text-4xl font-[700]">Projects</h1>
      <div className=" flex md:flex-row flex-col items-center gap-10 mt-10">
        <div className=" h-[500px] transform transition-transform duration-300 hover:scale-110 origin-center bg-slate-950 w-[90%] md:w-[350px]">
          <Image src="/twitter.png" width={350} height={200} alt="project" />
          <div className=" p-5">
            <h1 className="nunito text-xl font-[700]">Twitter Clone</h1>
            <p>
              A Full-Stack Twitter Clone Using MERN stack with all the features
              such as posting tweets with images, real-time updates, and dynamic
              interactions like liking and retweeting.
            </p>
          </div>
          <div className=" pl-5 pr-5 w-full flex absolute bottom-3 justify-center">
            <button className=" p-1 w-full h-[50px] bg-blue-600 border-[1px] border-transparent rounded-lg">
              Source Code
            </button>
          </div>
        </div>
        <div className="flex transform transition-transform duration-300 hover:scale-110 origin-center md:flex-row bg-slate-950 w-[90%] h-[500px] md:w-[650px]">
          <div className="flex flex-col h-full w-full">
            <Image src="/uplift.png" alt="uplift" width={390} height={200} />
            <div className="pl-5 mt-6 pr-5">
              <h1 className="nunito text-xl font-[700]">Uplift</h1>
              <p>
                A Social Media Application which connects million of people to share their joy and sorrows. I contributed to this project as a full stack developer and worked on their website and mobile application. We used MERN stack as our base stack in building this project. 
              </p>
            </div>
            <div className=" pl-5 pr-5 w-full flex absolute bottom-3">
            <button className=" p-1 w-[50%] h-[50px] bg-blue-600 border-[1px] border-transparent rounded-lg">
              Live Site
            </button>
          </div>
          </div>
          <div className="w-[50%] md:flex hidden justify-center items-center">
            <Image
              src="/upliftMobile.jpeg"
              alt="uplift"
              width={650}
              height={700}
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-10 mt-20">
        <div className=" h-[500px] transform transition-transform duration-300 hover:scale-110 w-[90%] origin-center bg-slate-950 md:w-[350px]">
          <Image src="/recipe1.png" width={450} height={400} alt="project" />
          <div className=" p-5">
            <h1 className="nunito text-xl font-[700]">Recipe Web Application</h1>
            <p>
              A Full-Stack Recipe Web Application Using MERN stack with all the features
              such as Authentication, Saving the recipe, Delete recipe and more.
            </p>
          </div>
          <div className=" pl-5 pr-5 w-full flex absolute bottom-3 justify-center">
            <button className=" p-1 w-full h-[50px] bg-blue-600 border-[1px] border-transparent rounded-lg">
              Source Code
            </button>
          </div>
        </div>
        <div className="flex transform transition-transform duration-300 hover:scale-110 origin-center md:flex-row bg-slate-950 w-[90%] h-[500px] md:w-[650px]">
          <div className="flex flex-col h-full w-full">
            <div className="pl-5 mt-6 pr-5">
              <h1 className="nunito text-xl font-[700]">Kicks</h1>
              <p>
                An E-commerce Application made specifically for exchange of Shoes powered by react native and express.js. This application utilizes redux for the states exhange across the screens and possesses features like Authentication, Cart, Payment and many more. 
              </p>
            </div>
            <div className=" pl-5 pr-5 w-full flex absolute bottom-3">
            <button className=" p-1 w-[50%] h-[50px] bg-blue-600 border-[1px] border-transparent rounded-lg">
              Live Site
            </button>
          </div>
          </div>
          <div className="w-[50%] hidden md:flex justify-center items-center">
            <Image
              src="/kicks.jpeg"
              alt="uplift"
              width={650}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

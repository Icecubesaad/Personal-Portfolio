"use client";
import { extend, shrink } from "@/functions/changeStyles";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="w-[80%] pl-24 pt-14 flex flex-col overflow-y-scroll custom-scrollbar pb-20 responsive_c">
      <h1 className="text_fancy3 text-[#8c93ac]">Projects</h1>
      <p className="w-[80%] text-xl text-[#777b8b] reponsive_ab">
        Throughout my journey, I have undertaken numerous side projects that
        serve as compelling demonstrations of my adeptness in learning and
        implementing various technologies. Below, I have categorized these
        projects according to their complexity and the corresponding levels of
        expertise I{"'"}ve acquired.
      </p>
      <h1 className="text_fancy3 text-[#8c93ac]">Beginner</h1>
      <h1 className="text_fancy5 text-[#8c93ac]">
        mouse-pad E-commerce website
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center lg:flex-row justify-between mt-5 lg:gap-0 gap-3">
          <Image src="/beginner.png" width={600} height={250} alt="project" />
          <Image
            src="/beginnerPhone.png"
            width={200}
            height={350}
            alt="project"
          />
        </div>
        <div>
          <h1 className="text_fancy4">Description :</h1>
          <p className="text_fancy4">
            During the nascent stages of my web development journey, I crafted a
            mouse-pad E-commerce Website using only HTML, CSS, and JavaScript.
            Motivated by a desire to challenge myself after acquiring
            fundamental proficiency in these languages, I embarked on this
            project to deepen my understanding and practical application of web
            development principles.
          </p>
          <h1 className="text_fancy4">Technologies Used :</h1>
          <p className="text_fancy4">HTML, CSS, Javascript</p>
        </div>
      </div>
      <h1 className="text_fancy3 text-[#8c93ac] mt-8">Intermediate</h1>
      <h1 className="text_fancy5 text-[#8c93ac]">Blog app</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:gap-0 gap-3 lg:flex-row justify-between items-center mt-5">
          <Image src="/BLOG.png" width={500} height={250} alt="project" />
          <Image src="/blog2.png" width={450} height={250} alt="project" />
        </div>
        <div>
          <h1 className="text_fancy4 text-[#8c93ac] font-bold">
            Description :
          </h1>
          <p className="text_fancy4 text-justify">
            Presenting a sleek MERN Stack blog app in my portfolio, highlighting
            my mastery in authentication and data handling. This project boasts
            robust user authentication and seamless functionalities for posting
            and fetching blog content. It{"'"}s a prime example of my prowess in
            full-stack development, with a focus on the dynamic MERN Stack
            ecosystem.
          </p>
          <h1 className="text_fancy4 text-[#8c93ac]">Technologies Used :</h1>
          <p className="text_fancy4">
            React.js, Node.js, Express.js, MongoDB, Tailwind, MaterialUI
          </p>
        </div>
      </div>
      <h1 className="text_fancy5 text-[#8c93ac] mt-8">Recipe app</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:gap-0 gap-3 lg:flex-row justify-between items-center mt-5">
          <Image src="/recipe1.png" width={450} height={400} alt="project" />
          <Image src="/recipe2.png" width={450} height={400} alt="project" />
        </div>
        <div>
          <h1 className="text_fancy4 text-[#8c93ac] font-bold">
            Description :
          </h1>
          <p className="text_fancy4 text-justify">
            A full-stack recipe app, crafted on the MERN Stack, showcases my
            prowess in backend development, authentication, and API integration.
            Utilizing third-party APIs, it offers seamless browsing, saving, and
            sharing of recipes. With a focus on secure authentication and
            efficient data management, it underscores my proficiency in
            full-stack development within the dynamic MERN ecosystem.
          </p>
          <h1 className="text_fancy4 text-[#8c93ac]">Technologies Used :</h1>
          <p className="text_fancy4">
            React.js, Node.js, Express.js, MongoDB, Tailwind, MaterialUI
          </p>
        </div>
      </div>
      <h1 className="text_fancy5 text-[#8c93ac] mt-8">BookStore app</h1>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center mt-5">
          <Image src="/library.png" width={700} height={250} alt="project" />
        </div>
        <div>
          <h1 className="text_fancy4 text-[#8c93ac] font-bold">
            Description :
          </h1>
          <p className="text_fancy4 text-justify">
            A full-stack recipe app, crafted on the MERN Stack, showcases my
            prowess in backend development, authentication, and API integration.
            Utilizing third-party APIs, it offers seamless browsing, saving, and
            sharing of recipes. With a focus on secure authentication and
            efficient data management, it underscores my proficiency in
            full-stack development within the dynamic MERN ecosystem.
          </p>
          <h1 className="text_fancy4 text-[#8c93ac]">Technologies Used :</h1>
          <p className="text_fancy4">
            React.js, Node.js, Express.js, MongoDB, Tailwind, MaterialUI
          </p>
        </div>
      </div>
      <h1 className="text_fancy3 text-[#8c93ac] mt-5">Advanced</h1>
      <h1 className="text_fancy5 text-[#8c93ac] mt-8">Twitter Clone</h1>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center mt-5">
          <Image src="/twitter.png" width={700} height={300} alt="project" />
        </div>
        <div>
          <h1 className="text_fancy4 text-[#8c93ac] font-bold">
            Description :
          </h1>
          <p className="text_fancy4 text-justify">
            At an advanced level in full-stack development, I{"'"}ve crafted an
            intricate Twitter clone using the MERN Stack. This project showcases
            my mastery in backend development, robust user authentication, and
            seamless integration of advanced features such as posting tweets
            with images, real-time updates, and dynamic interactions like liking
            and retweeting. It stands as a testament to my expertise in the MERN
            ecosystem and my ability to build scalable, feature-rich
            applications.
          </p>
          <h1 className="text_fancy4 text-[#8c93ac]">Technologies Used :</h1>
          <p className="text_fancy4">
            React.js, Node.js, Express.js, MongoDB, Tailwind, MaterialUI
          </p>
        </div>
      </div>
      <h1 className="text_fancy3 text-[#8c93ac] mt-5">Freelancing</h1>
      <h1 className="text_fancy5 text-[#8c93ac] mt-8">Uplift</h1>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center mt-5">
          <Image src="/uplift.png" width={700} height={300} alt="project" />
        </div>
        <div>
          <h1 className="text_fancy4 text-[#8c93ac] font-bold">
            Description :
          </h1>
          <p className="text_fancy4 text-justify">
            In an advanced freelancing project, I crafted a visually stunning
            React landing page for a client{"'"}s application. This project involved
            translating the client{"'"}s vision and brand identity into a
            captivating online presence. Despite the simplicity of the landing
            page, it showcased my expertise in React development, UI/UX design,
            and client collaboration. By delivering a polished and effective
            landing page, I contributed to enhancing the client{"'"}s online
            visibility and user engagement.
          </p>
          <h1 className="text_fancy4 text-[#8c93ac]">Technologies Used :</h1>
          <p className="text_fancy4">React.js, Tailwind, MaterialUI</p>
        </div>
      </div>
    </div>
  );
};
export default Projects;

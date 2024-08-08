import React from "react";

function Experience() {
  return (
    <div id="experience" className="w-full pl-5 md:pl-24 pt-14 flex flex-col overflow-y-scroll custom-scrollbar pb-20 ">
      <h1 className="nunito text-4xl font-[700]">Experience</h1>
      <article>
        <h2 className="nunito mt-3 text-2xl italic">
          Fullstack Developer (August-2023-Present)
        </h2>
        <h3 className="nunito mt-3 text-3xl font-[700]">Company : Uplift</h3>
        <p className="nunito text-xl mt-5 leading-[2rem]">
          As a Full Stack Developer at Uplift, I collaborated with a talented
          team to develop robust mobile and web applications. My key
          responsibilities included ensuring smooth and efficient data flow
          between the frontend and backend, optimizing performance and
          reliability. I designed and implemented reusable and scalable UI
          components, enhancing user experience and maintainability.
          Additionally, I developed and integrated secure authentication
          systems, safeguarding user data and maintaining privacy.
        </p>
      </article>
      <article className=" mt-5">
        <h1 className=" nunito text-3xl font-[700]">Freelancer</h1>
        <h2 className="nunito text-2xl italic mt-5">
          Full-stack Developer (June-2022-present)
        </h2>
        <h3 className="nunito text-3xl font-[700] mt-5">Platform : Upword, Out-source</h3>
        <p className="nunito mt-5 text-xl leading-[2rem]">
          During my freelancing journey as a full-stack developer, one standout
          project involved collaborating with a startup to develop an e-commerce
          platform. From frontend design with React.js to backend development
          with Node.js and MongoDB, I navigated various technologies to deliver
          a seamless solution. Regular communication with the client ensured
          alignment with their vision, resulting in a successful project that
          underscored the dynamic and rewarding nature of freelancing in
          full-stack development.
        </p>
      </article>
    </div>
  );
}

export default Experience;

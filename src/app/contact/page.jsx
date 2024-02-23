"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
const Contact = () => {
  const form = useRef();
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const handleOpen = () => {
    setopen(true);
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          form.current.reset();
          handleOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-[80%] pl-24 pt-10 lg:pt-14 flex flex-col overflow-y-scroll custom-scrollbar pb-20 responsive_c ">
      <h1 className="heading_contact">Contact Us</h1>
      <div className=" flex flex-row items-center ">
        <div className=" w-[100%] flex flex-col gap-3 reponsive_con">
          <h1 className="contact_text text-[#35A29F]">Email</h1>
          <p className="contact_text">m.saadurrehmanweb@gmail.com</p>
          <h1 className="contact_text text-[#35A29F]">Website</h1>
          <p className="contact_text">smth.com</p>
          <h1 className="contact_text text-[#35A29F]">Phone</h1>
          <p className="contact_text">0302 4083 483</p>
          <h1 className="contact_text text-[#35A29F]">Address</h1>
          <p className="contact_text">
            House no. 651, block no. 29, Mughalpura Lahore
          </p>
        </div>
        <form ref={form} className="w-[100%]" onSubmit={SubmitForm}>
          <div className="flex flex-col gap-6 w-[100%]">
            <div className="flex flex-col lg:flex-row justify-center lg:gap-0 gap-5 w-[100%]">
              <div className="w-[100%]">
                <input
                name="user_name"
                  className="border-[1px] outline-none contact_form rounded-lg bg-white text-[#52555f] placeholder:text-[#52555f] pl-2 w-full lg:w-[80%] font-bold h-[50px]"
                  placeholder="Name"
                />
              </div>
              <div className="w-[100%]">
                <input
                name="user_email"
                  className="border-[1px] contact_form rounded-lg bg-white text-[#52555f] placeholder:text-[#52555f] pl-2 lg:w-[80%] w-full font-bold h-[50px] outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <textarea
              name="message"
                className="h-[300px] outline-none contact_form font-bold border-[1px] rounded-lg w-full lg:w-[90%] bg-white text-[#52555f] placeholder:text-[#52555f] p-4"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-center items-center">
              <input
                value="submit"
                type="submit"
                className="w-[50%] pl-4 pr-4 h-[50px] border-[2px] border-[#35A29F] rounded-md text-[#35A29F] text_fancy transition-all hover:bg-[#35a29F] hover:text-black cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Email sent ✔ We will get back to you as soon as possible."
      />
    </div>
  );
};
export default Contact;

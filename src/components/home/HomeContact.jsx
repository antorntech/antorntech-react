import React from "react";
import ContactForm from "../form/ContactForm";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const HomeContact = () => {
  return (
    <div className="px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
          <p className="text-sm">My Contact</p>
        </div>
        <div
          className="relative z-10 flex justify-center items-center text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-6 z-30 relative"
          >
            I WANT TO HEAR FROM YOU
          </h1>
          <div className="flex justify-center items-center gap-2 mt-2 absolute right-[25%] md:right-[35%] bottom-3 md:bottom-7 z-20 rotate-[-5deg] ">
            <img src="/blue-line.png" alt="blue-line" className="scale-in-bl" />
          </div>
        </div>

        <div className="w-full flex items-start gap-5 md:gap-12 mt-5">
          <div className="w-full md:w-2/3">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#00637e4d] rounded-md w-14 h-14">
                <FaLocationDot className="text-3xl text-[#00637e]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Address</h1>
                <p className="text-sm md:text-md lg:text-lg text-gray-500">
                  Lalmatia, Mohammadpur-1207, Dhaka
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#00637e4d] rounded-md w-14 h-14">
                <FaPhone className="text-3xl text-[#00637e]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Phone</h1>
                <p className="text-sm md:text-md lg:text-lg text-gray-500">
                  +880 160 808 1907
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#00637e4d] rounded-md w-14 h-14">
                <MdMail className="text-3xl text-[#00637e]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Email</h1>
                <p className="text-sm md:text-md lg:text-lg text-gray-500">
                  am.antor11@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;

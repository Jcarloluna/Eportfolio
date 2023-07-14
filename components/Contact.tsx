import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const messageDivStyling =
    "flex flex-col bg-[#fafaca] shadow-md px-8 rounded-xl py-4 border-gray-500 border-2 ";
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h1 className="py-4 text-[#ab3a3adf] text-center">Let's Connect!</h1>
        <p className="text-gray-700 max-w-[100%] text-center px-40">
          If you have any questions, want to collaborate, or simply want to
          connect, I'd love to hear from you. Let's create impactful and
          memorable web experiences together!
        </p>
        <div className="grid lg:grid-cols-5 flex-row-reverse py-24 max-h-[500px]">
          {/* right */}
          <div className="col-span-2 w-full h-auto shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="space-y-4">
                  <div className={messageDivStyling}>
                    <label className="py-2 font-indie tracking-widest">
                      <h4>Name</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="py-2 font-indie tracking-widest">
                      <h4>Email</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="font-indie tracking-widest py-2">
                      <h4>Subject</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="font-indie tracking-widest py-2">
                      <h4>Message</h4>
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-500 bg-gray-100 font-indie tracking-widest"
                      rows={5}
                      name="message"
                    ></textarea>
                  </div>
                  <button className="font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4 bg-[#ab3a3adf]">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

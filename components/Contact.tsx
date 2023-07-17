import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ErrorMessage } from "./Notifications/ErrorMessage";
import { SuccessMessage } from "./Notifications/SuccessMessage";

const Contact: React.FC<{}> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [renderError, setRenderError] = useState(false);
  const [renderSuccess, setRenderSuccess] = useState(false);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMessageLoading(true);
    console.log("[Loading]:", isMessageLoading);
    if (form.current) {
      emailjs
        .sendForm(
          "service_9o3x7q9",
          "template_g8hzjmo",
          form.current,
          "QWQ5GNmCW38_8pMCk"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            console.log("MESSAGESENT!");
            setIsMessageLoading(false);
            setRenderSuccess(true);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
            console.log("MESSAGEERROR!");
            setIsMessageLoading(false);
            setRenderError(true);
          }
        );
    }
  };

  const messageDivStyling =
    "flex flex-col bg-[#fafaca] shadow-md px-8 rounded-xl py-4 border-gray-500 border-2 ";
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h1 className="py-4 text-[#ab3a3adf] text-center">Let's Connect!</h1>
        <p className="text-gray-700 max-w-[100%] text-center px-8 sm:px-24 lg:px-40">
          If you have any questions, want to collaborate, or simply want to
          connect, I'd love to hear from you. Let's create impactful and
          memorable web experiences together!
        </p>
        <div className="grid lg:grid-cols-5 flex-row-reverse py-24 max-h-[500px]">
          {/* right */}
          <div className="col-span-2 w-full h-auto shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form ref={form} method="POST" onSubmit={handleSendMessage}>
                <div className="space-y-4">
                  <div className={messageDivStyling}>
                    <label className="py-2 font-indie tracking-widest">
                      <h4>Name</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="py-2 font-indie tracking-widest">
                      <h4>Email</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="font-indie tracking-widest py-2">
                      <h4>Message</h4>
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-500 bg-gray-100 font-indie tracking-widest"
                      rows={5}
                      name="user_message"
                      required
                    ></textarea>
                  </div>
                  <button
                    disabled={isMessageLoading}
                    className={
                      isMessageLoading
                        ? "bg-[#ad5959df] cursor-wait font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4"
                        : "bg-[#ab3a3adf] " +
                          " font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4"
                    }
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {renderError && <ErrorMessage />}
      {renderSuccess && <SuccessMessage />}
    </div>
  );
};

export default Contact;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { MessageBox } from "./Notifications/MessageBox";

const Contact: React.FC<{}> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageLoading, setIsMessageLoading] = useState<boolean>(false);
  const [renderMessageBox, setRenderMessageBox] = useState<boolean>(true);
  const [messageResponseStatus, setMessageResponseStatus] =
    useState<string>("ERROR");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMessageLoading(true);
    console.log("[Loading]:", isMessageLoading);
    if (form.current) {
      emailjs
        .sendForm(
          "service_9o3x7q9",
          "templae_g8hzjmo",
          form.current,
          "QWQ5GNmCW38_8pMCk"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            // console.log(result.text);
            // console.log("MESSAGESENT!");
            setMessageResponseStatus("SUCCESS");
            setIsMessageLoading(false);
            setRenderMessageBox(true);
            form.current?.reset();
          },
          (error: EmailJSResponseStatus) => {
            // console.log(error.text);
            // console.log("MESSAGEERROR!");
            setMessageResponseStatus("ERROR");
            setIsMessageLoading(false);
            setRenderMessageBox(true);
          }
        );
    }
  };

  const handleBackdrop = () => {
    setRenderMessageBox(false);
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
        <div className="grid grid-cols-1 md:grid-cols-5 flex-row-reverse py-12 max-h-[500px] md:gap-8 ">
          {/*left */}
          <div className="col-span-3 w-full h-auto shadow-gray-400 px-20 md:px-4 lg:p-4 flex justify-center items-center">
            <Image
              src="/assets/contactsIcon/contactPhoto.svg"
              alt="Image"
              width={300}
              height={250}
              layout="responsive"
              className="max-h-[500px] max-w-[500px]"
            />
          </div>
          {/* right */}
          <div className="col-span-2 w-full h-auto shadow-gray-400 lg:p-4">
            <div className="p-8">
              <form ref={form} method="POST" onSubmit={handleSendMessage}>
                <div className="space-y-4">
                  <div className={messageDivStyling + " h-[120px]"}>
                    <label className="py-1 font-indie tracking-widest">
                      <h4>Name</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest h-1/2"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className={messageDivStyling + "  h-[120px]"}>
                    <label className="py-1 font-indie tracking-widest">
                      <h4>Email</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest  h-1/2"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className={messageDivStyling + " h-[180px]"}>
                    <label className="font-indie tracking-widest py-2">
                      <h4>Message</h4>
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-500 bg-gray-100 font-indie tracking-widest  h-2/3"
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

      {messageResponseStatus === "SUCCESS"
        ? renderMessageBox && (
            <MessageBox
              messageHeader={messageResponseStatus}
              messageBody={"Email sent successfully!"}
              handleBackdrop={handleBackdrop}
              
            />
          )
        : messageResponseStatus === "ERROR"
        ? renderMessageBox && (
            <MessageBox
              messageHeader={messageResponseStatus}
              messageBody={
                "Something went wrong! Feature not working at the moment"
              }
              handleBackdrop={handleBackdrop}
            />
          )
        : null}
    </div>
  );
};

export default Contact;

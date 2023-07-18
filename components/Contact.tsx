import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { MessageBox } from "./Notifications/MessageBox";

export const Contact: React.FC<{}> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageLoading, setIsMessageLoading] = useState<boolean>(false);
  const [renderMessageBox, setRenderMessageBox] = useState<boolean>(true);
  const [messageResponseStatus, setMessageResponseStatus] =
    useState<string>("");

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
    <div
      id="contact"
      className="w-full min-h-fit m:h-auto py-40 flex flex-col mb-[60px] "
    >
      <div className="max-w-[1240px] m-auto px-2 py-8 w-full ">
        <h1 className="py-4 text-[#ab3a3adf] text-center">Let's Connect</h1>
        <p className="text-gray-700 max-w-[100%] text-center px-8 sm:px-24 lg:px-40">
          If you have any questions, want to collaborate, or simply want to
          connect, I'd love to hear from you. Let's create impactful and
          memorable web experiences together!
        </p>

        <div className=" h-[250px] m:h-[150px] w-full mt-8 itemsfont-indie grid grid-cols-2 md:grid-cols-4 flex-row items-center justify-evenly tracking-widest px-4 mb-14 md:mb-0">
          <Link href={""} className="justify-around items-center flex">
            <Image
              src="/assets/contactsIcon/githubCloud.svg"
              alt="Image"
              width={150}
              height={150}
              layout="responsive"
              className="max-h-[150px] max-w-[150px] col-span-1"
            />
          </Link>
          <Link href={""} className="justify-center items-center flex">
            <Image
              src="/assets/contactsIcon/linkedInCloud.svg"
              alt="Image"
              width={150}
              height={150}
              layout="responsive"
              className="max-h-[150px] max-w-[150px] col-span-1"
            />
          </Link>
          <Link href={""} className="justify-center items-center flex">
            <Image
              src="/assets/contactsIcon/facebookCloud.svg"
              alt="Image"
              width={250}
              height={250}
              layout="responsive"
              className="max-h-[150px] max-w-[150px] col-span-1"
            />
          </Link>
          <Link href={""} className="justify-center items-center flex">
            <Image
              src="/assets/contactsIcon/gmailCloud.svg"
              alt="Image"
              width={250}
              height={250}
              layout="responsive"
              className="max-h-[150px] max-w-[150px] "
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 flex-row-reverse pb-12 max-h-[500px] md:gap-8 ">
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
          <div className="col-span-2 w-full h-auto shadow-gray-400 lg:p-2">
            <div className="p-8">
              <form ref={form} method="POST" onSubmit={handleSendMessage}>
                <div className="space-y-4">
                  <div className={messageDivStyling}>
                    <label className="font-indie flex flex-row items-center justify-start tracking-widest gap-1">
                      <Image
                        src="/assets/contactsIcon/iconUser.png"
                        alt="Image"
                        width={25}
                        height={25}
                        layout="responsive"
                        className="max-h-[40px] max-w-[40px]"
                      />
                      <h4>Name</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest h-1/2"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="font-indie flex flex-row items-center justify-start tracking-widest gap-1">
                      <Image
                        src="/assets/contactsIcon/iconEmail.png"
                        alt="Image"
                        width={25}
                        height={25}
                        layout="responsive"
                        className="max-h-[35px] max-w-[35px]"
                      />
                      <h4>Email</h4>
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500 bg-gray-100 font-indie tracking-widest  h-1/2"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className={messageDivStyling}>
                    <label className="font-indie flex flex-row items-center justify-start tracking-widest gap-1">
                      <Image
                        src="/assets/contactsIcon/iconMessage.png"
                        alt="Image"
                        width={25}
                        height={25}
                        layout="responsive"
                        className="max-h-[35px] max-w-[35px]"
                      />
                      <h4>Message</h4>
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-500 bg-gray-100 font-indie tracking-widest  h-2/3"
                      rows={2}
                      name="user_message"
                      required
                    ></textarea>
                  </div>
                  <button
                    disabled={isMessageLoading}
                    className={
                      isMessageLoading
                        ? "bg-[#ad5959df] cursor-wait font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4 border-2 border-gray-800  flex justify-between items-center"
                        : "bg-[#ab3a3adf] " +
                          " font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4 border-2 border-gray-800  grid grid-cols-12 justify-between items-center"
                    }
                  >
                    <span className="font-indie flex pl-[20%] items-center justify-center text-center tracking-widest col-span-10">
                      <h4>Send Message</h4>
                    </span>
                    <span className="col-span-2 justify-end flex">
                      <Image
                        src="/assets/contactsIcon/iconSent2.png"
                        alt="Image"
                        width={25}
                        height={25}
                        layout="responsive"
                        className="max-h-[35px] max-w-[35px]"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
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

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { MessageBox } from "./Notifications/MessageBox";
import { useInView } from "react-intersection-observer";

export const Contact: React.FC<{}> = () => {
  const { ref: contactsRef, inView: isComponentVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: contactsLinksRef, inView: isLinksVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: contactsMessageRef, inView: isMessageVisible } = useInView({
    triggerOnce: true,
  });
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
    <section
      ref={contactsRef}
      id="contact"
      className="w-full min-h-fit h-auto py-40 flex flex-col mb-[60px] "
    >
      <div className="max-w-[1240px] m-auto px-2 py-8 w-full ">
        <h1
          className={`py-4 text-[#ab3b3b] text-center ${
            isComponentVisible ? "animate-scale" : ""
          }`}
        >
          Let's Connect
        </h1>
        <p className="text-gray-700 max-w-[100%] text-center px-8 sm:px-24 lg:px-40">
          If you have any questions, want to collaborate, or simply want to
          connect, I'd love to hear from you. Let's create impactful and
          memorable web experiences together!
        </p>

        <div
          ref={contactsLinksRef}
          className=" h-[250px] m:h-[150px] w-full mt-8 itemsfont-indie grid grid-cols-2 md:grid-cols-4 flex-row items-center justify-evenly tracking-widest px-4 mb-14 md:mb-0"
        >
          <Link
            href={"https://github.com/Jcarloluna"}
            className="active:scale-90 hover:scale-110 duration-300 justify-around items-center flex"
            target="_blank"
          >
            <Image
              src="/assets/contactsIcon/githubCloud.svg"
              alt="Image"
              width={150}
              height={150}
              layout="responsive"
              className={` max-h-[150px] max-w-[150px] col-span-1 ${
                isLinksVisible ? "animate-shake" : ""
              }`}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/jhon-carlo-luna-508a5a265/"}
            className="active:scale-90 hover:scale-110 duration-300  justify-center items-center flex"
            target="_blank"
          >
            <Image
              src="/assets/contactsIcon/linkedinCloud.svg"
              alt="Image"
              width={150}
              height={150}
              layout="responsive"
              className={`max-h-[150px] max-w-[150px] col-span-1 ${
                isLinksVisible ? "animate-shake" : ""
              }`}
            />
          </Link>
          <Link
            href={"https://www.facebook.com/Carlo.Luna24"}
            className="active:scale-90 hover:scale-110 duration-300  justify-center items-center flex"
            target="_blank"
          >
            <Image
              src="/assets/contactsIcon/facebookCloud.svg"
              alt="Image"
              width={250}
              height={250}
              layout="responsive"
              className={` max-h-[150px] max-w-[150px] col-span-1 ${
                isLinksVisible ? "animate-shake" : ""
              }`}
            />
          </Link>
          <Link
            href={
              "https://mail.google.com/mail/u/lee@example.org/?view=cm&to=jclunawork@gmail.com"
            }
            className="active:scale-90 hover:scale-110 duration-300 justify-center items-center flex"
            target="_blank"
          >
            <Image
              src="/assets/contactsIcon/gmailCloud.svg"
              alt="Image"
              width={250}
              height={250}
              layout="responsive"
              className={`max-h-[150px] max-w-[150px] col-span-1 ${
                isLinksVisible ? "animate-shake" : ""
              }`}
            />
          </Link>
        </div>
        <div ref={contactsMessageRef}>
          <div
            className={`duration-[2000ms] grid grid-cols-1 md:grid-cols-5 flex-row-reverse pb-12 max-h-[500px] md:gap-8 ${
              isMessageVisible
                ? "translate-x-[0px]"
                : "translate-x-[500px] opacity-0"
            }`}
          >
            {/*left */}
            <div className="col-span-3 w-full h-auto shadow-gray-400 px-20 md:px-4 lg:p-4 flex justify-center items-center">
              <Image
                src="/assets/contactsIcon/contactPhoto.svg"
                alt="Image"
                width={300}
                height={250}
                layout="responsive"
                className={`max-h-[500px] max-w-[500px] `}
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
                      className={`group hover:bg-[#862f2fdf] duration-500 overflow-hidden font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4 border-2 border-gray-800  grid grid-cols-12 justify-between items-center ${
                        isMessageLoading
                          ? "bg-[#ad5959df] cursor-wait "
                          : "bg-[#ab3a3adf] " + " "
                      }`}
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
                          className="max-h-[35px] max-w-[35px] duration-700 translate-x-[-320px] rotate-[-45deg] scale-[2.5] group-hover:scale-[1.2] group-hover:rotate-0 group-hover:translate-x-0"
                        />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
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
    </section>
  );
};

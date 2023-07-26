import Image from "next/image";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { MessageBox } from "./Notifications/MessageBox";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { messageModalActions } from "../store";
import { IRoot } from "../store/interfaces";

export const Contact: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isMessageLoading = useSelector(
    (state: IRoot) => state.messageModal.isMessageLoading
  );
  const showMessageBox = useSelector(
    (state: IRoot) => state.messageModal.showMessageBox
  );
  const messageResponseStatus = useSelector(
    (state: IRoot) => state.messageModal.messageResponseStatus
  );
  const form = useRef<HTMLFormElement>(null);

  const { ref: contactsRef, inView: isComponentVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: contactsLinksRef, inView: isLinksVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: contactsMessageRef, inView: isMessageVisible } = useInView({
    triggerOnce: true,
  });

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(messageModalActions.toggleMessageLoading(true));
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
            dispatch(messageModalActions.setResponseStatus("SUCCESS"));
            dispatch(messageModalActions.toggleMessageLoading(false));
            dispatch(messageModalActions.toggleMessageBox(true));
            form.current?.reset();
          },
          (error: EmailJSResponseStatus) => {
            // console.log(error.text);
            // console.log("MESSAGEERROR!");
            dispatch(messageModalActions.setResponseStatus("ERROR"));
            dispatch(messageModalActions.toggleMessageLoading(false));
            dispatch(messageModalActions.toggleMessageBox(true));
          }
        );
    }
  };

  const handleBackdrop = () => {
    dispatch(messageModalActions.toggleMessageBox(false));
  };

  const messageDivStyling =
    "flex flex-col bg-[#fafaca] shadow-md px-8 rounded-xl py-4 border-gray-500 border-2 ";
  return (
    <section
      ref={contactsRef}
      id="contact"
      className={` w-full min-h-[100%] py-20 flex flex-col mb-[60px] `}
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
          className="h-auto m:h-[150px] w-full mt-24 mb-32 grid grid-cols-2 md:grid-cols-4 flex-row items-center justify-evenly tracking-widest px-4 md:mb-4"
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
              className={`max-h-[150px] max-w-[150px] col-span-1 ${
                isLinksVisible ? "animate-shake" : ""
              }`}
            />
          </Link>
        </div>
        <div ref={contactsMessageRef}>
          <div
            className={`duration-[2000ms] grid grid-cols-1 md:grid-cols-5 flex-row-reverse pb-12 md:gap-8 ${
              isMessageVisible ? "animate-scale" : ""
            }`}
          >
            {/*left */}
            <div
              className={`col-span-3 w-full h-auto shadow-gray-400 px-20 md:px-4 lg:p-4 flex justify-center items-center`}
            >
              <Image
                src="/assets/contactsIcon/contactPhoto.svg"
                alt="Image"
                width={300}
                height={300}
                priority={true}
                style={{
                  width: "100%",
                  height: "auto",
                }}
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
                          width={35}
                          height={35}
                          className="max-h-[35px] max-w-[35px]"
                        />
                        <h4 className="dark:text-gray-900">Name</h4>
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
                          width={35}
                          height={35}
                          className="max-h-[35px] max-w-[35px]"
                        />
                        <h4 className="dark:text-gray-900">Email</h4>
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
                          width={35}
                          height={35}
                          className="max-h-[35px] max-w-[35px]"
                        />
                        <h4 className="dark:text-gray-900">Message</h4>
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
                      className={`relative group hover:bg-[#862f2fdf] duration-500 overflow-hidden font-indie tracking-widest text-2xl w-full p-4 text-gray-100 mt-4 border-2 border-gray-800  grid grid-cols-12 justify-between items-center ${
                        isMessageLoading
                          ? "bg-[#ad5959df] cursor-wait "
                          : "bg-[#ab3a3adf] " + " "
                      }`}
                    >
                      <span className="z-[2] font-indie flex pl-[20%] items-center justify-center text-center tracking-widest col-span-10">
                        <h4>Send Message</h4>
                      </span>
                      <span className="col-span-2 justify-end flex">
                        <div className="z-[1] relative duration-700 lg:translate-x-[-950%] lg:group-hover:translate-x-[0%] lg:rotate-[-45deg] lg:-translate-y-[-30%] lg:scale-[2.5] group-hover:scale-[1.2] group-hover:translate-y-[0%] group-hover:rotate-0">
                          <Image
                            src="/assets/contactsIcon/iconSent2.png"
                            alt="Image"
                            width={80}
                            height={80}
                            className=" min-h-[50px] min-w-[50px] md:min-h-[35px] md:min-w-[35px] md:max-h-[35px] md:max-w-[35px] "
                          />
                        </div>
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
        ? showMessageBox && (
            <MessageBox
              messageHeader={messageResponseStatus}
              messageBody={"Email sent successfully!"}
              handleBackdrop={handleBackdrop}
            />
          )
        : messageResponseStatus === "ERROR"
        ? showMessageBox && (
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

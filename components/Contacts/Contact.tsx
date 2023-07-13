import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactsItem from "./ContactsItem";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto">
      <div className="w-full h-full px-40 flex justify-center items-center space-x-12">
        <div className="flex-col">
          <h1 className="uppercase tracking-widest text-center text-[#ab3a3adf]">
            Contacts
          </h1>
          <div>
            <p className="py-4 text-gray-600 sm:max-w-[100%] tracking-widest text-center">
              If you have any questions, want to collaborate, or simply want to
              connect, I'd love to hear from you. Let's create impactful and
              memorable web experiences together!"
            </p>
          </div>
          <div
            className={
              "grid lg:grid-cols-3 w-full justify-center lg:justify-between items-center gap-10 pt-12"
            }
          >
            <ContactsItem
              image={"/assets/skillsIcon/github.svg"}
              imageLabel="Github"
            />
            <ContactsItem
              image={"/assets/contactsIcon/linkedin.svg"}
              imageLabel="LinkedIn"
            />
            <ContactsItem
              image={"/assets/contactsIcon/facebook.svg"}
              imageLabel="Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

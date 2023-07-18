import React from "react";
import Image from "next/image";

type Props = {
  messageHeader: string;
  messageBody: string;
  handleBackdrop: () => void;
  buttonText?: string;
};

export const MessageBox = ({
  messageHeader,
  messageBody,
  handleBackdrop,
  buttonText,
}: Props) => {
  return (
    <div
      onClick={handleBackdrop}
      className="fixed bg-[#00000044] h-full w-full top-0 bottom-0 right-0 left-0"
    >
      <div className="grid-cols-1 md:grid-cols-5 fixed grid top-[25%] right-[15%] lg:right-[25%] max-h-[450px] md:max-h-[400px] w-[70%] lg:w-[50%] bg-[#fafaca] border-2 border-black rounded-xl px-12 py-4 items-center justify-center">
        <div className="flex col-span-3 flex-col items-center justify-center">
          <Image
            src={
              messageHeader === "SUCCESS"
                ? "/assets/contactsIcon/messageSentPhoto2.svg"
                : "/assets/contactsIcon/messageErrorPhoto.svg"
            }
            alt="Image"
            width={300}
            height={250}
            layout="responsive"
            className="max-h-[200px] md:max-h-[350px] max-w-[500px]"
          />
        </div>
        <div className="flex col-span-2 flex-col space-y-4 items-center justify-center py-4">
          <h4 className="font-indie text-center tracking-widest">
            {messageHeader}
          </h4>
          <p className="text-center">{messageBody}</p>
          <button className="font-indie tracking-widest min-w-[120px]">
            {buttonText ? buttonText : "Okay"}
          </button>
        </div>
      </div>
    </div>
  );
};

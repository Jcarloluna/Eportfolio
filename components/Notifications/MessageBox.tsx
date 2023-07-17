import React from "react";

type Props = {
  messageHeader: string;
  messageBody: string;
  handleBackdrop: () => void;
  buttonText: string;
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
      <div className="fixed flex flex-col space-y-4 top-[40%] right-[25%] max-h-[400px] w-[50%] bg-[#fafaca] border-2 border-black rounded-xl p-12 items-center justify-center">
        <h4 className="font-indie text-center tracking-widest">
          {messageHeader}
        </h4>
        <p className="text-center">{messageBody}</p>
        <button className="font-indie tracking-widest">{buttonText}</button>
      </div>
    </div>
  );
};

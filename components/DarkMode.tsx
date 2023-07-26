import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRoot } from "../store/interfaces";
import { darkModeActions } from "../store";
import Image from "next/image";

export const DarkModeButton = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: IRoot) => state.darkMode.darkModeState);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(darkModeActions.toggleDarkMode());
  };

  return (
    <div
      onClick={handleToggle}
      className="overflow-hidden fixed bottom-6 max-w-[50] max-h-[50px] left-8 duration-500 dark:bg-white bg-black z-[100] flex justify-center items-center px-2 rounded-xl cursor-pointer font-indie tracking-widest"
    >
      <div className="relative">
        <Image
          src={`/assets/iconSun.png`}
          alt="Image"
          width={40}
          height={40}
          className={`duration-500 ${
            !darkMode ? "translate-y-[-50px] translate-x-[30px]" : "translate-y-[20px]"
          }`}
        />
        <Image
          src={`/assets/iconMoon2.png`}
          alt="Image"
          width={40}
          height={40}
          className={`duration-500 ${
            darkMode ? "translate-y-[50px] translate-x-[-30px]" : " translate-y-[-20px] "
          }`}
        />
      </div>
    </div>
  );
};

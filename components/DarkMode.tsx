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
    console.log(`[darkMode]`, darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(darkModeActions.toggleDarkMode());
  };

  return (
    <div className="fixed bottom-4 left-4">
      <div onClick={handleToggle} className="bg-white flex justify-center items-center px-2 rounded-xl cursor-pointer font-indie tracking-widest">
        <Image
          src={darkMode ? `/assets/iconSun.png` : `/assets/iconMoon.png`}
          alt="Image"
          width={40}
          height={40}
          className="duration-500"
        />
        {darkMode && <span className="text-black text-lg"> Light </span>}
        {!darkMode && <span> Night </span>}
      </div>
    </div>
  );
};

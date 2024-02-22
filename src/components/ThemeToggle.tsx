import { IThemeToggleProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

import { WiMoonrise, WiSunrise } from "react-icons/wi";

const ThemeToggle = ({ initialTheme = "dark" }: IThemeToggleProps) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">(
    initialTheme,
  );
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const parsedTheme = (savedTheme as "dark" | "light") ?? initialTheme;

    setCurrentTheme(parsedTheme);
    initIcons(parsedTheme);
    document.body.classList.add(parsedTheme);

    return () => document.body.classList.remove(currentTheme);
  }, []);

  const initIcons = (theme: "light" | "dark") => {
    if (theme === "light") {
      animate(
        "#theme-icon-dark",
        { y: -100, opacity: 0 },
        { duration: 0 },
      );
    } else {
      animate(
        "#theme-icon-dark",
        { y: 100, opacity: 0 },
        { duration: 0 },
      );
    }
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark");
  };

  const handleClick = async () => {
    toggleTheme();
    if (currentTheme === "dark") {
      animate("#theme-icon-light", {
        y: -150,
        width: 25,
        opacity: 0,
      }, { duration: 0.3 });
      animate("#theme-icon-dark", {
        y: 0,
        width: 100,
        opacity: 1,
      }, { duration: 0.3 });
    } else if (currentTheme === "light") {
      animate("#theme-icon-dark", {
        y: 150,
        width: 25,
        opacity: 0,
      }, { duration: 0.3 });
      animate("#theme-icon-light", {
        y: 0,
        width: 100,
        opacity: 1,
      }, { duration: 0.3 });
    }
  };
  return (
    <div
      ref={scope}
      className={`
        text-zinc-400 absolute w-full h-full flex items-center justify-center 
        cursor-pointer hover:scale-110 opacity-0 hover:opacity-75 transition-all 
        duration-300 `}
      onClick={() => handleClick()}
    >
      <WiSunrise
        size={100}
        className={"absolute"}
        id={"theme-icon-light"}
      />
      <WiMoonrise
        size={100}
        className={"absolute"}
        id={"theme-icon-dark"}
      />
    </div>
  );
};

export default ThemeToggle;

"use client";
import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import Follower from "./Follower";
import { socialStats, stats } from "../data";
import Overview from "./Overview";

const Main = () => {
  const [isDarkMode, setisDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  // const [isDarkMode, setisDarkMode] = useState(false);
  

  // useEffect(() => {
  //   setisDarkMode(localStorage.getItem("darkMode") === "true");
  // }, []);

  useEffect(() => {

    const theme = localStorage.getItem("darkMode");
    console.log('theme: ',theme);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

  }, [isDarkMode]);

  const handClick = () => {
    setisDarkMode(!isDarkMode);
  };

  return (
    <div
      className="px-4 py-8 md:py-14 lg:py-16 md:px-10 lg:px-16 xl:px-32 2xl:px-36 font-inter flex flex-col gap-4  dark:bg-darkTheme-bg 
     xl:h-screen transition-colors duration-300 ease-in-out"
    >
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <section>
          <h1 className="text-2xl xl:text-3xl font-semibold text-lightTheme-darkText dark:text-darkTheme-whiteText">
            Social Media Dashboard
          </h1>
          <p className="text-base xl:text-xl font-semibold text-lightTheme-text dark:text-darkTheme-text">
            Total Followers: 23,004
          </p>
        </section>
        <hr className="border-lightTheme-text/70 dark:border-darkTheme-text/50 lg:hidden " />
        <section className="flex  items-center justify-between lg:justify-end lg:gap-4">
          <p className="text-base xl:text-xl font-semibold text-lightTheme-text dark:text-darkTheme-text">
            Dark Mode
          </p>
          <Switch onClick={handClick} isOn={isDarkMode} />
        </section>
      </section>
      <section className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {socialStats.map((item, index) => {
          return <Follower key={index} socials={item} />;
        })}
      </section>
      <section className="mt-2">
        <h1 className="text-lightTheme-text text-xl xl:text-2xl font-semibold  dark:text-darkTheme-whiteText py-6">
          Overview - Today
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((item, index) => {
            return <Overview key={index} view={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;

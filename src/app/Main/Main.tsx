"use client";
import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import Follower from "./Follower";
import { socialStats, stats } from "../data";
import Overview from "./Overview";

const Main = () => {
  const [isDarkMode, setisDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Default to false if localStorage is not supported or not set.
  });

  useEffect(() => {
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
      className="px-4 py-8 font-inter flex flex-col gap-4  dark:bg-darkTheme-bg 
     "
    >
      <section>
        <h1 className="text-2xl font-semibold text-lightTheme-darkText dark:text-darkTheme-whiteText">
          Social Media Dashboard
        </h1>
        <p className="text-base font-semibold text-lightTheme-text dark:text-darkTheme-text">
          Total Followers: 23,004
        </p>
      </section>
      <hr className="border-lightTheme-text/70 dark:border-darkTheme-text/50 " />
      <section className="flex  items-center justify-between">
        <p className="text-base font-semibold text-lightTheme-text dark:text-darkTheme-text">
          Dark Mode
        </p>
        <Switch onClick={handClick} isOn={isDarkMode} />
      </section>
      <section className="mt-6">
        {
          socialStats.map((item, index) =>{
            return (
              <Follower key={index} socials={item} />
            )
          })
        }
      </section>
      <section className="mt-2">
        <h1 className="text-lightTheme-text text-xl font-semibold  dark:text-darkTheme-whiteText py-6">
          Overview - Today
        </h1>
        {/* <Overview view={stats[0]} /> */}
        {
          stats.map((item, index) =>{
            return (
              <Overview key={index} view={item} />
            )
          })
        }
      </section>
    </div>
  );
};

export default Main;

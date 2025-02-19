import React, { useEffect, useState } from "react";
import Image from "next/image";
import upIcon from "../../../public/sources/images/icon-up.svg";

interface social {
  username: string;
  count: number | string;
  type: string;
  change: number;
  icon: string;
  bgc: string;
}

type prop = {
  socials: social;
};
const Follower = ({ socials }: prop) => {

  return (
    <div className="relative my-6">
      <div
        className={`absolute w-[98%] h-4 -top-1 z-[0] left-1/2 -translate-x-1/2 rounded-full`}
        style={{ background: socials.bgc }}
      ></div>
      <div
        className={`relative bg-lightTheme-cardBg p-6 z-10 rounded-md flex flex-col items-center gap-5
        dark:bg-darkTheme-cardBg `}
      >
        <section className="flex items-center justify-center gap-2">
          <Image
            src={socials.icon}
            alt={socials.username}
            width={20}
            height={20}
          />
          <p className="text-lightTheme-text font-semibold">
            {socials.username}
          </p>
        </section>
        <section className="flex flex-col items-center gap-2">
          <p className="text-lightTheme-darkText text-6xl font-bold dark:text-darkTheme-whiteText">
            {socials.count}
          </p>
          <p className="uppercase tracking-[0.25rem] text-lightTheme-darkText font-light dark:text-darkTheme-text">
            {socials.type}
          </p>
        </section>
        <section className="flex items-center gap-1 text-primary-lime font-semibold  ">
          <Image src={upIcon} alt="up icon" width={8} height={4} />
          <p>{socials.change}</p>
          <p>Today</p>
        </section>
      </div>
    </div>
  );
};

export default Follower;

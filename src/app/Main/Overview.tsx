import React from "react";
import Image from "next/image";
import upIcon from "../../../public/sources/images/icon-up.svg";
import downIcon from "../../../public/sources/images/icon-down.svg";

interface views {
  name: string;
  count: number | string;
  change: string;
  icon: string;
}

type prop = {
  view: views;
};
const Overview = ({ view }: prop) => {
  const isup =
    view.name === "Likes" || view.name === "Total Views" ? false : true;
  return (
    <div className="bg-lightTheme-cardBg dark:bg-darkTheme-cardBg rounded-sm p-6 flex flex-col gap-6 my-1
   cursor-pointer hover:bg-lightTheme-cardBgHv dark:hover:bg-darkTheme-cardBgHv ">
      <section className="flex items-center justify-between">
        <p className="text-lightTheme-text dark:text-darkTheme-text font-semibold">{view.name}</p>
        <Image src={view.icon} alt={view.name} width={20} height={20} />
      </section>
      <section className="flex items-center justify-between">
        <p className="text-lightTheme-darkText dark:text-darkTheme-whiteText text-4xl font-bold">{view.count}</p>
        <div className="flex items-center justify-center gap-1">
          <Image
            src={isup ? upIcon : downIcon}
            alt="up icon"
            width={8}
            height={4}
          />
          <p className={`${isup ? "text-primary-lime" : "text-primary-red"} font-semibold`}>
            {view.change}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Overview;

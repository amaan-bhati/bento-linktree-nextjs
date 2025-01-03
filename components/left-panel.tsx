"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div >
        <div className="">
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/dp.png"
            width={120}
            height={120}
            blurDataURL="/dp.png"
          />
        </div>

        {/* Text Container */}
        <div className="mt-1">
          <div className="text-xl font-bold text-primary">
            {siteConfig.title}
          </div>
          <h1 className="mt-1 text-4xl font-bold">{siteConfig.creator}</h1>

          <p className="text-l mt-1  text-neutral-500 ">{siteConfig.bio}</p>
        </div>
        {/* Buttons Container */}
        <div className="">
          <div className="flex items-center gap-3 mt-6 ">
            <a
              href={`https://drive.google.com/file/d/1rJNGaVu30-4Ts_DVbnx1KaGtwu6f2WeH/view?usp=sharing`}
              className="flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-medium border-2 rounded-lg border-neutral-300 dark:border-neutral-700 transition duration-300 bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#171717]"
            >
              {siteConfig.location}
            </a>
            <a
              href={`https://amaanbhati.tech`}
              className="flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-medium border-2 rounded-lg border-neutral-300 dark:border-neutral-700 transition duration-300 bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#171717]"
            >
              Visit Portfolio
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;

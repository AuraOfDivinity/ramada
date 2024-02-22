import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_LINKS, footerDescription } from "@/constants";

const Footer = () => {
  return (
    <div className="w-[100%] h-auto flex relative bg-black-primary flex-col">
      <Link href="">
        <Image
          src="/logo.png"
          alt="ramada logo"
          width={330}
          height={90}
          className="m-auto mt-8"
        />
      </Link>
      <div className="mt-6 w-[50%] m-auto">
        <form>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-primary  font-secondary regular-16 rounded-sm bg-white h-[58px]"
              placeholder="Enter Your Email Here"
            />
            <button className="min-w-[20%] xl:absolute sm:w-[100%] xs:w-[100%] xl:w-[25%] end-2.5 bottom-2.5 bg-red-primary  text-white font-primary regular-24 rounded-sm  px-4 py-0.5">
              Get In Touch
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-6 px-10  sm:flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-row">
        <div className="flex flex-col lg:ml-20 mt-10 w-64">
          <div className="text-white regular-16 mb-4 ml-4">Links</div>
          <ul className="list-disc ml-7 my-1">
            {FOOTER_LINKS.map((item, index) => (
              <li className="font-secondary text-white regular-16" key={index}>
                <Link href={item.href}>{item.displayText}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:ml-28 mt-10 grow w-64">
          <div className="text-white regular-16 mb-4 ml-4 uppercase">
            RAMADA BY WYNDHAM COLOMBO
          </div>
          <div className=" text-white regular-16 mb-4 ml-4 whitespace-pre capitalize">
            {footerDescription}
          </div>
          <div className="flex">
            <Image
              src="/Facebook.png"
              alt="star"
              width={44}
              height={44}
              className="ml-2"
            />
            <Image
              src="/insta.png"
              alt="star"
              width={44}
              height={44}
              className="ml-2"
            />
            <Image
              src="/Youtube.png"
              alt="star"
              width={44}
              height={44}
              className="ml-2"
            />
          </div>
        </div>
        <div className="flex flex-col lg:ml-20 mt-10 grow">
          <div className="flex m-auto">
            <Image
              src="/TC.png"
              alt="travellers choice award"
              width={188}
              height={188}
            />
            <Image
              src="/green.png"
              alt="green award"
              width={188}
              height={188}
              className="ml-8"
            />
          </div>
          <Image
            src="/rewards.png"
            alt="green award"
            width={230}
            height={120}
            className="m-auto"
          />
        </div>
      </div>
      <div className="flex mt-6 justify-center text-center">
        <div className="font-secondary text-white regular-16 px-8">Support</div>
        <div className="font-secondary text-white regular-16 px-8">
          Privacy Policy
        </div>
        <div className="font-secondary text-white regular-16 px-8">
          Terms and Conditions
        </div>
      </div>
      <div className="flex my-6 justify-center text-center">
        <div className="font-secondary text-white regular-16 px-8">
          © 2023 Code Desk , All Right Receved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

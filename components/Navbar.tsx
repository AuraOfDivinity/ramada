"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="ramada logo"
          width={205}
          height={57}
          className="min-w-[205px]"
        />
      </Link>
      <ul className="hidden h-full gap-16 xl:flex whitespace-nowrap">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <span className="text-gray-secondary font-secondary">
              {link.label}
            </span>
          </Link>
        ))}
      </ul>
      <div className="xl:flexCenter hidden">
        <button
          className="flexCenter gap-3 rounded-md bg-red-primary"
          style={{ width: "158px", height: "54px" }}
        >
          <label className="whitespace-nowrap text-white font-primary regular-24 flexCenter">
            Contact
          </label>
        </button>
      </div>
      <section className="mobile-menu xl:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            {NAV_LINKS.map((link, index) => (
              <Link href={link.href} key={index}>
                <li
                  className="border-b border-gray-400 my-8 font-secondary uppercase"
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

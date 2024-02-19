import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="ramada logo" width={205} height={57} />
      </Link>
      <ul className="hidden h-full gap-16 lg:flex whitespace-nowrap">
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
      <div className="lg:flexCenter hidden">
        <button
          className="flexCenter gap-3 rounded-md bg-red-primary"
          style={{ width: "158px", height: "54px" }}
        >
          <label className="whitespace-nowrap text-white font-primary regular-24 flexCenter">
            Contact
          </label>
        </button>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;

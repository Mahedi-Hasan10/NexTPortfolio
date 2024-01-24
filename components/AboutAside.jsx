import { IoTerminal } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { RiGamepadFill } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";

import Link from "next/link";
const AboutAside = () => {
  return (
    <div className="p-4 border-r border-r-[#1E2D3D] flex lg:flex-col flex-row gap-8 text-[#607B96] lg:mx-0 lg:justify-start justify-center">
      <Link
        href="/about-me/terminal"
        className="focus:text-white text-3xl hover:text-white cursor-pointer"
      >
        <IoTerminal />
      </Link>
      <Link
        href="/about-me/info"
        className="focus:text-white text-3xl hover:text-white cursor-pointer"
      >
        <FaInfoCircle />
      </Link>
      <Link
        href="/about-me/terminal"
        className="focus:text-white text-3xl hover:text-white cursor-pointer"
      >
        <RiGamepadFill />
      </Link>
      <Link
        href="/about-me/terminal"
        className="focus:text-white text-3xl hover:text-white cursor-pointer"
      >
        <SiGoogledocs />
      </Link>
    </div>
  );
};

export default AboutAside;

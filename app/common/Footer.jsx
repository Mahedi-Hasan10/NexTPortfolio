import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFigma, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border border-[#1E2D3D]">
      <nav className="flex lg:flex-row flex-col justify-between items-center text-[#607B96] transition-all duration-300 text-base font-[450]">
        <div className="flex lg:flex-row flex-col items-center">
          <Link
            href="/"
            className="px-[22px] lg:py-0 py-[17px] mr-[10px] hover:text-white lg:border-r-[#1E2D3D] lg:border-r-[1px]"
          >
            find me in:
          </Link>
          <div className="flex lg:flex-row flex-wrap object-fit">
          <Link
              className=" px-[22px] py-[17px] hover:text-white lg:border-r-[#1E2D3D] lg:border-r-[1px]"
              href="https://www.linkedin.com/in/sheikh-md-mahedi-hasan-b93898238/"
            >
              <FaLinkedin className="text-[20px]"/>
            </Link>
            <Link
              className=" px-[22px] py-[17px] hover:text-white lg:border-r-[#1E2D3D] lg:border-r-[1px]"
              href="https://twitter.com/SmMahedi10"
            >
              <FaTwitter className="text-[20px]"/>
            </Link>
            <Link
              className=" px-[22px] py-[17px] hover:text-white lg:border-r-[#1E2D3D] lg:border-r-[1px]"
              href="https://www.facebook.com/s.m.mahadi.188/"
            >
               <FaFacebook className="text-[20px]"/>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
        <Link
          className=" lg:px-[22px] px-2 lg:py-[17px] py-2 hover:text-white lg:border-l-[#1E2D3D] lg:border-l-[1px]"
          href="https://github.com/Mahedi-Hasan10"
        >
           @yanka-darelova <FaFigma className="text-[20px] inline-block ml-[5px]"/> 
        </Link>
        <Link
          className=" lg:px-[22px] px-2 lg:py-[17px] py-2 hover:text-white lg:border-l-[#1E2D3D] lg:border-l-[1px]"
          href="https://github.com/Mahedi-Hasan10"
        >
            @Mahedi-Hasan10 <FaGithub className="text-[20px] inline-block ml-[5px]"/> 
        </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

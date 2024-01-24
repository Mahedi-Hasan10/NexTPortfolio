"use client";
import Link from "next/link";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  const [BorderBottom, setBorderBottom] = useState('border-b-[orange]');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
 
  return (
    <header className="border border-[#1E2D3D]">
      <Space className="lg:hidden flex">
        <button className="px-3 py-2" onClick={showDrawer}>
            <IoMenu className="text-white text-[30px]"/>
        </button>
      </Space>

      <Drawer
        placement={placement}
        // width={250}
        open={open}
        extra={
          <Space>
            <button type="primary" onClick={onClose}>
              <IoCloseSharp className="text-white text-[30px]"/>
            </button>
          </Space>
        }
      >
        <nav
          className={`flex lg:flex-row flex-col justify-between items-center text-white transition-all duration-300 text-base font-[450] `}
        >
          <div className="flex flex-col items-center gap-5 mt-[-20px]">
            <Link href="/" className="border-b-white border-b-2 py-3  font-bold">
              Sheikh Md Mahedi Hasan
            </Link>
            <div className="flex flex-col object-fit gap-6 text-[20px]">
              <Link onClick={onClose} className="border-b-white border-b-2 py-3 BorderBottom text-center" href="/">
                _hello
              </Link>
              <Link onClick={onClose} className="border-b-white border-b-2 py-3 BorderBottom text-center" href="/about-me/info">
                _about-me
              </Link>
              <Link onClick={onClose} className="border-b-white border-b-2 py-3 BorderBottom text-center" href="/project">
                _projects
              </Link>
              <Link onClick={onClose} className="border-b-white border-b-2 py-3 BorderBottom text-center" href="/contact">
                _contact-me
              </Link>
            </div>
          </div>
        </nav>
      </Drawer>

      <nav
        className={`lg:flex hidden lg:flex-row flex-col justify-between items-center text-[#607B96] transition-all duration-300 text-base font-[450] `}
      >
        <div className="flex lg:flex-row flex-col items-center">
          <Link
            href="/"
            className="px-[22px] lg:py-0 py-[17px] lg:mr-[62.5px] hover:text-white "
          >
            Sheikh Md Mahedi Hasan
          </Link>
          <div className="flex lg:flex-row flex-col object-fit">
            <Link
            className={`${
              pathname === "/" ? "custom-style" : "not-custom-style"
            } lg:border-r border-b lg:border-l border-t border-[#1E2D3D] px-[22px] py-[17px] hover:text-white focus:text-white `}
              href="/"
            >
              _hello
            </Link>
            <Link
               className={`${
                pathname === "/about-me/info" ? "custom-style" : "not-custom-style"
              } lg:border-r border-b lg:border-l border-t border-[#1E2D3D] px-[22px] py-[17px] hover:text-white focus:text-white `}
              href="/about-me/info"
            >
              _about-me
            </Link>
            <Link
               className={`${
                pathname === "/project" ? "custom-style" : "not-custom-style"
              } lg:border-r border-b lg:border-l border-t border-[#1E2D3D] px-[22px] py-[17px] hover:text-white focus:text-white `}
              href="/project"
            >
              _projects
            </Link>
          </div>
        </div>
        <Link
           className={`${
            pathname === "/contact" ? "custom-style" : "not-custom-style"
          } lg:border-r border-b lg:border-l border-t border-[#1E2D3D] px-[22px] py-[17px] hover:text-white focus:text-white `}
          href="/contact"
        >
          _contact-me
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

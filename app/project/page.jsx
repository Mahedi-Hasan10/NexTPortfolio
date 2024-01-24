"use client";
import React, { useState } from "react";
import { MdContactPage } from "react-icons/md";
import { Menu } from "antd";

import Image from "next/image";
const bio = <Image src="/info/bio.svg" height={14} width={14} alt="bio" />;

import { FaReact } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";
import { SiDjango, SiFirebase, SiNetlify, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import Projects from "@/components/projects/Projects";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Technology", "sub1", bio, [
    getItem("TailwindCSS", "17", <TbBrandTailwind />),
    getItem("React.js", "18", <FaReact />),
    getItem("Next.js", "19", <SiNextdotjs />),
    getItem("Redux.js", "20", <TbBrandRedux />),
    getItem("Firebase", "22", <SiFirebase />),
    getItem("Django", "23", <DiDjango />),
    getItem("DRF", "24", <SiDjango />),
    getItem("Netlify", "25", <SiNetlify />),
  ]),
];

const Page = () => {
  const [showItems, setShowItems] = useState();
  // const [collapsed, setCollapsed] = useState(false);

  const handleMenuItemClick = (e) => {
    setShowItems(e.key);
    // setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-[80vh] lg:flex-row flex-col">
      <div className="border-r border-r-[#1e2e3d] min-h-[80vh]">
        <div
          style={{
            width: 319,
          }}
          className="lg:w-[319px] lg:p-0 p-4 mx-auto"
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2"]}
            mode="inline"
            theme="dark"
            // inlineCollapsed={collapsed}
            items={items}
            onClick={handleMenuItemClick}
          />
        </div>
      </div>
      <div className=" min-h-[80vh] w-full ">
        <div className=" border-b py-3 border-b-[#1e2e3d]">
          <p className="text-[#607B96] text-[16px] px-4 h-full border-r-[#1e2e3d] border-r w-fit">
            _Projects x
          </p>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-[100%] mx-auto px-16 py-10 lg:border-r lg:border-[#1e2e3d]">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

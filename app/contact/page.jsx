"use client";
import React, { useState } from "react";
import { MdContactPage, MdContactPhone } from "react-icons/md";
import { Menu } from "antd";

import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import {
  FaDiscord,
  FaExternalLinkAlt,
  FaFacebookSquare,
  FaFileAlt,
  FaSkype,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import ContactForm from "@/components/contact/contactForm";
import ContactRight from "@/components/contact/contactRight";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const bio = <Image src="/info/bio.svg" height={14} width={14} alt="bio" />;
const facebook = (
  <a href="https://www.facebook.com/s.m.mahadi.188/" action="blank">
    facebook
  </a>
);
const skype = (
  <a href="https://join.skype.com/invite/pfbpJJnlxfqO" action="blank">
    skype
  </a>
);
const email = (
  <a href="mailto:hasanmdmahedi193@gmail.com" action="blank">
    hasanmdmahedi193@gmail.com
  </a>
);
const items = [
  getItem("Contact", "sub1", <MdContactPage />, [
    getItem(email, "26", <IoMdMail />),
    getItem("+8801998311602", "27", <MdContactPhone />),
  ]),
  getItem("Find me also in : ", "sub2", <IoShareSocial />, [
    getItem(facebook, "sub3", <FaFacebookSquare />),
    getItem(skype, "sub4", <FaSkype />),
    getItem("username : mahedi10", "sub5", <FaDiscord />),
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
    <div className="flex lg:flex-row flex-col">
      <div className="border-r border-r-[#1e2e3d] max-h-[80vh]">
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
      <div className=" w-full ">
        <div className=" border-b py-3 border-b-[#1e2e3d]">
          <p className="text-[#607B96] text-[16px] px-4 h-full border-r-[#1e2e3d] border-r w-fit">
            _contact x
          </p>
        </div>
        <div className="flex">
          <div className="lg:w-[100%] h-full max-w-[50%] flex lg:flex-row flex-col  mx-auto px-16 py-10 custom-md:border-r custom-md:border-[#1e2e3d]">
            <ContactForm />
          </div>
          <div className="min-w-[50%] mx-auto custom-md:block hidden">
            <ContactRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

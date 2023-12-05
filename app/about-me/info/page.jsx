"use client";
import React, { useState } from "react";


import { FaCss3Alt, FaFileAlt, FaHtml5, FaNodeJs, FaPython,FaGitSquare, FaReact } from "react-icons/fa";
import { MdContactPage, MdContactPhone } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApiApp, TbBrandCpp, TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { SiDjango, SiFirebase, SiMysql, SiNetlify, SiNextdotjs } from "react-icons/si";
import { DiDjango } from "react-icons/di";

import {  Menu } from "antd";
import Info from "@/components/Info/InfoAboutMe";
import InfoAboutWork from "@/components/Info/InfoAboutWork";
import InfoTravel from "@/components/Info/InfoTravel";
import InfoSport from "@/components/Info/InfoSport";
import InfoCollege from "@/components/Info/InfoCollege";
import InfoUniversity from "@/components/Info/InfoUniversity";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { BsBuildingFillCheck } from "react-icons/bs";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const InfoSub  = <Image src="/info/infoSub.svg" height={14} width={14} alt="infoSub" />
const bio = <Image src="/info/bio.svg" height={14} width={14} alt="bio" />
const interest = <Image src="/info/interest.png" height={14} width={14} alt="interest" />
const education = <Image src="/info/eduaction.png" height={14} width={14} alt="education" />
const email = <a href="mailto:hasanmdmahedi193@gmail.com">hasanmdmahedi193@gmail.com</a>
const items = [
  getItem("Info", "sub1", <FaFileAlt />, [
    getItem("Bio", "sub4", bio, [
      getItem("About-me", "3",InfoSub),
      getItem("Abour-work", "4",InfoSub),
    ]),

    getItem("Interest", "sub5", interest, [
      getItem("travels", "5",InfoSub),
      getItem("sports", "6",InfoSub),
    ]),

    getItem("Education", "sub6",education, [
      getItem("Collage", "7",InfoSub),
      getItem("University", "8",InfoSub),
    ]),
  ]),

  getItem("Skills", "sub2", <BsBuildingFillCheck />
  , [
    getItem("Language", "sub7",interest, [
      getItem("HTML", "9",<FaHtml5 />),
      getItem("CSS", "10",<FaCss3Alt />),
      getItem("JavaScript", "11",<FaNodeJs />      ),
      getItem("TypeScript", "12",<BiLogoTypescript/>      ),
      getItem("Python", "13",<FaPython />),
      getItem("C++", "14",<TbBrandCpp /> ),
      getItem("MySQL", "15",<SiMysql />),
      
      
    ]),

    getItem("Technology", "sub8", bio, [
      getItem("Git", "16 ",<FaGitSquare />),
      getItem("TailwindCSS", "17", <TbBrandTailwind />
      ),
      getItem("React.js", "18",<FaReact />
      ),
      getItem("Next.js", "19",<SiNextdotjs />
      ),
      getItem("Redux.js", "20",<TbBrandRedux />
      ),
      getItem("Rest API", "21",<TbApiApp />
      ),
      getItem("Firebase", "22",<SiFirebase />),
      getItem("Django", "23",<DiDjango />),
      getItem("DRF", "24",<SiDjango />),
      getItem("Netlify", "25",<SiNetlify />
      ),
    ]),
  ]),


  

  getItem("Contact", "sub3", <MdContactPage />, [
    getItem(email, "26", <IoMdMail />),
    getItem("+8801998311602", "27", <MdContactPhone />),
  ]),
];


const Page = () => {
    const [showItems, setShowItems] = useState();
    // const [collapsed, setCollapsed] = useState(false);

    const handleMenuItemClick = (e) => {
        setShowItems(e.key);
        // setCollapsed(!collapsed);
    }

  return (
    <div className="flex min-h-[80vh] lg:flex-row flex-col">
      <div className="border-r border-r-[#1e2e3d] min-h-[80vh]">
        <div
          style={{
            width: 256,
          }}
          className="lg:w-[256px] lg:p-0 p-4 mx-auto"
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={['sub1','sub4']}
            
            mode="inline"
            theme="dark"
            // inlineCollapsed={collapsed}
            items={items}
            onClick={handleMenuItemClick}
          />
        </div>
      </div>
      <div className=" min-h-[80vh] w-full">
        { (showItems === "3" && <Info />) ||
          (showItems === "4" && <InfoAboutWork />) ||
          (showItems === "5" && <InfoTravel />) ||
          (showItems === "6" && <InfoSport />) ||
          (showItems === "7" && <InfoCollege />) ||
          (showItems === "8" && <InfoUniversity />)}
      </div>
    </div>
  );
};

export default Page;

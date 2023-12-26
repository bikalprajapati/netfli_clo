import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footlist = [
    { name: <FaFacebookF />, label: "fb" },
    { name: <CiTwitter />, lbl: "twitter" },
    { name: <FaInstagram />, lbl: "insta" },
  ];

  const footera = [
    {
      name: "Audio Description",
      lbl: "aud_desc",
    },
    {
      name: "Gift cards ",
      lbl: "gift_card",
    },
    {
      name: "Investor Relations ",
      lbl: "invest_rel",
    },
  ];

  const footerc = [
    {
      name: "Terms of USe",
      lbl: "aterms",
    },
    {
      name: "Gift cards ",
      lbl: "gift_card",
    },
    {
      name: "Investor Relations ",
      lbl: "invest_rel",
    },
  ];

  const footerb = [
    {
      name: " Help Centre",
      lbl: "help_centre",
    },
    {
      name: "Media Centre ",
      lbl: "medd_centre",
    },
    {
      name: "Jobs",
      lbl: "job",
    },
  ];

  const footerd = [
    { name: "Privacy", lbl: "privacy" },
    { name: "Cookie preferences", lbl: "cookie_pref" },
    { name: "Contact us", lbl: "contact" },
  ];

  return (
    <div>
      <div className="bg-black flex  text-white pl-10 p-4">
        {footlist.map((footlists) => (
          <span>
            <label className="p-10 text-2xl" htmlFor={footlists.lbl}>
              {footlists.name}
            </label>
          </span>
        ))}
      </div>
      <div className="flex space-x-32  px-12 bg-black text-white ">
        <div className="flex flex-col mb-5 space-y-2">
          {footera.map((footeraa) => (
            <label htmlFor={footeraa.lbl}>{footeraa.name}</label>
          ))}
        </div>
        <div className="flex flex-col mb-5 space-y-2">
          {footerb.map((footerbb) => (
            <label htmlFor={footerbb.lbl}>{footerbb.name}</label>
          ))}
        </div>
        <div className="flex flex-col mb-5 space-y-2">
          {footerc.map((footercc) => (
            <label htmlFor={footercc.lbl}>{footercc.name}</label>
          ))}
        </div>
        <div className="flex flex-col mb-5 space-y-2 ">
          {footerd.map((footerdd) => (
            <label htmlFor={footerdd.lbl}>{footerdd.name}</label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

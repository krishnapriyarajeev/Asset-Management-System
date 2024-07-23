/* eslint-disable no-unused-vars */
import NavLink from "../NavLink/Navlink";
import kvlogo from "../../assets/kv-logo.png";
import "./sideBar.scss";
import { useEffect, useState } from "react";

const navLinks = [
  {
    link: "/profile",
    text: "Profile",
  },
  {
    link: "/asset",
    text: "Assets",
  },
];

const EmployeeSideBar = () => {
  //   const onNavClick = () => {};
  const [link, setLink] = useState("/asset");
  const changeSelect = () => {
    setLink(window.location.pathname);
  };

  return (
    <aside className="sideBarBackground">
      <div className="kv-logo">
      <img src={kvlogo} alt="" className="kvLogo" /></div>
      <nav className="navigation">
        {navLinks.map((navlink) => {
          return (
            <NavLink
              text={navlink.text}
              key={navlink.text}
              link={navlink.link}
              select={
                window.location.href.includes(navlink.link) ? "selectNav" : ""
              }
              changeSelect={changeSelect}
            />
          );
        })}
      </nav>
    </aside>
  );
};
export default EmployeeSideBar;

/* eslint-disable no-unused-vars */
import NavLink from "../NavLink/Navlink";
import kvlogo from "../../assets/kv-logo.png";
import "./sideBar.scss";
import { useEffect, useState } from "react";

const navLinks = [
  {
    link: "/asset",
    text: "Assets",
  },
  {
    link: "/requests",
    text: "Requests",
  },
  {
    link: "/employees",
    text: "List Employees",
  },
  {
    link: "/createEmployee",
    text: "Create Employee",
  },
];

const SideBar = () => {
  //   const onNavClick = () => {};
  const [link, setLink] = useState("/asset");
  const changeSelect = () => {
    setLink(window.location.pathname);
  };

  return (
    <aside className="sideBarBackground">
      <img src={kvlogo} alt="" className="kvLogo" />
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
export default SideBar;

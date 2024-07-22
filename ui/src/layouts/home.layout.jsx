import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";
import User from "../components/user/user";

const HomeLayout = () => {
  return (
    <>
      <SideBar />
      <User/>
      <Outlet />
    </>
  );
};

export default HomeLayout;

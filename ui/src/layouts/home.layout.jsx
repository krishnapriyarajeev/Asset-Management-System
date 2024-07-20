import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";

const HomeLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default HomeLayout;

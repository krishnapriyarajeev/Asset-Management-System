import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";
import User from "../components/user/user";
import { useEffect } from "react";

const HomeLayout = () => {
  const user = localStorage.getItem("kvLogin");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      <SideBar />
      <User />
      <Outlet />
    </>
  );
};

export default HomeLayout;

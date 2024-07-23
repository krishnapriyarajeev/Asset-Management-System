import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";
import User from "../components/user/user";
import EmployeeSideBar from "../components/sideBar/employeeSideBar";

const EmployeeLayout = () => {
  return (
    <>
      <EmployeeSideBar />
      <User/>
      <Outlet />
    </>
  );
};

export default EmployeeLayout;

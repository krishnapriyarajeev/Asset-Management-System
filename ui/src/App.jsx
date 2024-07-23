import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layouts/home.layout";
import Category from "./pages/category/page";
import SubCategory from "./pages/subcategory/page";
import ModalList from "./pages/model/page";
import Request from "./pages/requests/page";
import Login from "./pages/Login/Login";
import RequestDetail from "./pages/reqestsDetailed/page";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import EmployeeDashboard from "./pages/employeeDashboard/employeeDashboard";
import EmployeeLayout from "./layouts/employee.home.layout";
import EmployeeRequest from "./pages/employeeRequest/employeeRequest";
import RequestHistory from "./pages/requestHistory/requestHistory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admindashboard",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <AdminDashboard />,
        },
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/assets",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Category />,
        },
        {
          path: ":categoryId",
          element: <SubCategory />,
        },
        {
          path: ":categoryId/:subCategoryId",
          element: <ModalList />,
        },
      ],
    },
    {
      path: "/requests",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Request />,
        },
        {
          path: ":requestId",
          element: <RequestDetail />,
        },
      ],
    },
    {
      path: "/employees",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <EmployeeList />,
        },
        {
          path: ":id",
          element: <EmployeeDetails />,
        },
      ],
    },
    {
      path: "/profile",
      element: <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <EmployeeDashboard />,
        }
      ],
    },
    {
      path: "/asset",
      element: <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <RequestHistory />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

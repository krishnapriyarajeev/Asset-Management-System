import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layouts/home.layout";
import Category from "./pages/category/page";
import SubCategory from "./pages/subcategory/page";
import ModalList from "./pages/model/page";
import Request from "./pages/requests/page";
import Login from "./pages/Login/Login";
import RequestDetail from "./pages/reuestsDetailed/page";
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
      path: "/new",
      element: <AdminDashboard />,
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
      path: "/dashboard",
      element: <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <EmployeeDashboard />,
        }
      ],
    },
    {
      path: "/request",
      element: <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <EmployeeRequest />,
        }
      ],
    },
    {
      path: "/history",
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

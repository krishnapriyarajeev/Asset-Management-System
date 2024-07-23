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
import EmployeeLayout from "./layouts/employee.home.layout";
import RequestHistory from "./pages/requestHistory/requestHistory";
import Profile from "./pages/profile/page";

// TODO: get user data from localstorage
const getUserData = "Admin";

function App() {
  const router = createBrowserRouter([
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
      element: getUserData === "Admin" ? <HomeLayout /> : <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/asset",
      element: getUserData === "Admin" ? <HomeLayout /> : <EmployeeLayout />,
      children: [
        {
          path: "",
          element: <RequestHistory />,
        },
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

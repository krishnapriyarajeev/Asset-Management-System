import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layouts/home.layout";
import Category from "./pages/category/page";
import SubCategory from "./pages/subcategory/page";
import ModalList from "./pages/model/page";
import Request from "./pages/requests/requests";
import Login from "./pages/Login/Login";
import Form from "./components/Form/Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/new",
      element: <Form />,
    },
    {
      path: "/login",
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

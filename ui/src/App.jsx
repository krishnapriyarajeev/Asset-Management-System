import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layouts/home.layout";
import Category from "./pages/category/page";
import SubCategory from "./pages/subcategory/page";
import ModalList from "./pages/model/page";

function App() {
  const router = createBrowserRouter([
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/asset",
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
        },
        {
          path: "/employees",
        },
        {
          path: "/createEmployee",
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

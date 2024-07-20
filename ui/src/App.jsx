import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layouts/home.layout";
import Category from "./pages/category/page";
import SubCategory from "./pages/subcategory/page";
import ModalList from "./pages/modal/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/asset",
      element: <HomeLayout />,
      children: [
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "category/:categoryId",
          element: <SubCategory />,
        },
        {
          path: "category/:categoryId/:subCategoryId",
          element: <ModalList />,
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

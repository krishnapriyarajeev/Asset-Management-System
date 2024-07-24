import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "./employeeReducer";
import { departmentBaseApi, employeeBaseApi } from "../../api/employeeApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { requestBaseApi } from "../../api/requestApi";
import { categoryBaseApi } from "../../api/categoryApi";
import { subCategoryBaseApi } from "../../api/subCategoryApi";
import { assetBaseApi } from "../../api/assetApi";
import { countBaseApi } from "../../api/countApi";

const store = configureStore({
  reducer: {
    // employees: employeeReducer,
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer,
    [departmentBaseApi.reducerPath]: departmentBaseApi.reducer,
    [requestBaseApi.reducerPath]: requestBaseApi.reducer,
    [categoryBaseApi.reducerPath]: categoryBaseApi.reducer,
    [subCategoryBaseApi.reducerPath]: subCategoryBaseApi.reducer,
    [assetBaseApi.reducerPath]: assetBaseApi.reducer,
    [countBaseApi.reducerPath]: countBaseApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(employeeBaseApi.middleware)
      .concat(departmentBaseApi.middleware)
      .concat(requestBaseApi.middleware)
      .concat(categoryBaseApi.middleware)
      .concat(subCategoryBaseApi.middleware)
      .concat(assetBaseApi.middleware)
      .concat(countBaseApi.middleware)


});

setupListeners(store.dispatch);

export default store;
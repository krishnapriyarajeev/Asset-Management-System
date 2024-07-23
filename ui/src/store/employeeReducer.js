import { createAction, createReducer } from "@reduxjs/toolkit";

const changeFilter = createAction("CHANGE_FILTER");

const employeeReducer = createReducer((builder) => {
  builder.addCase(changeFilter, (state, action) => {
    state.filterStatusBy = action.payload;
  });
});

export { employeeReducer as default, changeFilter };

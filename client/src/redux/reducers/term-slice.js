import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: {
    id: "",
    name: "",
    prerequisite: [],
    coPrerequisite: [],
    unit: 0,
  },
  terms: [],
  isSuccessCreate: false,
  isSuccessModify: false,
  isSuccessGet: false,
  isSuccessDelete: false,
};

export const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    termDataUpdate: (state, action) => {
      state.term = { ...state.course, ...action.payload };
      return state;
    },
    termsDataUpdate: (state, action) => {
      state.terms = [...state.course, ...action.payload];
      return state;
    },
    successCreate: (state, action) => {
      state.isSuccessCreate = true;
      return state;
    },
    successModify: (state, action) => {
      state.isSuccessModify = true;
      return state;
    },
    successGet: (state, action) => {
      state.isSuccessGet = true;
      return state;
    },
    successDelete: (state, action) => {
      state.isSuccessDelete = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const termActions = termSlice.actions;
export const termReducer = termSlice.reducer;

import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { postApi } from "./PostsApi";

const initialState = { page: 1 };

const loadpage = createSlice({
  name: "loadPage",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
  },
});

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  loadpage: loadpage.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) =>
      getDefaultMidleware().concat(postApi.middleware),
  });
};

export const { setPage } = loadpage.actions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

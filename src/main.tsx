import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Menu } from "./pages/Menu/Menu";
import { InfoPost } from "./pages/InfoPostCard/InfoPostCard";
import { setupStore } from "./redux/store";
import { Provider } from "react-redux";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/posts/:id",
        element: <InfoPost />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

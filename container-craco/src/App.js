import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

export const App = () => {
  return <RouterProvider router={router} />;
};

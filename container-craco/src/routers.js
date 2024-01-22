import { createBrowserRouter } from "react-router-dom";
import { Suspender } from "./Suspender";

const ROUTES = [
  {
    name: "",
    path: "/",
    element: <div>home / timer</div>,
  },
  {
    name: "timer",
    path: "/timer",
    element: <Suspender />,
  },
];

export const router = createBrowserRouter(ROUTES);

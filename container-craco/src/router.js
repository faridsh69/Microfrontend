import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspender } from "./Suspender";
import { LinkButton } from "./LinkButton";

const ROUTES = [
  {
    path: "/",
    element: (
      <div>
        <LinkButton />
        <Outlet />
      </div>
    ),
    children: [
      {
        name: "timer",
        path: "timer/*",
        element: <Suspender />,
      },
    ],
  },
];

export const router = createBrowserRouter(ROUTES);

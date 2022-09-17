import * as React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { Home } from "./Home";
import AuthLayout from "./layouts/AuthLayout";
import OrderList from "./pages/OrdersList/OrderList";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";

export function Router() {
  let element = useRoutes([
    {
      path: "",
      element: (
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/service-detail/:id",
          element: <ServiceDetail />,
        },
        {
          path: "/orders-list",
          element: <OrderList />,
        },
      ],
    },
  ]);

  return element;
}

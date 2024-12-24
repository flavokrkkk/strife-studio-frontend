import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "@pages/errorPage";
import RootPage from "@pages/rootPage";
import { lazy } from "react";
import { ERouteNames } from "@/shared/utils";

const DashboardPage = lazy(() => import("@/pages/dashboardPage"));
const AuthPage = lazy(() => import("@pages/authPage/ui/authPage"));

const LoginPage = lazy(() => import("@pages/authPage/ui/loginPage"));
const RegisterPage = lazy(() => import("@pages/authPage/ui/registerPage"));

export const routes = createBrowserRouter([
  {
    path: ERouteNames.DEFAULT,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ERouteNames.EMPTY,
        element: <Navigate to={ERouteNames.DASHBOARD} replace />,
      },
      {
        path: ERouteNames.DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: ERouteNames.AUTH,
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ERouteNames.EMPTY,
        element: <Navigate to={ERouteNames.LOGIN} replace />,
      },
      {
        path: ERouteNames.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ERouteNames.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
]);

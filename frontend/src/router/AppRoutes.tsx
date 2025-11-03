import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() =>
  import("../pages/HomePage").then((module) => ({ default: module.HomePage }))
);

const LoginPage = lazy(() =>
  import("../pages/LoginPage").then((module) => ({ default: module.LoginPage }))
);

const RegisterPage = lazy(() =>
  import("../pages/RegisterPage").then((module) => ({ default: module.RegisterPage }))
);

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
];

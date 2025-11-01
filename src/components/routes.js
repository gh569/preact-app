import { Home } from "../pages/Home/index";
import About from "../pages/about";
import { lazy } from "preact-iso";

const routes = {
  "/": Home,
  "/about": About,
  "/test": lazy(() => import("../pages/test")),
};


export default routes;

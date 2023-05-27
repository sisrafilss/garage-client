import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import SelectService from "../pages/SelectService/SelectService";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RepairRequest from "../pages/ServiceRequest/RepairRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/select-service",
        element: <SelectService />,

      },
      {
        path: "/select-service/:serviceId",
        element: <RepairRequest />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

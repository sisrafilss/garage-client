import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import SelectService from "../pages/SelectService/SelectService";
import ServiceRequest from "../pages/ServiceRequest/ServiceRequest";
import ServiceDetail from "../pages/ServiceRequest/ServiceDetail/ServiceDetail";
import Schedule from "../pages/Schedule/Schedule";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LayoutAdminDashboard from "../Layout/LayoutAdminDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard/AdminDashboard";
import Blog from "../pages/AdminDashboard/Blog/Blog/Blog";
import Testimonial from "../pages/AdminDashboard/Testimonial/Testimonial/Testimonial";
import ServiceList from "../pages/AdminDashboard/Service/ServiceList";
import LayoutAdminDashboardService from "../Layout/LayoutAdminDashboardService";
import ServicePending from "../pages/AdminDashboard/Service/ServicePending";
import ServiceInProgress from "../pages/AdminDashboard/Service/ServiceInProgress";
import ServiceCompleted from "../pages/AdminDashboard/Service/ServiceCompleted";
import LayoutAdminDashboardDiagnostics from "../Layout/LayoutAdminDashboardDiagnostics";
import DiagnosticsList from "../pages/AdminDashboard/Diagnostics/DiagnosticsList";
import DiagnosticsPending from "../pages/AdminDashboard/Diagnostics/DiagnosticsPending";
import DiagnosticsInProgress from "../pages/AdminDashboard/Diagnostics/DiagnosticsInProgress";
import DiagnosticsCompleted from "../pages/AdminDashboard/Diagnostics/DiagnosticsCompleted";
import LayoutAdminDashboardRepair from "../Layout/LayoutAdminDashboardRepair";
import RepairList from "../pages/AdminDashboard/Repair/RepairList";
import RepairPending from "../pages/AdminDashboard/Repair/RepairPending";
import RepairInProgress from "../pages/AdminDashboard/Repair/RepairInProgress";
import RepairCompleted from "../pages/AdminDashboard/Repair/RepairCompleted";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "select-service",
        element: <SelectService />,
      },
      {
        path: "/select-service/repairs",
        element: <ServiceRequest />,
      },
      {
        path: "/select-service/repairs/:serviceId",
        element: <ServiceDetail />,
        loader: async () => {
          return fetch("/data/reparingList.json");
        },
      },
      {
        path: "/checkout/schedule",
        element: <Schedule />,
      },
      {
        path: "/checkout/confirm-order",
        element: <ConfirmOrder />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <LayoutAdminDashboard />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
        loader: async () => {
          return fetch("/data/adminDashboard/summary.json");
        },
      },
      {
        path: "service",
        element: <LayoutAdminDashboardService />,
        children: [
          {
            path: "",
            element: <ServiceList />,
            loader: async () => {
              return fetch("/data/adminDashboard/service/serviceList.json");
            },
          },
          {
            path: "pending",
            element: <ServicePending />,
            loader: async () => {
              return fetch("/data/adminDashboard/service/pending.json");
            },
          },
          {
            path: "in-progress",
            element: <ServiceInProgress />,
            loader: async () => {
              return fetch("/data/adminDashboard/service/inProgress.json");
            },
          },
          {
            path: "completed",
            element: <ServiceCompleted />,
            loader: async () => {
              return fetch("/data/adminDashboard/service/completed.json");
            },
          },
        ],
      },
      {
        path: "diagnostics",
        element: <LayoutAdminDashboardDiagnostics />,
        children: [
          {
            path: "",
            element: <DiagnosticsList />,
            loader: async () => {
              return fetch(
                "/data/adminDashboard/diagnostics/diagnosticsList.json"
              );
            },
          },
          {
            path: "pending",
            element: <DiagnosticsPending />,
            loader: async () => {
              return fetch("/data/adminDashboard/diagnostics/pending.json");
            },
          },
          {
            path: "in-progress",
            element: <DiagnosticsInProgress />,
            loader: async () => {
              return fetch("/data/adminDashboard/diagnostics/inProgress.json");
            },
          },
          {
            path: "completed",
            element: <DiagnosticsCompleted />,
            loader: async () => {
              return fetch("/data/adminDashboard/diagnostics/completed.json");
            },
          },
        ],
      },
      {
        path: "repair",
        element: <LayoutAdminDashboardRepair />,
        children: [
          {
            path: "",
            element: <RepairList />,
            loader: async () => {
              return fetch("/data/adminDashboard/repair/repairList.json");
            },
          },
          {
            path: "pending",
            element: <RepairPending />,
            loader: async () => {
              return fetch("/data/adminDashboard/repair/pending.json");
            },
          },
          {
            path: "in-progress",
            element: <RepairInProgress />,
            loader: async () => {
              return fetch("/data/adminDashboard/repair/inProgress.json");
            },
          },
          {
            path: "completed",
            element: <RepairCompleted />,
            loader: async () => {
              return fetch("/data/adminDashboard/repair/completed.json");
            },
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
    ],
  },
]);

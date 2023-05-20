import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

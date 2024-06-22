import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Services from "./Page/Services";
import Contactus from "./Page/Contactus";

function App() {
  const router = createBrowserRouter([
    { path: "/inance", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/service", element: <Services /> },
    { path: "/contact", element: <Contactus /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

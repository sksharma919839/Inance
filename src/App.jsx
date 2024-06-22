import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return <RouterProvider router={router} />;
}

export default App;

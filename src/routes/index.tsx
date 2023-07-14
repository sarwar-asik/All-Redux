import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../shared/NotFound";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path:"/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../shared/NotFound";
import Home from "../pages/Home";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import AddBook from "../components/AddBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/signup",
        element: <SignUp />,
      },
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/addBook",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default routes;

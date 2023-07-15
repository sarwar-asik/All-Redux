import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../shared/NotFound";
import Home from "../pages/Home";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import AddBook from "../components/AddBook";
import BookDetail from "../components/BookDetail";
import ALlBook from "../components/AllBook";

import UpdateBook from "../components/UpdateBook";
import PrivateRoutes from "./PrivateRoutes";

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
        element: <PrivateRoutes><AddBook/></PrivateRoutes>,
      },
      {
        path:"/allBook",
        element: 
          <ALlBook/>        
      },
      {
        path:"/bookDetails/:id",
        element: <BookDetail></BookDetail>
      },
      {
        path:"/bookUpdate/:id",
        element: <UpdateBook/>
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default routes;

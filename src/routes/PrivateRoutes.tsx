import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}


const PrivateRoutes = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const pathName = useLocation();

  if (isLoading) {
    <h2>Loading ......</h2>;
  }
  if (user?.email) {
    return children;
  }
  if (!user?.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathName }} />;
  }
};

export default PrivateRoutes;

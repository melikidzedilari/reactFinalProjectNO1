import { Navigate } from "react-router";

export const ProtectedRoute = ({ children, isUserAdmin }) => {
  if (!isUserAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

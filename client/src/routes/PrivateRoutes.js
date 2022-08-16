import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children }) => {
    if (!isLogged) {
      return <Navigate to="/homepage" replace/>;
    }
  
    return children;
  };

export default ProtectedRoute;
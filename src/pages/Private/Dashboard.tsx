import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import Home from "./Home/Home";

function Dashboard() {
  return (
    <>
    <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    <Route path={PrivateRoutes.HOME} element={<Home />} />
    </>  
  );
}

export default Dashboard;
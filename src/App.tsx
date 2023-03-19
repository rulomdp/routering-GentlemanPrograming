import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import Dashboard from "./pages/Private/Dashboard";
import {Login} from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
          <Route path="*" element={<>Not Found</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login/>} />
          <Route element={<AuthGuard/>}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Dashboard />} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

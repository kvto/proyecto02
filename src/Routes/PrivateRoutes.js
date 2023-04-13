import { Routes, Route } from "react-router-dom";
import Dashboard
 from "../Pages/Dashboard";
const PrivateRoutes = () => {
    return ( 
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    );
}
 
export default PrivateRoutes;
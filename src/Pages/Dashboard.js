import { useContext } from "react";
import { AuthContext } from "../Context/Auth";


const Dashboard = () => {
    const {auth, logout} = useContext(AuthContext);
    return (
        <>
        <h3>
            Token: {auth}
        </h3>
        </>
     );
}
 
export default Dashboard;
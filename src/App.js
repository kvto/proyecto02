import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { AuthProvider } from './Context/Auth';
function App() {
  return (
    <>
    <AuthProvider>
    <PublicRoutes />  
    <PrivateRoutes />
    </AuthProvider>
    </>
  );
}

export default App;

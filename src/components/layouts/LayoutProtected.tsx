import { useLocation, Navigate } from "react-router-dom";
import { getUserLocalStorage } from "../../services/AuthService/Auth";


export default function LayoutProtected({ children }: any) {
    const auth: any = getUserLocalStorage();
    const location = useLocation();
    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const hasToken = !!localStorage.getItem('token');
    if (hasToken) {
        return <Outlet/>
    }
    else {
        return <Navigate to='/login' />
    }
}
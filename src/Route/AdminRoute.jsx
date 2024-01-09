import { Navigate, Outlet } from "react-router-dom";

export const AdminRoutes = () => {
    const hasToken = !!localStorage.getItem('admin-token');
    if (hasToken) {
        return <Outlet/>
    }
    else {
        return <Navigate to='/admin-login' />
    }
}
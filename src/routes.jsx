import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RouteNotFound from "./pages/RouteNotFound";

const routes = [
    {
        path: '/',
        element: <Navigate to={'/dashboard'} />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <RouteNotFound />
    }
];

const AppRoutes = () => {
    const element = useRoutes(routes);
    return element;
}

export default AppRoutes;
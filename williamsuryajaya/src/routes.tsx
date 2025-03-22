import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
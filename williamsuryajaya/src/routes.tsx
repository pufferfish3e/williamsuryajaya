import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import StandardChartered from './pages/standardchartered/page';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        }, 
        {
            path: '/standardchartered',
            element: <StandardChartered />
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
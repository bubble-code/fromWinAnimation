import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../page/Home';
import { Configuration } from '../page/Configuration'
import { DashBoard } from '../page/DashBoard'
import { Contac } from '../page/Contac'
import { Animation } from '../page/Animation'
import { ErrorPage } from '../page/ErrorPage';


const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/config',
                element: <Configuration />
            },
            {
                path: '/dash',
                element: <DashBoard />
            },
            {
                path: 'contact',
                element: <Contac />
            },
            {
                path: '/anime',
                element: <Animation />
            }

        ]
    }
])

export default router
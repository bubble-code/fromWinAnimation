import MainLayout from "../layout/mainLayout"
import { Outlet } from "react-router-dom"

export const Home = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )
}

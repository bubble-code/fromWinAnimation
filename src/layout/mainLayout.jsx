import { useSelector } from "react-redux";
import { Navbar } from "../componets/Navbar";




const MainLayout = ({ children }) => {
    const theme = useSelector(state => state.theme.theme)
    return (
        <main className="pb-10 text-center min-h-screen">
            <Navbar />
            <div className={`bg-${theme}-800 py-10 px-10  flex justify-center align-middle `}>
                {children}
            </div>

        </main>
    )
}

export default MainLayout
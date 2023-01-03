import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../redux/feacture/theme"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)
    function toggleTheme() {
        const themes = theme === 'gray' ? 'white' : 'gray'
        dispatch(setTheme(themes))
    }

    return (
        <nav className='mb-8 flex justify-end bg-gradient-to-r from-black via-current to-blue-900 h-16 py-10 px-10'>
            <ul className='flex items-center gap-2 text-gray-300'>
                <li><Link to='/dash'>DashBoard</Link></li>
                <li><Link to='/config'>Configuration</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/anime'>Animation</Link></li>
                <li><button className="border-green-600" onClick={toggleTheme}>Change Theme</button></li>
            </ul>
        </nav>
    )
}

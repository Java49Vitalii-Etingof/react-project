import { NavLink } from "react-router-dom"

export const Layout: React.FC = () => {
    return <div>
        <nav>
            <ul className="navigator-list">
                <li className="navigator-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to="/customers">customers</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to="/orders">orders</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to="/products">products</NavLink>
                </li>
                
                

            </ul>
        </nav>
    </div>
}
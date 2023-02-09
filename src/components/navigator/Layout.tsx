import { NavLink, Outlet } from "react-router-dom"
import './navigators.css'
export const Layout: React.FC = () => {
    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "blue", color: "white"}
        }
        return res;
    }
    return <div>
        <nav>
            <ul className="navigator-list">
                <li className="navigator-item">
                    
                <NavLink style={({isActive}) => activeLink(isActive)} to="/">Home</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink style={({isActive}) => activeLink(isActive)} to="/customers">customers</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink style={({isActive}) => activeLink(isActive)} to="/orders">orders</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink style={({isActive}) => activeLink(isActive)} to="/products">products</NavLink>
                </li>
                
                

            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}
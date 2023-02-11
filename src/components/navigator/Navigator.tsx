import { NavLink, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../models/NavigatorProps";
import './navigators.css'

type NavProps = {
    navConfig: NavigatorProps;
}

export const Navigator: React.FC<NavProps> = (props) => {
    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "blue", color: "white"}
        }
        return res;
    }
    function getList(): JSX.Element[] {
        return props.navConfig.routeItems.map(item => {
            return <li className="navigator-item">
           <NavLink style={({isActive}) => activeLink(isActive)} to={item.routingPath}>{item.label}</NavLink>     
            </li>
        })
    }
    return <div>
        <nav>
            <ul className={props.navConfig.cssClassName}>
                {getList()}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}
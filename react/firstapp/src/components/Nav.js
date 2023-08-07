import { Link } from "react-router-dom";
function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to="/" className="nav-item" >{props.item1}</Link>
                </li>
                <li><Link to="/about-me" className="nav-item" >{props.item2}</Link></li>
                <li><Link to="/examples" className="nav-item" >{props.item3}</Link></li>
                <li><Link to="/contact" className="nav-item" >{props.item4}</Link></li>
                <li><Link to="/search" className="nav-item" >{props.item5}</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
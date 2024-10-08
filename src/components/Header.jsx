import { Link } from "react-router-dom";
import "../style.css";


const Header = ({cart, setCart}) => {

    return(
        <div className="menu">

            <div className="menu-items">
                 <Link to="/">Reactify</Link>
                 <Link to="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="/contact">Contact</Link>
                 <Link to="/cart">Cart</Link>
            </div>
                   <Link to="/cart">{cart}</Link>
        

        </div> 
    )
}

export default Header
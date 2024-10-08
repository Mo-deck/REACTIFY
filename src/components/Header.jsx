import "../style.css";

const Header = () => {

    return(
        <div className="menu">
            <a href="">Logo</a>
            <ul className="menu-items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
            <a href="">5</a>
        </div> 
    )
}

export default Header
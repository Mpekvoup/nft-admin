import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";
import { PRODUCTS, DASHBOARD, ORDERS, HELP } from "../utils/consts";

function SideBar () {
    return (
        <div className="sidebar">
            <Link to={DASHBOARD} className="logo">
                <img src={Logo} alt="Logo" />
                <span className="logo-text">NFT.</span>
            </Link>
            <nav className="sidebar-nav">
                <Link to={DASHBOARD} className="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={PRODUCTS} className="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={ORDERS} className="sidebar-nav__link">
                    Заказы
                </Link>
                <Link to={HELP} className="sidebar-nav__link">
                    Помощь
                </Link>
            </nav>
            <p className="sm-text">&copy;2025, NFT STORE. Все права защищены</p>
        </div>
    );
}

export default SideBar;
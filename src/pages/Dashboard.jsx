import HomeIcon from "../assets/images/menu/home.svg"
import CategoriesIcon from "../assets/images/menu/categories.svg"
import OrdersIcon from "../assets/images/menu/orders.svg"
import ProductsIcon from "../assets/images/menu/products.svg"

import { Link } from "react-router-dom"
import { PRODUCTS, DASHBOARD, ORDERS, HELP } from "../utils/consts"

function Dashboard() {
    return(
        <>
            <section className="block">
                <div className="container">
                    <h1 className="title">Админ панель</h1>
                    <div className="dashboard-list">
                        <Link to={DASHBOARD} className="dashboard-item bg-primary">
                            <img src={HomeIcon} alt="Home" />
                            <h3 className="dashboard-item__title">Главная</h3>
                        </Link>
                        <Link to={PRODUCTS} className="dashboard-item bg-warning">
                            <img src={CategoriesIcon} alt="Category" />
                            <h3 className="dashboard-item__title">Товары</h3>
                        </Link>
                        <Link to={ORDERS} className="dashboard-item bg-danger">
                            <img src={ProductsIcon} alt="Products" />
                            <h3 className="dashboard-item__title">Заказы</h3>
                        </Link>
                        <Link to={HELP} className="dashboard-item bg-success">
                            <img src={OrdersIcon} alt="Orders" />
                            <h3 className="dashboard-item__title">Помощь</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
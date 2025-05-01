import { Link } from "react-router-dom";
import ProductList from "../components/Products/ProductList";
import { CREATE_PRODUCT } from "../utils/consts";

function Products () {
    return (
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Товары</h1>
                    <Link to={CREATE_PRODUCT} className="btn bg-primary">Создать</Link>
                </div>
                <ProductList />
            </div>
        </section>
    );
}

export default Products;
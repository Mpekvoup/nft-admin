import { Link } from "react-router-dom";
import CategoryList from "./ProductList";
import { CREATE_PRODUCT } from "../../utils/consts";

function Categories () {
    return(
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Товары</h1>
                    <Link to={CREATE_PRODUCT} className="btn bg-primary">Создать</Link>
                </div>
                <CategoryList />
            </div>
        </section>

    );
}

export default Categories;
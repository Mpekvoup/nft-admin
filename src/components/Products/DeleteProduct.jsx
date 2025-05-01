import { Link } from "react-router-dom";
import ProductsBack from "./ProductsBack";
import { PRODUCTS } from "../../utils/consts";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { a } from "../../services/axiosinstance";
import { useNavigate } from "react-router-dom";

function DeleteProduct () {

    const {id} = useParams();
    const  navigate = useNavigate();
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/nfts/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Ошибка: ", error.message, error.response?.data);
            }
        }
        fetchProduct();
    }
    , [id]);

    async function handleDelete () {
        try {
            await a.delete(`/nfts/${id}`); 
            alert("Товар успешно удален!");
            navigate(PRODUCTS);
        } catch (error) {
            console.error("Ошибка: ", error);
        }
    }

    return (
        <section className="block">
            <div className="container">
                <ProductsBack />
                <h1 className="title">Вы действительно хотите удалить товар "{product.name}"?</h1>
                <p className="mb-5">
                    Это действие приведет к потере всех данных, связанных с этими товарами. Пожалуйста, подтвердите свое решение.
                </p>
                <form className="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" className="btn bg-danger">
                        Да
                    </button>
                    <Link to={PRODUCTS} className="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteProduct;
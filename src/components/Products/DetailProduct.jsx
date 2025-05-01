import ProductsBack from "./ProductsBack";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { a } from "../../services/axiosinstance";
function DetailProduct () {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/nfts/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Ошибка: ", error);
            }
        }
        fetchProduct();
    }, [id]);
    return (
        <section className="block">
            <div className="container">
                <ProductsBack />
                <h1 className="title">Детали товара</h1>
                <div className="product-detail">
                    <img src={product.image} alt="" className="product-img" />
                    <div className="product-detail__content">
                        <h2 className="product-detail__title">{product.name}</h2>
                        <p className="helptxt">Цена: {product.price} &#8376;</p>
                        <p className="helptxt">Описание: {product.description}</p>
                        <p className="helptxt">Категория: <span className="category-badge">{product.category}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailProduct;
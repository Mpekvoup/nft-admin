import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { a } from "../../services/axiosinstance";
import Loading from "../Loading";

function ProductList () {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect (() => {
        async function fetchProducts () {
            try {
                setIsloading(true);
                const res = await a.get('/nfts');
                setProducts(res.data);
            } catch (error) {
                console.error("Ощибка : ", error);
            } finally {
                setIsloading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product}/>
                        ))}
                    </tbody>
                </table>
            </>}
        </>
    );
}

export default ProductList;
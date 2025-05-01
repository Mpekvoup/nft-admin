import ProductsBack from "./ProductsBack";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { a } from "../../services/axiosinstance";
import {PRODUCTS} from "../../utils/consts";
import {Link} from "react-router-dom";
import { DELETE_PRODUCT, DETAIL_PRODUCT, UPDATE_PRODUCT } from "../../utils/consts";
function UpdateProduct () {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    useEffect (() => {
        async function fetchProduct () {
            try {
                const res = await a.get(`/nfts/${id}`);
                const product = res.data;
                setName(product.name || "");
                setPrice(product.price || "");
                setDescription(product.description || "");
                setImage(product.image  || "");
                setCategory(product.category || "");
            } catch (error) {
                console.error("Ошибка: ", error);
            }
        }
        fetchProduct();
    }, [id]);
    async function handleSubmit (event) {
        event.preventDefault();
        const updatedProduct = {
            name : name,
            price : price,
            description : description,
            image : image,
            category : category
        };
        try {
            await a.patch(`/nfts/${id}`, updatedProduct);
            alert("Товар успешно обновлен!");
            navigate(PRODUCTS);
        } catch (error) {
            console.error("Ошибка: ", error);
        }
    }

    return (
        <section className="block">
            <div className="container">
                <ProductsBack />
                <h1 className="title">Изменить товар</h1>
                <form className="form"onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Название товара</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name" 
                            type="text" 
                            placeholder="Введите товара" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Цена</label>
                        <input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            id="price" 
                            type="number" 
                            placeholder="Введите цену" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Описание</label>
                        <textarea 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description" 
                            placeholder="Введите описание" 
                            required 
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Фото</label>
                        <input 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            id="image" 
                            type="url" 
                            placeholder="Вставьте URL фото" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Категория</label>
                        <input 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            id="category" 
                            type="text" 
                            placeholder="Введите категорию" 
                            required 
                        />
                    </div>

                    <button className="btn bg-warning" type="submit">Изменить</button>
                </form>
            </div>
        </section>
    );
}

export default UpdateProduct;
import { a } from "../../services/axiosinstance";
import { PRODUCTS } from "../../utils/consts";
import ProductsBack from "./ProductsBack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const product = {
      name,
      price,
      description,
      image,
      category,
    };
    try {
      const res = await a.post("/nfts", product);
      alert("Товар успешно создан!");
      setName("");
      setPrice(0);
      setDescription("");
      setImage("");
      setCategory("");
      navigate(PRODUCTS);
      console.log(res.data);
    } catch (error) {
      console.error("Ошибка: ", error);
    }
  }
  return (
    <section className="block">
      <div className="container">
        <ProductsBack />
        <h1 className="title">Создать товар</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Название товара</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Введите название товара"
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
          <button className="btn bg-primary" type="submit">
            Создать
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateProduct;

import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getProd} from "../../store/user";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dispatch(getProd());
            setProducts(data);
        };
        fetchProducts();
    }, [dispatch]);
    return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 main-container">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg flex flex-col justify-around shadow-md p-4">
                    {product.images.map((image, index) => (
                        <img key={index} src={image} className="object-cover" alt="" />
                    ))}
                    <h2 className="text-lg font-bold text-center">{product.title}</h2>
                    <p className="text-gray-500 text-center">{product.description}</p>
                    <div className="flex justify-between">
                        <span className="font-light text-lg line-through">{product.price}</span>
                        <span className="font-bold text-lg">{product.special_price}</span>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
            <div>
                <h2>Cart:</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Shop;

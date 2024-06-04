"use client";

import axios from 'axios';
import {useEffect, useState} from "react";
import {Product} from "@/app/model/product";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await axios.get('http://localhost:8080/api/products');
                const response = await axios.get('https://grease.servington.net/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <a key={product.id} href={product.url} target="_blank" className="shadow-md rounded-lg p-4 bg-white text-center hover:scale-105 transition-all">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain rounded-t-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">#{index + 1} {product.name}</h2>
                        <div className="flex justify-center items-center text-gray-700 mb-2">
                            <div className="flex flex-col pr-2 items-center border-r-2 border-gray-300">
                                <span className="text-sm font-medium">Protein</span>
                                <p>{product.protein}g</p>
                            </div>
                            <div className="flex flex-col items-center pl-2">
                                <span className="text-sm font-medium">Kalorien</span>
                                <p>{product.kcal}kcal</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Products;
import React, { useState } from 'react';
import logoImg from './images/logoimg.png';
import App from './App';

//this is the header component
function Header ({image, otsikkotxt}) {
    return (
        <header className='header'>
                <img src={image} className='headerImage'/>
                <h1 className='headerTitle'>{otsikkotxt}</h1>
        </header>
    );
    
};

function ProductForm ({onProductChange}) {
    //arrays for products and prices
    const productNames = [
        'Asus GeForce 3090', 
        'Intel Core i7-14700k', 
        'AMD Ryzen 7', 
        'AMD Ryzen 9'
    ];
    const productPrices = [
        '200',
        '150', 
        '300', 
        '120'
    ];

    //state of selected product and quantity
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const productChange = (event) => {
        const productIndex = Number(event.target.value);
        setSelectedProduct(productIndex);
        onProductChange(productNames[productIndex], productPrices[productIndex], quantity);
    };
    //Increasung quantity
    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onProductChange(productNames[selectedProduct], productPrices[selectedProduct], newQuantity);
    };
    //?Decrease quantity?
    const decreaseQuantity = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onProductChange(productNames[selectedProduct], productPrices[selectedProduct], newQuantity);
        }
    };



        return (
        <div className='container'>
            <Header image={logoImg} otsikkotxt='Welcome to the product page!'/>
            </div>
)}

export default App;
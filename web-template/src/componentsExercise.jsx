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
        onProductChange(
            productNames[productIndex], 
            productPrices[productIndex], 
            quantity
        );
    };
    //Increasung quantity
    const incQuantity = () => {
        const realQuantity = quantity + 1;
        setQuantity(
            realQuantity
        );
        onProductChange(
            productNames[selectedProduct], 
            productPrices[selectedProduct], 
            realQuantity
        );
    };
    //?Decrease quantity?
    const decQuantity = () => {
        if (quantity > 0) {//not belowe zero
            const realQuantity = quantity - 1;
            setQuantity(
                realQuantity
            );
            onProductChange(
                productNames[selectedProduct], 
                productPrices[selectedProduct], 
                realQuantity
            );
        }
    };
    return (
        <div className='product-form'>
            <h2>Select product</h2>
            <label>Product: </label>

            <select value={selectedProduct} onChange={productChange}>
                {productNames.map((product, p) => (
                <option 
                    key={p} 
                    value={p}> 
                    {product} -
                    {productPrices[p]}+ €
                </option>
            ))} 
            </select>
            <div>
                <button onClick={decQuantity}>
                    -
                </button>

                <span>
                    Quantity: {quantity} 
                </span>
                
                <button onClick={incQuantity}>
                    +
                </button>
            </div>
            
        </div>
    );
};

function OrderInfo ({productNames, productPrices, quantity}) {
    //calculate total price of selected products
    const realPrice = productPrices * quantity;
    return (
        <div>
            <h2>Order info</h2>
            <table className='order-info'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productNames}</td>
                        <td>{quantity}</td>
                        <td>{realPrice}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

function CompExercise () {
    const [order, setOrder] = useState ({
        //orderdetails
        productNames: '',
        productPrices: 0,
        quantity: 0,
    });
    const handleProductChange = (
        productNames, 
        productPrices, 
        quantity
        ) => {
        setOrder({
            productNames,
            productPrices,
            quantity,
        });
    };
    return (
        <div className='container'>
            <Header image={logoImg} otsikkotxt='Welcome to the product page!'/>
            <ProductForm onProductChange={handleProductChange}/>
            <OrderInfo
                productNames={order.productNames}
                productPrices={order.productPrices}
                quantity={order.quantity}
            />
        </div>
    );
};


export default CompExercise;
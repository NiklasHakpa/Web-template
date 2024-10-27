import React, { useState } from 'react';
import logoImg from './images/logoimg.png';


// Header component
function TitleBar({ logo, titleText }) {
    return (
        <header className="header-section">
            <img src={logo} className="logo-image" alt="Logo" />
            <h1 className="header-text">{titleText}</h1>
        </header>
    );
}

// Product selection and quantity management component
function ProductSelector({ onProductUpdate }) {
    // Product options
    const items = [
        { name: 'Asus GeForce 3090', price: 200 },
        { name: 'Intel Core i7-14700k', price: 150 },
        { name: 'AMD Ryzen 7', price: 300 },
        { name: 'AMD Ryzen 9', price: 120 }
    ];

    // Local state for selected product and quantity
    const [selectedItem, setSelectedItem] = useState(0);
    const [count, setCount] = useState(0);

    const handleItemChange = (event) => {
        const index = Number(event.target.value);
        setSelectedItem(index);
        onProductUpdate(items[index].name, items[index].price, count);
    };

    const increaseCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        onProductUpdate(items[selectedItem].name, items[selectedItem].price, newCount);
    };

    const decreaseCount = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            onProductUpdate(items[selectedItem].name, items[selectedItem].price, newCount);
        }
    };

    return (
        <div className="product-selection">
            <h2>Choose a Product</h2>
            <label>Product: </label>
            <select value={selectedItem} onChange={handleItemChange}>
                {items.map((item, index) => (
                    <option key={index} value={index}>
                        {item.name} - {item.price} €
                    </option>
                ))}
            </select>
            <div className="quantity-controls">
                <button onClick={decreaseCount}>-</button>
                <span>Quantity: {count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    );
}

// Order summary component to display selected items
function OrderSummary({ itemName, itemPrice, count }) {
    const totalPrice = itemPrice * count;
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <table className="order-details">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{itemName}</td>
                        <td>{count}</td>
                        <td>{totalPrice} €</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// Main component to manage and display product order
function ProductOrderPage() {
    const [order, setOrder] = useState({
        itemName: '',
        itemPrice: 0,
        count: 0,
    });

    const handleProductUpdate = (itemName, itemPrice, count) => {
        setOrder({ itemName, itemPrice, count });
    };

    return (
        <div className="order-page">
            <TitleBar logo={logoImg} titleText="Welcome to Our Store!" />
            <ProductSelector onProductUpdate={handleProductUpdate} />
            <OrderSummary
                itemName={order.itemName}
                itemPrice={order.itemPrice}
                count={order.count}
            />
        </div>
    );
}

export default ProductOrderPage;
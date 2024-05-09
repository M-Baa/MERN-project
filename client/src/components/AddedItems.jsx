import React from 'react';
import './AddedItems.css';

function AddedItems(props) {
    const {cartItems} = props;

    return (
        <div className='cherif'>
        <div className="added-items-container">
            <h2 className="added-items-heading">Cart Items</h2>
            <hr />
            <ul className="added-items-list">
                {cartItems.map((item, index) => (
                    <li className="added-item" key={index}>
                        <span className="added-item-name">{item.name}</span> - Quantity: <span className="added-item-quantity">{item.quantity}</span>
                    </li>
                ))}
            </ul>
            <button>payment </button>
        </div>
        </div>
    );
}

export default AddedItems;

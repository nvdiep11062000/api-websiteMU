import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from '../../redux/cartSlice';
import { ImBin } from 'react-icons/im';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.itemsList);
    const dispatch = useDispatch();
    let total = 0;
    const itemLists = useSelector((state) => state.cart.itemsList);
    itemLists.forEach((item) => {
        total = total + item.totalPrice;
    });

    const removeItem = (id) => {
        dispatch(cartAction.removeFromCart(id));
    };

    return (
        <>
            <div className="cart">
                <div className="cart-header">
                    <h3>Image</h3>
                    <h3>Name</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Count</h3>
                    <h3>Delete</h3>
                </div>
                <div className="cart-product">
                    {cartItems.map((item) => (
                        <>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="name">
                                <p>{item.name}</p>
                            </div>
                            <div className="price">
                                <p>£ {item.price}</p>
                            </div>
                            <div className="quantity">
                                <p>{item.quantity}</p>
                            </div>
                            <div className="totalPrice">
                                <p>£ {item.totalPrice}</p>
                            </div>
                            <div className="delete" onClick={() => removeItem(item.id)}>
                                <ImBin />
                            </div>
                        </>
                    ))}
                </div>
                <div className="total-money">
                    <h3>Total Money : £ {total}</h3>
                </div>
            </div>
        </>
    );
};

export default Cart;

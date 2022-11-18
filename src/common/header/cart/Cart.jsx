import React from "react";

const Cart = ( {cartItem, addToCart} ) => {

    
    return (
        <div>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 &&  <h1 className="no-items product">No items are added in cart.</h1>}
                       
                       {cartItem.map((item) => {
                        const productQty = item.price * item.qty

                        return (
                            <div className="cart-list product d_flex" key={item.id}>
                                <div className="img">
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                        {item.price}.00 * {item.qty}
                                        <span>{productQty}.00</span>
                                    </h4>
                                </div>
                                <div className="cart-items-function">
                                    <div className="removeCart"> 
                                        <button className="removeCart">
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                       })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;
import React from 'react';
import Annts from '../components/announcements/Annts';
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/flashDeals';
import Home from '../components/mainpage/Home';
import NewArrivals from '../components/newarrivals/newArrivals';
import Shop from '../components/shop/Shop';
import TopCate from '../components/top/TopCate';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
    return (
        <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annts />
        <Wrapper />
        
        </>
    )
}

export default Pages;
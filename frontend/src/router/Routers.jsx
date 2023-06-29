import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import OldTrafford from '../pages/OldTrafford/OldTrafford';
import Contact from '../pages/Contact/Contact';
import Players from '../pages/Players/Players';
import PlayerDetails from '../pages/PlayerDetails/PlayerDetails';
import ScrollToTop from '../scrollToTop';
import Shop from '../pages/Shop/Shop';
import ShopDetail from '../pages/ShopDetail/ShopDetail';
import Cart from '../pages/Cart/Cart';
const Routers = ({ dataPlayer, product }) => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/player" element={<Players dataPlayer={dataPlayer} />} />
                <Route path="/player/:id" element={<PlayerDetails dataPlayer={dataPlayer} />} />
                <Route path="/oldtrafford" element={<OldTrafford />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ShopDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default Routers;

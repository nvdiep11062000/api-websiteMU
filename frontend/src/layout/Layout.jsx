import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Home from '../pages/Home/Home';
import Routers from '../router/Routers';
import { useState, useEffect } from 'react';
const Layout = () => {
    const [dataPlayer, setDataPlayer] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:2000/player')
            .then((res) => res.json())
            .then((data) => setDataPlayer(Object.values(data)));
    }, []);

    return (
        <div>
            <Header />

            <Routers dataPlayer={dataPlayer} />

            <Footer />
        </div>
    );
};

export default Layout;

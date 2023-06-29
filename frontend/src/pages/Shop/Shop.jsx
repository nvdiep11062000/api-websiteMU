import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Shop = ({}) => {
    const [dataProduct, setDataProduct] = useState([]);
    const [items, setItems] = useState(9);
    const [selectTabs, setSelectTabs] = useState('all');
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:2000/product')
            .then((res) => res.json())
            .then((data) => {
                setDataProduct(data);
                setAllData(data);
            });
    }, []);

    const loadMoreHandle = () => {
        setItems((prev) => prev + 6);
    };

    useEffect(() => {
        if (selectTabs === 'all') {
            setAllData(dataProduct);
        }
        if (selectTabs === 'home') {
            const filter = dataProduct.filter((item) => item.kitType === 'Home');
            setAllData(filter);
        }
        if (selectTabs === 'away') {
            const filter = dataProduct.filter((item) => item.kitType === 'Away');
            setAllData(filter);
        }
        if (selectTabs === 'third') {
            const filter = dataProduct.filter((item) => item.kitType === 'Third');
            setAllData(filter);
        }
        if (selectTabs === 'goalkeeper') {
            const filter = dataProduct.filter((item) => item.kitType === 'Goalkeeper');
            setAllData(filter);
        }
        if (selectTabs === 'hot new arrivals') {
            const filter = dataProduct.filter((item) => item.category === 'hot new arrivals');
            setAllData(filter);
        }
        if (selectTabs === 'shirt') {
            const filter = dataProduct.filter((item) => item.category === 'Shirt');
            setAllData(filter);
        }
        if (selectTabs === 'shirt retro') {
            const filter = dataProduct.filter((item) => item.category === 'Shirt Retro');
            setAllData(filter);
        }
        if (selectTabs === 'shirt hoodie') {
            const filter = dataProduct.filter((item) => item.category === 'Shirt Hoodie');
            setAllData(filter);
        }
        if (selectTabs === 'scarves') {
            const filter = dataProduct.filter((item) => item.category === 'Scarves');
            setAllData(filter);
        }
        if (selectTabs === 'games') {
            const filter = dataProduct.filter((item) => item.category === 'Game');
            setAllData(filter);
        }
    }, [selectTabs]);

    const slice = allData.slice(0, items);

    return (
        <div className="shop">
            <div className="banner-shop"></div>
            <div className="content-shop">
                <div className="shop-filter">
                    <div className="kit-type">
                        <h3>Kit Type</h3>
                        <div className="option">
                            <span
                                onClick={() => {
                                    setSelectTabs('all');
                                }}
                            >
                                All
                            </span>
                            <span
                                onClick={() => {
                                    setSelectTabs('home');
                                }}
                            >
                                Home
                            </span>
                            <span
                                onClick={() => {
                                    setSelectTabs('away');
                                }}
                            >
                                Away
                            </span>
                            <span
                                onClick={() => {
                                    setSelectTabs('third');
                                }}
                            >
                                Third
                            </span>
                            <span
                                onClick={() => {
                                    setSelectTabs('goalkeeper');
                                }}
                            >
                                Goalkeeper
                            </span>
                        </div>
                    </div>

                    <div className="category">
                        <h3>Category</h3>
                        <span
                            onClick={() => {
                                setSelectTabs('shirt hoodie');
                            }}
                        >
                            Hoodie & Sweatshirts
                        </span>
                        <span
                            onClick={() => {
                                setSelectTabs('shirt');
                            }}
                        >
                            Shirt
                        </span>
                        <span
                            onClick={() => {
                                setSelectTabs('shirt retro');
                            }}
                        >
                            Retro
                        </span>
                        <span
                            onClick={() => {
                                setSelectTabs('games');
                            }}
                        >
                            Toys & Games
                        </span>
                        <span
                            onClick={() => {
                                setSelectTabs('scarves');
                            }}
                        >
                            Scarves
                        </span>
                    </div>
                    <div className="popular-collection">
                        <h3>Popular Collection</h3>
                        <span
                            onClick={() => {
                                setSelectTabs('hot new arrivals');
                            }}
                        >
                            Hot New Arrivals
                        </span>
                    </div>
                </div>
                <div className="shop-items">
                    {slice.map((item, index) => (
                        <Link to={`/product/${item._id}`}>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="card-content">
                                    <h3>{item.name}</h3>
                                    <span>Price : {item.price}$</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="button-more">
                {items < dataProduct.length && dataProduct.length > 9 && <button onClick={loadMoreHandle}>More</button>}
            </div>
        </div>
    );
};

export default Shop;

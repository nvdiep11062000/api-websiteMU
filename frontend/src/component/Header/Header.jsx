import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { MdLanguage, MdSearch } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Header = () => {
    const navbarLink = [
        {
            display: 'Home',
            path: '/home',
        },
        {
            display: 'Player',
            path: '/player',
        },
        {
            display: 'Shop',
            path: '/shop',
        },
        {
            display: 'Tickets',
            path: '/ticket',
        },
        {
            display: 'MUTV',
            path: '/mutv',
        },
        {
            display: 'Old Trafford',
            path: '/oldtrafford',
        },
        {
            display: 'Contact',
            path: '/contact',
        },
    ];

    const quantity = useSelector((state) => state.cart.totalQuantity);
    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__navbar">
                    {navbarLink.map((item, index) => (
                        <Link key={index} to={item.path}>
                            {item.display}
                        </Link>
                    ))}
                </div>
                <div className="header__right">
                    <div className="language">
                        <MdLanguage />
                        <span>EN</span>
                    </div>
                    <FaUserCircle />
                    <div className="header-cart">
                        <Link to="/cart">
                            <FiShoppingCart />
                            <span>{quantity}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

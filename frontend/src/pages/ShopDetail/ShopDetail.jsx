import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/cartSlice';

const ShopDetail = () => {
    const [detailProduct, setDetailProduct] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [qty, setQty] = useState();
    const [active, setActive] = useState({
        activeObject: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    });
    const dataSize = [
        {
            size: 'S',
            for: 'S-size',
        },
        {
            size: 'M',
            for: 'M-size',
        },
        {
            size: 'L',
            for: 'L-size',
        },
        {
            size: 'XL',
            for: 'XL-size',
        },
        {
            size: 'XXL',
            for: 'XXL-size',
        },
    ];

    const dispatch = useDispatch();

    const addToCart = (detailProduct) => {
        dispatch(cartAction.addToCart(detailProduct));
    };

    const toggleActive = (index) => {
        setActive({ ...active, activeObject: active.objects[index] });
    };

    function toggleActiveStyle(index) {
        if (active.objects[index] === active.activeObject) {
            return 'active';
        } else {
            return '';
        }
    }

    const plusProduct = () => {
        setQuantity((prev) => prev + 1);
    };
    const minusProduct = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1);
        }
    };

    const param = useParams();

    //fetch data
    useEffect(() => {
        const getProduct = async () => {
            const result = await fetch(`http://localhost:2000/product/${param.id}`);
            const data = await result.json();
            console.log(data);
            setDetailProduct(data);
        };
        getProduct();
    }, []);
    return (
        <div className="shop-details">
            <Link to={'/shop'}>
                <BiArrowBack />
                <span>Back to shop</span>
            </Link>

            <div className="content">
                <div className="content-left">
                    <img src={detailProduct.image} alt="" />
                </div>
                <div className="content-right">
                    <h1>{detailProduct.name}</h1>
                    <p>Price : £{detailProduct.price}</p>
                    <div className="size">
                        <p>Size : </p>
                        {dataSize.map((item, index) => (
                            <span className={toggleActiveStyle(index)} onClick={() => toggleActive(index)}>
                                {item.size}
                            </span>
                        ))}
                    </div>
                    <div className="quantity">
                        <p>Quantity : </p>
                        <AiOutlineMinus onClick={minusProduct} />
                        <span>{quantity}</span>
                        <AiOutlinePlus onClick={plusProduct} />
                    </div>
                    <div className="add-to-bag">
                        <button onClick={() => addToCart(detailProduct)}>add to bag</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail;

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart,faHeart} from '@fortawesome/free-solid-svg-icons'
import {addToCart} from '../Slices/Cartslice'
import {addCost} from '../Slices/Costslice'
import {addToWishList} from '../Slices/Wishslice'
import {useDispatch} from 'react-redux'

function Product1() {
    const dispatch = useDispatch()

    const dispatchActionObject = (productDetails) => {
        let actionObj = addToCart(productDetails.qty)
        dispatch(actionObj);
        let actionObj2 = addCost(productDetails.cost);
        dispatch(actionObj2);
    }
    const WishList = (productDetails) =>{
        let actionObj3 = addToWishList(productDetails.qty);
        console.log(actionObj3);
        dispatch(actionObj3);
    }

    return <div className="container mb-2">
        <div className="card mt-3 mb-3 container">
            <img className="w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/I/51R4FJdgbMS._AC_UL675_SR675,480_.jpg" alt="" />
            <h5>Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Black)</h5>
            <p className="price-tag">₹1799</p>
            <div className="row col-12 mb-3 mx-auto">
                <button className="btn btn-secondary addtocart col-9 me-2" onClick={()=>dispatchActionObject({qty:1,cost:1799})}><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
                <button className="btn btn-danger col-2 " onClick={()=>WishList({qty:1,cost:1799})}><FontAwesomeIcon icon={faHeart}/></button>
            </div>
        </div>
    </div>;
}

export default Product1;

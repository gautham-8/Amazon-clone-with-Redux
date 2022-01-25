import React from 'react';
// import {useForm} from 'react-hook-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAmazon} from '@fortawesome/free-brands-svg-icons'
import {faSearch,faShoppingCart,faRupeeSign, faHeart} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'

function Navbar() {
  let cartnumber = useSelector(state => state.cart)
  let cartCost = useSelector(state => state.cost)
  let wishlist = useSelector(state => state.wish)
  return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand amazon-font" href="#">amazon.in <FontAwesomeIcon icon={faAmazon} size='lg'/></a>
        <form className="d-flex mb-2">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-warning" type="submit"><FontAwesomeIcon icon = {faSearch} /></button>
        </form>
        <div>
          <button className="btn btn-warning me-2" type="submit"><FontAwesomeIcon icon = {faShoppingCart} /></button>
          <p className="text-warning me-2" style={{display: "inline"}}>Items {cartnumber}</p>
          <button className="btn btn-warning me-2" type="submit"><FontAwesomeIcon icon = {faRupeeSign} /></button>
          <p className="text-warning me-2" style={{display: "inline"}}>Cost {cartCost}</p>
          <button className="btn btn-warning me-2" type="submit"><FontAwesomeIcon icon = {faHeart} /></button>
          <p className="text-warning me-2" style={{display: "inline"}}>Wishlist {wishlist}</p>
        </div>
      </div>
    </nav>
  </div>;
}

export default Navbar;

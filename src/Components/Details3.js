import React from 'react';

function Details1() {
    return <div className="container">
        <div className="card mt-3 mb-3">
            <h5 className="container mt-1">Shop by category for you</h5>
            <div className="row pl-2 px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY232_CB431401553_.jpg" alt="" />
                    <p className='under-image'>Fresh</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY232_CB431401553_.jpg" alt="" />
                    <p className='under-image'>Mobiles</p>
                </div>
            </div>
            <div className="row pl-2 px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY232_CB431401553_.jpg" alt="" />
                    <p className='under-image'>Fashion</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY232_CB431401553_.jpg" alt="" />
                    <p className='under-image'>Electronics</p>
                </div>
            </div>
            <a className="m-2 link-color" href="#">See more</a>
        </div>
    </div>;
}

export default Details1;

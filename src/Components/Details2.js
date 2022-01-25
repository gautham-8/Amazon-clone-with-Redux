import React from 'react';

function Details1() {
    return <div className="container">
        <div className="card mt-3 mb-3">
            <h5 className="container mt-1">Revamp your home in style</h5>
            <div className="row pl-2 px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_High._SY232_CB670263840_.jpg" alt="" />
                    <p className='under-image'>Sofas</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_High._SY232_CB670263840_.jpg" alt="" />
                    <p className='under-image'>Show-pieces</p>
                </div>
            </div>
            <div className="row pl-2 px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_High._SY232_CB670263840_.jpg" alt="" />
                    <p className='under-image'>Drawers</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_High._SY232_CB670263840_.jpg" alt="" />
                    <p className='under-image'>Lamps</p>
                </div>
            </div>
            <a className="m-2 link-color" href="#">Explore all</a>
        </div>
    </div>;
}

export default Details1;

import React from 'react';

function Details1() {
    return <div className="container">
        <div className="card mt-3 mb-3">
            <h5 className="container mt-1">Top picks for your home</h5>
            <div className="row pl-2 px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt="" />
                    <p className='under-image'>ACs</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" alt="" />
                    <p className='under-image'>Refridgerators</p>
                </div>
            </div>
            <div className="row px-2">
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" alt="" />
                    <p className='under-image'>Microwave Ovens</p>
                </div>
                <div className="col-6">
                    <img className="w-100 p-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" alt="" />
                    <p className='under-image'>Washing Machine</p>
                </div>
            </div>
            <a className="m-2 link-color" href="#">See more</a>
        </div>
    </div>;
}

export default Details1;

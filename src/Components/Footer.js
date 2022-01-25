import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAmazon} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <footer className="text-white footer">
        <div className="row row-cols-md-4 row-cols-1 mx-auto text-center">
            <div className="mt-3 col">
                <i><h5>Get to know us</h5></i>
                About Us <br/>
                Careers <br/>
                Press Releases <br/>
                Amazon Cares <br/>
                Gift a smile <br/>
            </div>
            <div className="mt-3 col">
                <i><h5>Connect with us</h5></i>
                Facebook <br/>
                Twitter <br/>
                Instagram
            </div>
            <div className="mt-3 col">
                <i><h5>Make money with us</h5></i>
                Sell on Amazon <br/>
                Sell under Amazon Accelerator<br/>
                Amazon Global Selling<br/>
                Become an Affiliate<br/>
                Fulfilment by Amazon<br/>
                Advertise Your Products<br/>
                Amazon Pay on Merchants<br/>
            </div>
            <div className="mt-3 col">
                <i><h5>Let us help you</h5></i>
                COVID-19 and Amazon<br/>
                Your Account<br/>
                Returns Centre<br/>
                100% Purchase Protection<br/>
                Amazon App Download<br/>
                Amazon Assistant Download<br/>
                Help<br/>
            </div>
        </div>
        <br/>
        <div className='text-center'>
            <FontAwesomeIcon icon={faAmazon} size='6x'/> <br/>
            © 1996-2022, Amazon.com, Inc. or its affiliate
        </div>
        </footer>)
}

export default Footer;

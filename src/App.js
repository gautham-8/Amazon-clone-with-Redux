import React from 'react';
import Navbar from './Components/Navbar'
import Carouselslide from './Components/Carouselslide'
import Details1 from './Components/Details1'
import Details2 from './Components/Details2'
import Details3 from './Components/Details3'
import Details4 from './Components/Details4'
import Product1 from './Components/Product1'
import Product2 from './Components/Product2'
import Product3 from './Components/Product3'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return <div>
    <Navbar className="fixed"/>
    <Carouselslide />
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mx-auto">
      <div className="col">
        <Details1 />
      </div>
      <div className="col">
        <Details2 />
      </div> 
      <div className="col">
        <Details3 />
      </div> 
      <div className="col">
        <Details4 />
      </div>
    </div>
    <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-1 mx-auto">
      <div className="col">
        <Product1 />
      </div>
      <div className="col">
        <Product2 />
      </div>
      <div className="col">
        <Product3 />
      </div>
    </div>
    <Footer />
  </div>;
}

export default App;

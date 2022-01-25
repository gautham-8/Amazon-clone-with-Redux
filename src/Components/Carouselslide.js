import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
	<div>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61yYX4j5gtL._SX3000_.jpg"
			alt="Image One"
		/>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
            src="https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg"
			alt="Image Two"
		/>
		</Carousel.Item>
        <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
            src="https://m.media-amazon.com/images/I/817akQ-Qq+L._SX3000_.jpg"
			alt="Image Two"
		/>
		</Carousel.Item>
	</Carousel>
	</div>
);
}

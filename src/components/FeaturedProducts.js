import React from 'react';
import { Link } from 'react-router-dom';

import dress1Image from '../assets/dress1.jpg';
import dress2Image from '../assets/dress2.jpg';
import dress4Image from '../assets/dress4.jpg';

import men1Image from '../assets/men1.jpg';
import men2Image from '../assets/men2.jpg';
import men3Image from '../assets/men3.jpg';

function ProductCard(props) {
    return (
        <div className="product-card">
            

            <Link to="/shop">
                <img src={props.imgSrc} alt={props.title} />
            </Link>
            
            <h4>{props.title}</h4>
            <p className="price">{props.price}</p>
        </div>
    );
}


function FeaturedProducts() {
    return (
        <>
            
            <section className="featured-products">
                <div className="container">
                    <h3 className="section-title">Shop Women's</h3>
                    <div className="product-grid">
                         <ProductCard 
                            imgSrc={dress1Image}
                            title="Gothic Corset Top"
                            price="Starting from ₹899"
                        />
                        <ProductCard 
                            imgSrc={dress2Image}
                            title="Brown Ring Halter Top"
                            price="Starting from ₹799"
                        />
                         <ProductCard 
                            imgSrc={dress4Image}
                            title="Purple Graphic Top"
                            price="Starting from ₹699"
                        />
                    </div>
                </div>
            </section>

            
            <section className="featured-products">
                <div className="container">
                    <h3 className="section-title">Shop Men's</h3>
                    <div className="product-grid">
                         <ProductCard 
                            imgSrc={men1Image}
                            title="Graphic Hoodie"
                            price="Starting from ₹999"
                        />
                        <ProductCard 
                            imgSrc={men2Image}
                            title="Vintage Leather Jacket"
                            price="Starting from ₹1199"
                        />
                         <ProductCard 
                            imgSrc={men3Image}
                            title="Distressed Wide Leg Jeans"
                            price="Starting from ₹1999"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedProducts;
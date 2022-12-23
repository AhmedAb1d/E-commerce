import './ProductsCatalog.css';
import React, { Component } from 'react'
import Slider from "react-slick";
import Sliderer from "./Sliderer";

/*class="slider-button" id="next-button" */
function LeftNavButton(props) {
    const {className, onClick} = props
    return (
        <div
            className="slider-button-left"
            onClick={onClick}
        >
            &lt;
        </div>
    );
}

function RightNavButton(props) {
    const {className, onClick} = props
    return (
        <div
            className="slider-button-right"
            onClick={onClick}
        >
            &gt;
        </div>
    );
}

class ProductsCatalog extends Component {

    constructor(){
        super();
        this.settings = {
        nextArrow: <RightNavButton />,
        prevArrow: <LeftNavButton />,
        rows: 2,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding : 0
        }
    }
    

    clickHandler(){

    }

    

  render() {
    return (
        
        <div>
            <nav class="navbar">
            <div class="logo">Logo</div>
        
            <div class="nav-links">
                <a class="nav-link" href="/">Hot</a>
                <a class="nav-link" href="/contact">Man</a>
                <a class="nav-link" href="/products">Woman</a>
            </div>
        
            <div class="search-area">
                <input class="search-input" type="text" placeholder="Search..."/>
                <button class="search-button">Search</button>
            </div>
            <FontAwesomeIcon icon="fa-regular fa-basket-shopping-simple" />
            <FontAwesomeIcon icon="fa-solid fa-user" />
            </nav>
            <div class="container styling">
                <Slider {...this.settings}>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-card">
                                        <img src="product1.jpg" alt="Product 1"/>
                                    </div>
                                    <div class="under-card">
                                        <div class="description-product-catalog">Description of product 1</div>
                                        <div class="price-product-catalog">350</div>
                                    </div>
                                </div>


                                    
                                    
                </Slider>
            </div>
        
        </div>
        
    )
  }
}

export default ProductsCatalog
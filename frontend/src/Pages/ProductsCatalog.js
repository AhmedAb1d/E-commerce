import './ProductsCatalog.css';
import React, { Component } from 'react'
import Slider from "react-slick";
import Sliderer from "./Sliderer";
import axios from "axios"

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

    constructor(props) {
        super(props);
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
        this.state = {
            products: [],
            style : {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3200/products')
        .then(response => {
            console.log("response from axios"+response.status)
            this.setState({products: response.data})
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    

    clickHandler(){

    }

    

  render() {
    const { products} = this.state
    
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
            
            </nav>
            <div class="container styling">
                <Slider {...this.settings}>
                    {
                    products.length ?
                    products.map(prd => 
                    <div key={prd.id}>
                        <div>
                            <div class="product-card" style={{...this.state.style,backgroundImage: `url(${prd.imageUrl})`}}>
                            </div>
                            <div class="under-card">
                                <div class="description-product-catalog">{prd.name}</div>
                                <div class="price-product-catalog">{prd.price}</div>
                            </div>
                        </div>
                                
                    </div>):
                    null
                    }
                                


                                    
                                    
                </Slider>
            </div>
        
        </div>
        
    )
  }
}

export default ProductsCatalog
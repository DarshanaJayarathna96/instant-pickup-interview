import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazyload';

import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { productActions } from "../../store/product-slice";
import "./product.css"

const Product = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = location.state;

    useEffect(() => {
        dispatch(productActions.getProduct(id));
    }, [id]);

    //  get product from redux store
    const product = useSelector((state) => state.product.product);

    return (
        <div>
            {/* set dynamic meta data */}
            <Helmet>
                <title>{product.name}</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={product.name} />
                <meta property="og:description" content={product.description} />
            </Helmet>
            <div className="go-back" onClick={() => navigate("/")}><h5><span style={{ marginRight: "15px" }}><FontAwesomeIcon icon={faArrowLeft} /></span>Go back</h5></div>
            <div>
                <div class="product-details">
                    <LazyLoad height={200} once>
                        <img src={product.image_url} alt={product.name} class="product-image" />
                    </LazyLoad>
                    <div class="product-info">
                        <h1 class="product-name">{product.name}</h1>
                        <p class="product-price">$ {product.amount}</p>
                        <p class="product-quantity">In Stock: {product.quantity}</p>
                        <p class="product-description">{product.description}</p>
                        <div>
                            <button className="add-card-btn btn-width"><span style={{ marginRight: "15px" }}><FontAwesomeIcon icon={faCartPlus} /></span> Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* markup schema */}
            <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "${product.name}",
            "image": "${product.image_url}",
            "description": "${product.description}",
            "offers": {
              "@type": "Offer",
              "price": "${product.amount}",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
            </script>
        </div>
    );
};

export default Product;
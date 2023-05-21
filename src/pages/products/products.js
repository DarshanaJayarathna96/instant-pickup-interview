
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import LazyLoad from "react-lazyload";

import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./products.css"

const Products = () => {
    const navigate = useNavigate();
    //  get products from redux store
    const productList = useSelector((state) => state.product.productList);

    return (
        <div className="product-container">
            {/* set meta data */}
            <Helmet>
                <title>Mobiles</title>
                <meta name="description" content="Discover the power of our mobile web suite for seamless productivity on the go. Access your files, collaborate with teammates, and stay organized with our intuitive interface and robust feature set. Try our mobile web suite today and experience productivity at your fingertips." />
            </Helmet>
            {
                productList.map(product => {
                    return (
                        <div className="product" key={product.id} onClick={() => navigate(`${product.name.toLowerCase().split(" ").join("-")}`, { state: { id: product.id } })}>
                            <p className="product-header">TAP TO VIEW DETAILS</p>
                            <LazyLoad height={200} once>
                                <img className="product-image" src={product.image_url} alt={product.name} />
                            </LazyLoad>

                            <h1 className="product-name">{product.name}</h1>
                            <h1 className="product-amount">&#36; {product.amount}</h1>
                            <div className="product-handler">
                                <div className="div-item-count">
                                    <div><FontAwesomeIcon icon={faMinus} /></div>
                                    <div>
                                        <div className="item-handler">{product.quantity}</div>
                                        <b>Nos</b>
                                    </div>
                                    <div><FontAwesomeIcon icon={faPlus} /></div>
                                </div>
                                <div className="div-button">
                                    <button className="add-card-btn"><span style={{ marginRight: "15px" }}><FontAwesomeIcon icon={faCartPlus} /></span> Add to card</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )

};

export default Products;
import React, {useState, useEffect} from 'react';
// import './Product-details.css'
import { useParams} from "react-router-dom"
import axios from 'axios';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const ProductItem = (props) => {
    console.log(props)

    const [product, setProduct] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    const PRODUCT_API_URL_WITH_ID = `http://localhost:5000/products/${props.match.params.id}`

    useEffect(() => {
        axios.get(PRODUCT_API_URL_WITH_ID)
          .then((response) => {
            console.log(response.data)
            setProduct(response.data.product);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }, []);

    if (!product) {
        return null 
    }

    console.log(product)
    const productImage = 
        product.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : product.image_url;
        return (
        
        <div className="product">
            <h2>{product.name}</h2>
            <div>
            <img
                width="200"
                alt={`Product name: ${product.name}`}
                src={productImage}
            />
            </div>
            <p>{product.description}</p>
        </div>
        );
};

export default ProductItem;
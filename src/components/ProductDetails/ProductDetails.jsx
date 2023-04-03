import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const BASE_URL = "https://mct-fs-app.up.railway.app";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  //   const { cat, _id } = useParams();
  const { _id } = useParams();
  const  [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/product/${_id}`);
      const data = await res.json();
      setProduct(data.product);
      setIsLoading(false);
    };
    fetchCategory();
  }, [_id]);

  return (
    <div className="prduct-details-container">
         {isLoading?<p style={{fontSize:"2rem"}}>Loading...</p>:(
                <div className="card-wrapper">
                <header>
                  <h1>{product?.title}</h1>
                </header>
                <div className="card">
                  <div className="card-header">
                    <img src={product.image} alt="product" />
                  </div>
                  <div className="card-body">
                    <h4>Product Name</h4>
                    <p>{product?.title}</p>
                    <h4>Product Price</h4>
                    <p>$ {product?.price}.00</p>
                    <h4>Product Description</h4>
                    <p>{product?.description}</p>
                    <h4>Product Rating</h4>
                    <p>{product?.rating?.rate}</p>
                  </div>
                </div>
              </div>
         )}

    </div>
  );
};

export default ProductDetails;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const BASE_URL="https://mct-fs-app.up.railway.app";

const Product = () => {
  const [category, setCategory] = useState("electronics");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);
  const  [isLoading,setIsLoading] = useState(false);
  
  const categoryHandler = (e) => {
    setCategory(e.target.innerText);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCategory = async() => {
        const res = await fetch(`${BASE_URL}/product/category/${category}`);
        const data = await res.json()
        setCategoryData(data.products);
        setIsLoading(false);
    }
    fetchCategory();
  },[category]);

  useEffect(() => {
    const fetchAllCategory = async() => {
      setIsLoading(true);
        const res = await fetch(`${ BASE_URL}/category`);
        const data = await res.json()
        setCategoryArr(data.categories);
        setIsLoading(false);
    }
    fetchAllCategory();
  },[]);

  return (
    <div className="product-container">
      <aside>
        <ul>
          {categoryArr.map((element) => {
            return (
              <li key={element._id}>
                <Link onClick={categoryHandler}>{element.cat_name}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="product-listing-container">
      {isLoading?<p style={{fontSize:"2rem"}}>Loading...</p>:(
                <ul className="product-list">
                {categoryData.map((element) => {
                    return (
                      <li key={element._id} className="product-list-item">
                        <Link to={`/productDetails/${category}/${element._id }`} >{element.title}</Link>
                      </li>
                    );
                  })}
             
                  
                </ul>
      )}

      </main>
    </div>
  );
};

export default Product;

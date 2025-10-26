

import { useState, useEffect } from "react";
import Product from "./Product";
import '../../css/product.css';
import api from '../../config/axiosConfig';
import { showLoader,hideLoader} from "../../redux/actions/loaderActions";

import { useDispatch, useSelector } from "react-redux";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
 const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
     
          dispatch(showLoader())
      try {
        const { data } = await api.get("/properties"); // מושך את כל הדירות
       console.log(data)
       
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      }
       finally {
      dispatch(hideLoader());
    }
    };
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    if (visibleCount < products.length) {
      setVisibleCount((prev) => prev + 2);
    } else {
      setVisibleCount(2);
    }
  };

  return (
    <div className="productListContainer">
      <div className="productGrid">
        {products.slice(0, visibleCount).map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>

      <button onClick={handleShowMore} className="showMoreBtn">
        {visibleCount < products.length ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}

export default ProductList;

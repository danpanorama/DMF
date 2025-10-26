// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { products as productsData } from "../database/productData"; // בעתיד תחליף בשרת
// import "../css/productsListPage.css";
// import ProductIconsEnhanced from "../components/products/productcomponents/ProductIconsEnhanced";

// function ProductsListPage() {
//   const [products, setProducts] = useState([]);
//   const [filterLocation, setFilterLocation] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // כאן תמשוך מהשרת בעתיד
//     setProducts(productsData);
//   }, []);

//   const handleFilterChange = (e) => setFilterLocation(e.target.value);

//   const filteredProducts = products.filter(p =>
//     filterLocation ? p.location.toLowerCase().includes(filterLocation.toLowerCase()) : true
//   );

//   return (
//     <div className="productsListContainer">
//       <h1>Available Apartments</h1>

//       {/* סינון */}
//       <div className="productsFilter">
//         <input
//           type="text"
//           placeholder="Filter by location..."
//           value={filterLocation}
//           onChange={handleFilterChange}
//         />
//       </div>

//       {/* רשימת דירות */}
//       <div className="productsList">
//         {filteredProducts.map(p => (
//           <div
//             key={p.id}
//             className="productRow"
//             onClick={() => navigate(`/product/${p.id}`)}
//           >
//             <div className="productImage">
//               <img src={p.images[0]} alt={p.name} />
//             </div>
//             <div className="productInfo">
//               <h2>{p.name}</h2>
//               <p>{p.description}</p>
//               <ProductIconsEnhanced
//                 rooms={p.rooms}
//                 bathrooms={p.bathrooms}
//                 floor={p.floor}
//                 size={p.size}
//                 balcony={p.balcony}
//                 parking={p.parking}
//                 elevator={p.elevator}
//                 condition={p.condition}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsListPage;




// /ProductsListPage/ProductsListPage.jsx
import { useState, useEffect } from "react";
import { products as productsData } from "../database/productData";
import ProductCard from "../components/ProductsListPage/ProductCard";
import ProductFilterPanel from "../components/ProductsListPage/ProductFilterPanel";
import "../css/productsListPage.css";
import { showLoader,hideLoader} from "../redux/actions/loaderActions";
import {useDispatch} from 'react-redux'
import { setError } from "../redux/actions/errorActions";
import api from "../config/axiosConfig";
function ProductsListPage() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    minRooms: "",
    maxRooms: "",
    minSize: "",
    maxSize: "",
    floor: ""
  });



  // useEffect(() => {
  //   setProducts(productsData);
  // }, []);




  useEffect(() => {
    const fetchProperties = async () => {
      dispatch(showLoader());

      try {
        const { data } = await api.get("/properties");
       
       console.log(data)
        setProducts(data.data);
      } catch (error) {
        // שימוש ב־Redux לטיפול בשגיאה
        dispatch(setError("Fetch Properties Failed", error.message));
      }
       finally {
      dispatch(hideLoader());
    }
    };

    fetchProperties();
  }, [dispatch]);

  const filteredProducts = products.filter((p) => {
    return (
      (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.minRooms || p.rooms >= parseInt(filters.minRooms)) &&
      (!filters.maxRooms || p.rooms <= parseInt(filters.maxRooms)) &&
      (!filters.minSize || p.size >= parseInt(filters.minSize)) &&
      (!filters.maxSize || p.size <= parseInt(filters.maxSize)) &&
      (!filters.floor || p.floor === parseInt(filters.floor))
    );
  });

  return (
    <div className="productsListContainer">
      <br /><br /><br />
      <h1>Available Apartments</h1>
      <ProductFilterPanel filters={filters} onChange={setFilters} />
      <div className="productsList" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListPage;

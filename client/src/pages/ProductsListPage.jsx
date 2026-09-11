
// import { useState, useEffect } from "react";
// import { products as productsData } from "../database/productData";
// import ProductCard from "../components/ProductsListPage/ProductCard";
// import ProductFilterPanel from "../components/ProductsListPage/ProductFilterPanel";
// import "../css/productsListPage.css";
// import { showLoader,hideLoader} from "../redux/actions/loaderActions";
// import {useDispatch} from 'react-redux'
// import { setError } from "../redux/actions/errorActions";
// import api from "../config/axiosConfig";
// function ProductsListPage() {
//   const dispatch = useDispatch()
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     location: "",
//     minRooms: "",
//     maxRooms: "",
//     minSize: "",
//     maxSize: "",
//     floor: ""
//   });



//   // useEffect(() => {
//   //   setProducts(productsData);
//   // }, []);




//   useEffect(() => {
//     const fetchProperties = async () => {
//       dispatch(showLoader());

//       try {
//         const { data } = await api.get("/properties");
       
//        console.log(data)
//         setProducts(data.data);
//       } catch (error) {
//         // שימוש ב־Redux לטיפול בשגיאה
//         dispatch(setError("Fetch Properties Failed", error.message));
//       }
//        finally {
//       dispatch(hideLoader());
//     }
//     };

//     fetchProperties();
//   }, [dispatch]);

//   const filteredProducts = products.filter((p) => {
//     return (
//       (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) &&
//       (!filters.minRooms || p.rooms >= parseInt(filters.minRooms)) &&
//       (!filters.maxRooms || p.rooms <= parseInt(filters.maxRooms)) &&
//       (!filters.minSize || p.size >= parseInt(filters.minSize)) &&
//       (!filters.maxSize || p.size <= parseInt(filters.maxSize)) &&
//       (!filters.floor || p.floor === parseInt(filters.floor))
//     );
//   });

//   return (
//     <div className="productsListContainer">
//       <br /><br /><br />
//       <h1>Available Apartments</h1>
//       <ProductFilterPanel filters={filters} onChange={setFilters} />
//       <div className="productsList" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         {filteredProducts.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsListPage;


import { useState } from "react";
import productsData from "../database/properties.js";
import ProductCard from "../components/ProductsListPage/ProductCard";
import ProductFilterPanel from "../components/ProductsListPage/ProductFilterPanel";
import "../css/productsListPage.css";

function ProductsListPage() {
  const [filters, setFilters] = useState({
    location: "",
    minRooms: "",
    maxRooms: "",
    minSize: "",
    maxSize: "",
    floor: ""
  });

  const filteredProducts = productsData.filter((p) => {
    return (
      (!filters.location ||
        p.location.toLowerCase().includes(filters.location.toLowerCase())) &&

      (!filters.minRooms ||
        p.rooms >= parseInt(filters.minRooms)) &&

      (!filters.maxRooms ||
        p.rooms <= parseInt(filters.maxRooms)) &&

      (!filters.minSize ||
        p.size >= parseInt(filters.minSize)) &&

      (!filters.maxSize ||
        p.size <= parseInt(filters.maxSize)) &&

      (!filters.floor ||
        String(p.floor) === String(filters.floor))
    );
  });

  return (
    <div className="productsListContainer">
      <br />
      <br />
      <br />

      <h1>Available Apartments</h1>

      <ProductFilterPanel
        filters={filters}
        onChange={setFilters}
      />

      <div
        className="productsList"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}
      </div>
      <br />
    </div>
  );
}

export default ProductsListPage;
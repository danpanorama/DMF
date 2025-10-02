// import { useState } from "react";
// import Product from "./Product";
// import '../../css/product.css'
// import Image1 from '../../assets/houseDemo.jpg'
// import {products} from '../../database/productData'
// function ProductList() {
//   // מערך דירות לדוגמה


//   // state לקבוע כמה מוצגים
//   const [visibleCount, setVisibleCount] = useState(2);

//   const handleShowMore = () => {
//     setVisibleCount((prev) => prev + 2); // מוסיף עוד שניים בכל לחיצה
//   };

//   return (
//     <div className="productListContainer">
//    <div className="productGrid">
//        {products.slice(0, visibleCount).map((product) => (
//         <Product key={product.id} {...product} />
//       ))}
//    </div>

//       {visibleCount < products.length && (
//         <button onClick={handleShowMore} className="showMoreBtn">
//          show more 
//         </button>
//       )}
//     </div>
//   );
// }

// export default ProductList;

import { useState } from "react";
import Product from "./Product";
import '../../css/product.css'
import { products } from '../../database/productData'

function ProductList() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    // אם עדיין לא הגענו לסוף -> להוסיף עוד
    if (visibleCount < products.length) {
      setVisibleCount((prev) => prev + 2);
    } 
    // אם כבר הגענו לסוף -> לאפס חזרה להתחלה (2)
    else {
      setVisibleCount(2);
    }
  };

  return (
    <div className="productListContainer">
      <div className="productGrid">
        {products.slice(0, visibleCount).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <button onClick={handleShowMore} className="showMoreBtn">
        {visibleCount < products.length ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}

export default ProductList;

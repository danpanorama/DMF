import "../../../css/productPage.css";
import { Link } from "react-router-dom";

function Breadcrumbs({ path }) {
  return (
    <div className="pp-breadcrumbs">
      {path.map((item, idx) => (
        <span key={idx}>
          <Link to={item.link}>{item.name}</Link>
          {idx < path.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;

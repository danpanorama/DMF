import { useNavigate } from "react-router-dom";
import "../../css/firstPage.css";

function MarketSelector() {
  const navigate = useNavigate();

  return (
    <section className="fpMarkets" id="markets">
      <div className="fpSectionHeader">
        <p>SELECTED MARKETS</p>
        <h2>Explore My Projects</h2>
      </div>

      <div className="fpMarketGrid">
        <div
          className="fpMarketCard fpGreece"
          onClick={() => navigate("/greece")}
        >
          <div className="fpMarketOverlay" />

          <div className="fpMarketContent">
            <span>01</span>
            <h3 className="locationHeader cw">Greece</h3>
            <p className="locationParegraph cw">Thessaloniki</p>
            <button>View Projects →</button>
          </div>
        </div>

        <div
          className="fpMarketCard fpIsrael"
          onClick={() => navigate("/israel")}
        >
          <div className="fpMarketOverlay" />

          <div className="fpMarketContent">
            <span>02</span>
            <h3 className="locationHeader cw">Israel</h3>
            <p className="locationParegraph cw">Tel Aviv & Jaffa</p>
            <button>View Projects →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketSelector;
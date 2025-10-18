// /ProductsListPage/ProductFilterPanel.jsx
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "../../css/productsListPage.css";

const STEP = 1;
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;

const MIN_SIZE = 20;
const MAX_SIZE = 300;

const MIN_PRICE = 50000;
const MAX_PRICE = 2000000;

const MIN_FLOOR = -1;
const MAX_FLOOR = 20;

const MIN_DISTANCE = 0;
const MAX_DISTANCE = 50;

function ProductFilterPanel({ filters, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSliderChange = (name, values) => {
    onChange({ ...filters, [name]: values });
  };

  const handleToggleChange = (type) => {
    onChange({ ...filters, type });
  };

  return (
    <div className="plp-filter-panel">
      <button className="plp-filter-button" onClick={() => setIsOpen(true)}>
        Filter 
      </button>

      {isOpen && (
        <>
          <div className="plp-filter-backdrop" onClick={() => setIsOpen(false)} />
          <div className="plp-filter-popup">
            <h3>Filter Apartments</h3>
            <button className="plp-filter-close" onClick={() => setIsOpen(false)}>×</button>

            {/* Rooms Slider */}
            <div className="plp-filter-inputs">
              <label>Rooms</label>
              <Range
                step={STEP}
                min={MIN_ROOMS}
                max={MAX_ROOMS}
                values={filters.rooms || [MIN_ROOMS, MAX_ROOMS]}
                onChange={(values) => handleSliderChange("rooms", values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      background: getTrackBackground({
                        values: filters.rooms || [MIN_ROOMS, MAX_ROOMS],
                        colors: ["#ccc", "#333", "#ccc"],
                        min: MIN_ROOMS,
                        max: MAX_ROOMS
                      }),
                      borderRadius: "5px",
                      margin: "10px 0"
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#333",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    {filters.rooms ? filters.rooms[index] : index}
                  </div>
                )}
              />

              {/* Size Slider */}
              <label>Size (sqm)</label>
              <Range
                step={5}
                min={MIN_SIZE}
                max={MAX_SIZE}
                values={filters.size || [MIN_SIZE, MAX_SIZE]}
                onChange={(values) => handleSliderChange("size", values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      background: getTrackBackground({
                        values: filters.size || [MIN_SIZE, MAX_SIZE],
                        colors: ["#ccc", "#333", "#ccc"],
                        min: MIN_SIZE,
                        max: MAX_SIZE
                      }),
                      borderRadius: "5px",
                      margin: "10px 0"
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#333",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    {filters.size ? filters.size[index] : index}
                  </div>
                )}
              />

              {/* Floor Slider */}
              <label>Floor</label>
              <Range
                step={1}
                min={MIN_FLOOR}
                max={MAX_FLOOR}
                values={filters.floor || [MIN_FLOOR, MAX_FLOOR]}
                onChange={(values) => handleSliderChange("floor", values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      background: getTrackBackground({
                        values: filters.floor || [MIN_FLOOR, MAX_FLOOR],
                        colors: ["#ccc", "#333", "#ccc"],
                        min: MIN_FLOOR,
                        max: MAX_FLOOR
                      }),
                      borderRadius: "5px",
                      margin: "10px 0"
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#333",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    {filters.floor ? filters.floor[index] : index}
                  </div>
                )}
              />

              {/* Type Buttons */}
              <label>Type</label>
              <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                {["apartment", "penthouse", "studio"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleToggleChange(type)}
                    style={{
                      padding: "8px 15px",
                      borderRadius: "8px",
                      border: filters.type === type ? "2px solid #333" : "1px solid #ccc",
                      background: filters.type === type ? "#333" : "#fff",
                      color: filters.type === type ? "#fff" : "#333",
                      cursor: "pointer"
                    }}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <button
                className="plp-apply-filters"
                onClick={() => setIsOpen(false)}
                style={{ marginTop: "15px" }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductFilterPanel;

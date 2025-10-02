import { useState } from 'react';
import '../../css/headers.css';

function WayThessaloniki() {
  const [open, setOpen] = useState(false);

  return (
    <div className="WayThessalonikiContainer">
      <div className="questionContainer" onClick={() => setOpen(!open)}>
        <p className="question">Way Thessaloniki?</p>
        <p className={`sign question ${open ? "open" : ""}`}>▼</p>
      </div>

      <div className={`answerWrapper ${open ? "open" : ""}`}>
        <p className="answer">
          Thessaloniki, with its vibrant culture, stunning seaside views, 
          and a perfect blend of tradition and modernity, offers an unparalleled 
          experience for anyone seeking inspiration and lifestyle excellence.
        </p>
      </div>
    </div>
  );
}

export default WayThessaloniki;

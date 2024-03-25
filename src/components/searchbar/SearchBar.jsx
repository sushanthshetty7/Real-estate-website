import React, { useState } from "react";
import "./searchbar.scss";



const types = ["Buy", "rent"];


function SearchBar() {
  const [values, setValues] = useState({
    type: "Buy",
    Location: "",
    MaxPrice: "",
    MinPeice: "",
  });

  const switchTypes = (val) => {
    setValues((prev) => ({ ...prev, type: val }));

  };

  return (
    <div className="searchbar">
      <div className="types">
        {types.map((type) => 
          (
            <button
              key={type}
              onClick={() => switchTypes(type)}
              className={values.type === type ? "active" : ""}
            >
              {type}
            </button>
          )
        )}
      </div>

      <form action="">
        <input type="text" className="options" placeholder="City location" />
        <input
          type="text"
          className="options"
          min={0}
          max={10000000}
          placeholder="Min price"
        />
        <input
          type="text"
          className="options"
          min={0}
          max={10000000}
          placeholder="Max price"
        />
        <button>
        <img src="/search.png" alt="" />
        </button>
        
      </form>
    </div>
  );
}

export default SearchBar;

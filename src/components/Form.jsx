import React from "react";
import { FiSearch } from "react-icons/fi";

function Form({ handleText, setTextPrice }) {
  return (
    <div className="search_wrapper">
      <div className="search_logo">
        <FiSearch className="search" />
      </div>
      <input placeholder="Сортировка по названию" onChange={handleText} />
      <input
        placeholder="Сортировка по цене"
        onChange={(e) => setTextPrice(e.target.value)}
      />
    </div>
  );
}

export default Form;

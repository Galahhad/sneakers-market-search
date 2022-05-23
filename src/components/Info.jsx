import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function Info({ item }) {
  const [info, setInfo] = useState(false);

  const changeInfo = () => {
    setInfo(!info);
  };

  return (
    <div className="product_wrapper">
      <div className="product_price">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
      <div className="product_info"></div>
      <button className="details" onClick={changeInfo}>
        Детали
      </button>
      {info && (
        <div className="details_info">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos
            tempore, laudantium odio, in dolore ex repellendus inventore maiores
            unde.
          </p>
          <button onClick={changeInfo}>
            <MdClose className="close" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Info;

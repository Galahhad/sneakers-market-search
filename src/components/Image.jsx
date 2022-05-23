import React from "react";

function Image({ item }) {
  return (
    <div className="img_wrapper">
      <img src={item.img} alt="sneakers" className="img" />
    </div>
  );
}

export default Image;

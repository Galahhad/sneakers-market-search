import { useState } from "react";

function Footer() {
  const [buy, setBuy] = useState(false);

  const handleBuy = () => {
    setBuy(!buy);
  };

  return (
    <div className="footer">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta
        sequi eius perferendis ipsa optio eaque excepturi. Quos.
      </p>
      <button className="add" disabled={buy} onClick={handleBuy}>
        {buy ? "Уже в корзине" : "Добавить в корзину"}
      </button>
      {buy && (
        <p onClick={handleBuy} className="delete_cart">
          Удалить из корзины
        </p>
      )}
    </div>
  );
}

export default Footer;

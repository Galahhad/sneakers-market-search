import Image from "./components/Image";
import Info from "./components/Info";
import Footer from "./components/Footer";
import img from "./images/cross.jpg";
import img2 from "./images/247511368.jpeg";
import img3 from "./images/3352135.jpeg";
import img4 from "./images/58174160299.jpeg";
import img5 from "./images/MAIN.jpeg";
import img6 from "./images/c9ed57bfb7fd71cf668511da524416b3.jpeg";
import img7 from "./images/sneakers1.jpeg";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const productArray = [
    {
      img: img,
      name: "Nike Sneaker",
      price: "$ 120",
    },
    {
      img: img2,
      name: "Adidas Sneaker",
      price: "$ 300",
    },
    {
      img: img3,
      name: "Puma Sneaker",
      price: "$ 170",
    },
    {
      img: img4,
      name: "Adibos Sneaker",
      price: "$ 220",
    },
    {
      img: img5,
      name: "Tiger Sneaker",
      price: "$ 140",
    },
    {
      img: img6,
      name: "kine Sneaker",
      price: "$ 127",
    },
    {
      img: img,
      name: "Iken Sneaker",
      price: "$ 170",
    },
    {
      img: img7,
      name: "Turkey Sneaker",
      price: "$ 134",
    },
    {
      img: img,
      name: "Sneakers Sneaker",
      price: "$ 131",
    },
    {
      img: img,
      name: "Adikos Sneaker",
      price: "$ 210",
    },
  ];

  const [text, setText] = useState("");
  const [textPrice, setTextPrice] = useState("");

  const filt = productArray.filter(
    (item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) &&
      item.price.toLowerCase().includes(textPrice.toLowerCase())
  );

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <Form
        productArray={productArray}
        handleText={handleText}
        setTextPrice={setTextPrice}
      />
      <div className="product_wrap">
        {filt.map((item, index) => {
          return (
            <div className="product" key={index}>
              <Image item={item} />
              <div className="wrapper">
                <Info item={item} />
                <Footer />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

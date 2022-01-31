import React, { useState, createContext } from "react";
import sneakerImage from "../../assets/images/image-product-1.jpg";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [items, setItems] = useState([
    {
      name: "Fall Limited Edition Sneaker",
      image: sneakerImage,
      price: 250.0,
      discount: 0.5,
      number: 3,
      id: 123,
    },
  ]);

  return (
    <ItemContext.Provider value={{ itemsState: [items, setItems] }}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemContext, ItemProvider };

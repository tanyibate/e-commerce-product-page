import React, { useReducer } from "react";
import AddToCartButton from "../add-to-cart/AddToCartButton";
import AddDecreaseNumberOfItems from "../number-of-items/AddDecreaseNumberOfItems";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default function ProductDescription({ product }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-full lg:w-3/5 text-left" style={{ padding: "3% 10%" }}>
      <p style={{ color: "#FF7E1B" }} className="font-bold text-sm mb-2">
        SNEAKER COMPANY
      </p>
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p style={{ color: "#69707D" }} className="mb-6">
        {product.description}
      </p>
      <div className="lg:space-y-2 flex lg:block justify-between mb-6">
        <div className="flex space-x-2 items-center">
          <h2 className="text-3xl font-bold my-0 mr-2">
            ${product.price * product.discount}
          </h2>
          <p
            className="rounded-t-md font-bold"
            style={{
              backgroundColor: "#FFEEE2",
              color: "#FF7E1B",
              height: "24px",
              padding: "0 4px",
            }}
          >{`${product.discount * 100}%`}</p>
        </div>
        <p
          style={{ textDecorationLine: "line-through", color: "#B6BCC8" }}
          className="font-bold"
        >
          ${product.price}
        </p>
      </div>

      <div className="w-full lg:flex space-y-1 lg:space-x-2 items-center">
        <AddDecreaseNumberOfItems count={state.count} dispatch={dispatch} />
        <AddToCartButton
          product={product}
          number={state.count}
          reset={() => dispatch({ type: "reset" })}
        />
      </div>
    </div>
  );
}

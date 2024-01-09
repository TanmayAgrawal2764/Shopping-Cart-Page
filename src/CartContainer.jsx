import React, { useState } from "react";
import CartItem from "./CartItem";
import data from "./data";

function CartContainer(props) {
  return props.count <= 0 ? (
    <h1>The Cart is Empty now</h1>
  ) : (
    <>
      {data.map((x) => {
        return (
          props.datas[x.id][0] > 0 && (
            <div className="card product-card" style={{ marginBottom: "20px" }}>
              <div className="row no-gutters">
                <CartItem
                  key={x.id}
                  fnc={props.fnc}
                  id={x.id}
                  img={x.img}
                  price={x.price}
                  name={x.title}
                  amount={props.datas[x.id][0]}
                />
              </div>
            </div>
          )
        );
      })}
    </>
  );
}

export default CartContainer;

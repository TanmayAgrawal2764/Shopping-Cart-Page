import React from "react";
function CartItem(props) {
  return (
    <>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">
            Price: <strong>${props.price}</strong>
          </p>
          <div className="quantity-controls">
            <button
              onClick={() => {
                props.fnc(props.id, 2);
              }}
              className="btn btn-outline-secondary btn-sm"
            >
              -
            </button>
            <span className="quantity">{props.amount}</span>
            <button
              onClick={() => {
                props.fnc(props.id, 1);
              }}
              className="btn btn-outline-secondary btn-sm"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              props.fnc(props.id, 3);
            }}
            className="btn btn-danger btn-sm mt-2"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <img
          src={props.img}
          className="card-img product-image"
          alt={props.name}
          style={{ width: "150px", height: "150px", marginTop: "40px" }}
        />
      </div>
    </>
  );
}

export default CartItem;

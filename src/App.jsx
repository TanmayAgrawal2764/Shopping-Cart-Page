import React, { useState, useEffect } from "react";
import CartContainer from "./CartContainer";
import data from "./data";
import Navbar from "./Navbar";
var cur = {},
  c = 0,
  p = 0;
data.map((x) => {
  c += x.amount;
  p += Math.round(x.price * 100) / 100;
  cur[x.id] = [x.amount, x.price];
});

function App() {
  const [total, settotal] = useState({
    count: c,
    price: p,
  });
  const [data, setData] = useState(cur);
  function update(id, op) {
    var d = data[id];
    op === 1
      ? settotal((pre) => {
          console.log(data);
          return {
            ["price"]: Math.round((pre.price + d[1]) * 100) / 100,
            ["count"]: pre.count + 1,
          };
        })
      : op === 2
      ? settotal((pre) => {
          return {
            ["price"]: Math.round((pre.price - d[1]) * 100) / 100,
            ["count"]: pre.count + 1,
          };
        })
      : settotal((pre) => {
          return {
            ["price"]: Math.round((pre.price - d[1] * d[0]) * 100) / 100,
            ["count"]: pre.count -d[0],
          };
        });
    setData((preValue) => {
      return {
        ...preValue,
        [id]:
          op === 1
            ? [preValue[id][0] + 1, preValue[id][1]]
            : op === 2
            ? [preValue[id][0] - 1, preValue[id][1]]
            : [0, preValue[id][1]],
      };
    });
  }
  function doall() {
    settotal({ count: 0, price: 0 });
    setData((preV) => {
      const newObject = {};
      Object.keys(preV).forEach((key) => {
        newObject[key] = [0, 0];
      });
      return newObject;
    });
  }
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("main-navbar");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed-navbar");
      } else {
        header.classList.remove("fixed-navbar");
      }
    }
  }, []);
  return (
    <div className="App">
      <Navbar total={total.count} />
      <main className="container mt-4">
        <footer className="row">
          <div className="col-md-8">
            <CartContainer datas={data} fnc={update} count={total.count} />
          </div>
          <div className="col-md-4" style={{ marginTop: "-20px" }}>
            <div className={`card summary card cart-summary sticky-summary`}>
              <div className="card-body">
                <h2 className="card-title">Shopping Cart</h2>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {total.count} Products
                    <span className="badge badge-primary badge-pill">
                      {total.price}
                    </span>
                  </li>
                </ul>
                <hr />
                <p className="total-text">
                  Total: <strong>{total.price}</strong>
                </p>
                <button
                  onClick={doall}
                  className="btn btn-success btn-block clear-btn"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
export default App;

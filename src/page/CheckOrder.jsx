import React, { useState } from "react";
import "../assets/CheckOrder.css";
import { MdCancel } from "react-icons/md";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
function CheckOrder() {
  const [number, setNumber] = useState(1);
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
console.log(value)
    if (value >= 1) {
      setNumber(value);
    } else {
      setNumber(1); 
    }
  };

  return (
    <div className="container-fluid px-lg-5 py-lg-3">
      <p className="h5  ps-3 fw-bold">SHOPPING CART</p>
      <div className="row w-100 m-auto">
        <div className="col-lg-8">
          <div className="border border-1 shadow-sm rounded-1 p-2">
            <p className="fw-bold p-2 border-bottom">
              Shop name : SPACE FOOD NUTRITION
            </p>
            <div className="table-responsive scrollable-table">
              <table className="table">
                <thead className="table-light position-sticky top-0 z-2">
                  <tr>
                    <th scope="col">SL#</th>
                    <th scope="col">Product details</th>
                    <th scope="col">Unit price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                        alt="Product 1"
                        height={60}
                        width={60}
                        className="rounded-1"
                      />
                      <span className="ps-2">Space Food Nutrition</span>
                    </td>
                    <td>
                      <p className="d-grid">
                        <span className="fs-6 text-primary fw-bold">
                          ₹10,000.00
                        </span>
                        <del className="text-secondary">₹12,533.00</del>
                      </p>
                    </td>
                    <td style={{ width: "100px" }}>
                      <input
                        type="number"
                        value={number}
                        onChange={handleChange}
                        className="w-75 rounded-1"
                      />
                    </td>
                    <td>₹25,066.01</td>
                    <td>
                      <MdCancel className="text-danger fs-5" />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                        alt="Product 1"
                        height={60}
                        width={60}
                        className="rounded-1"
                      />
                      <span className="ps-2">Space Food Nutrition</span>
                    </td>
                    <td>
                      <p className="d-grid">
                        <span className="fs-6 text-primary fw-bold">
                          ₹10,000.00
                        </span>
                        <del className="text-secondary">₹12,533.00</del>
                      </p>
                    </td>
                    <td style={{ width: "100px" }}>
                      <input
                        type="number"
                        value={number}
                        onChange={handleChange}
                        className="w-75 rounded-1"
                      />
                    </td>
                    <td>₹25,066.01</td>
                    <td>
                      <MdCancel className="text-danger fs-5" />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                        alt="Product 1"
                        height={60}
                        width={60}
                        className="rounded-1"
                      />
                      <span className="ps-2">Space Food Nutrition</span>
                    </td>
                    <td>
                      <p className="d-grid">
                        <span className="fs-6 text-primary fw-bold">
                          ₹10,000.00
                        </span>
                        <del className="text-secondary">₹12,533.00</del>
                      </p>
                    </td>
                    <td style={{ width: "100px" }}>
                      <input
                        type="number"
                        value={number}
                        onChange={handleChange}
                        className="w-75 rounded-1"
                      />
                    </td>
                    <td>₹25,066.01</td>
                    <td>
                      <MdCancel className="text-danger fs-5" />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                        alt="Product 1"
                        height={60}
                        width={60}
                        className="rounded-1"
                      />
                      <span className="ps-2">Space Food Nutrition</span>
                    </td>
                    <td>
                      <p className="d-grid">
                        <span className="fs-6 text-primary fw-bold">
                          ₹10,000.00
                        </span>
                        <del className="text-secondary">₹12,533.00</del>
                      </p>
                    </td>
                    <td style={{ width: "100px" }}>
                      <input
                        type="number"
                        value={number}
                        onChange={handleChange}
                        className="w-75 rounded-1"
                      />
                    </td>
                    <td>₹25,066.01</td>
                    <td>
                      <MdCancel className="text-danger fs-5" />
                    </td>
                  </tr>
                  
                  
               
                </tbody>
              </table>
            </div>
          </div>
          <div className="my-2">
            <select
              name="company"
              id="cars"
              className="w-100 p-2 rounded-1 border border-1 shadow-sm"
              style={{ outline: "none" }}
            >
              <option value="company">
                Company Vehicle ( 2 Week ) &#8377;0.00
              </option>
              <option value="company">
                Company Vehicle ( 2 Week ) &#8377;0.00
              </option>
            </select>
          </div>
          <div>
            <label className="py-1">Order Note (Optional)</label> <br />
            <textarea
              name="note"
              id=""
              className="w-100 p-2 d-block border border-1 rounded-1 shadow-sm"
              style={{ outline: "none" }}
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary px-lg-3 p-2 mt-2">
              <TbPlayerTrackPrev /> Continue shopping
            </button>
            <button className="btn btn-primary px-lg-5 p-2 mt-2">
              Checkout <TbPlayerTrackNext />
            </button>
          </div>
        </div>
        <div className="col-lg-4 border border-1 shadow-sm p-2 rounded-1">
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <span>SF Point</span>
              <strong>750</strong>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Sub total</span>
              <strong>&#8377;60,092.01</strong>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Tax</span>
              <strong>&#8377;0.00</strong>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <strong>&#8377;0.00</strong>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Discount on product</span>
              <strong className="text-danger">-&#8377;9,960.00</strong>
            </li>
          </ul>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-100 p-2 rounded-1 border border-1 shadow-sm"
              style={{ outline: "none" }}
            />
            <button className="btn btn-primary w-100 mt-2">Apply code</button>
          </div>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <label>
                <input type="checkbox" className="me-2" />
                Wallet Balance
              </label>
              <span>&#8377;0.00</span>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <label>
                <input type="checkbox" className="me-2" />
                Sponsor
              </label>
              <span>&#8377;0.00</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between border-1 border-top mt-3">
            <strong>Total</strong>
            <strong>&#8377;50,132.01</strong>
          </div>
          <div className="icons-bottom d-flex justify-content-evenly my-4">
            <div className="text-center">
              <img src="./fast-delivery.png" alt="" height={30} />

              <p>3 Days Free Delivery</p>
            </div>
            <div className="text-center">
              <img src="./money-back-guarantee.png" alt="" height={30} />
              <p>Money Back Guarantee</p>
            </div>
            <div className="text-center">
              <img src="./favorites.png" alt="" height={30} />
              <p>100% Genuine Product</p>
            </div>
            <div className="text-center">
              <img src="./secure-payment.png" alt="" height={30} />
              <p>Authentic Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOrder;
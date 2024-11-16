import React from "react";
import "../assets/CheckOrder.css";
import { MdCancel } from "react-icons/md";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
function CheckOrder() {
    return (
        <>
            <div className="px-5 py-2">
                <p className="h4 fw-bold">SHOPPING CART</p>
                <div className="row">
                    <div className="px-2 col-md-8 rounded-1">

                        <div className="table-responsive border rounded-1">
                            <p className="h6 fw-bold px-4 pt-1">Shop name : SPACE FOOD NUTRITION</p>
                            <hr />
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>Sl#</th>
                                        <th>Product Details</th>
                                        <th>Unit Price</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png" alt="product" className="tab-img" />
                                            <span>Space Food Nutrition</span>
                                        </td>
                                        <td>&#8377;120</td>
                                        <td>2</td>
                                        <td>&#8377;240</td>
                                        <td>
                                            <MdCancel className="cancel-btn" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png" alt="product" className="tab-img" />
                                            <span>Space Food Nutrition</span>
                                        </td>
                                        <td>&#8377;120</td>
                                        <td>3</td>
                                        <td>&#8377;360</td>
                                        <td>
                                            <MdCancel className="cancel-btn" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png" alt="product" className="tab-img" />
                                            <span>Space Food Nutrition</span>
                                        </td>
                                        <td>&#8377;120</td>
                                        <td>3</td>
                                        <td>&#8377;360</td>
                                        <td>
                                            <MdCancel className="cancel-btn" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src="/pizza.jpg" alt="product" className="tab-img" />
                                            <span>Space Food Nutrition</span>
                                        </td>
                                        <td>&#8377;120</td>
                                        <td>3</td>
                                        <td>&#8377;360</td>
                                        <td>
                                            <MdCancel className="cancel-btn" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="border my-2">
                            <select name="company" id="cars" className="company-dropdown">
                                <option value="company">
                                    Company Vehicle ( 2 Week ) &#8377;0.00
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className="py-2">Order Vehicle (Optional)</label> <br />
                            <textarea name="note" id="" className="textarea"></textarea>
                        </div>
                        <div className="button-flex">
                            <button className="button-color btn btn-block mt-2">
                                <TbPlayerTrackPrev /> Continue shopping
                            </button>
                            <button className="button-color btn btn-block mt-2">
                                Checkout <TbPlayerTrackNext />
                            </button>
                        </div>
                    </div>


                    <div className="summary-card card p-3 col-md-4">
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
                                className="form-control"
                                placeholder="Coupon code"
                            />
                            <button className="button-color btn btn-block mt-2">
                                Apply code
                            </button>
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
                        <div className="d-flex justify-content-between mt-3">
                            <strong>Total</strong>
                            <strong>&#8377;50,132.01</strong>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CheckOrder;
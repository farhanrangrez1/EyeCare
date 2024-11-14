import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../features/AddCart/cartSlice';
import checkout from "../assets/checkout.css"

function Checkout() {
  const dispatch=useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('+1 (936) 514-1641');
  const [selectedSlot, setSelectedSlot] = useState(null);
   
  const orderItems = [
    { name: 'Lays Baked', quantity: '1', weight: '1 pc(s)', price: '₹1.50' },
    { name: 'Doritos Tangy Cheese', quantity: '1', weight: '1 pc(s)', price: '₹1.00' },
    { name: 'Doritos Tangy Cheese', quantity: '1', weight: '1 pc(s)', price: '₹1.00' },
    { name: 'Doritos Tangy Cheese', quantity: '1', weight: '1 pc(s)', price: '₹1.00' },
    // Add more items as needed
  ];
  const {Allcart} = useSelector((state)=>state.cart)
  useEffect(() => {
    dispatch(fetchCart());
 }, [dispatch]);
  const deliverySlots = [
    { label: 'Express Delivery', time: '90 min express delivery' },
    { label: 'Morning', time: '8:00 AM - 11:00 AM' },
    { label: 'Noon', time: '11:00 AM - 2:00 PM' },
    { label: 'Afternoon', time: '2:00 PM - 5:00 PM' },
    { label: 'Evening', time: '5:00 PM - 8:00 PM' },
  ];

  const handleSlotClick = (index) => {
    setSelectedSlot(index);
  };

  return (
    <>
    <div className="order-page">
    <div className='order-page2'>
    <div className="left-section">
        {/* Contact Number Section */}
        <div className="section">
          <div className="section-content">
          <h3>1 Contact Number</h3>
      <button className="update-btn">+ Update</button>
          </div>
          <div className="input-group">
              <PhoneInput
                country={'us'}
                value={phoneNumber}
                onChange={setPhoneNumber}
                disabled
              />
            </div>
        </div>

        {/* Billing Address Section */}
        <div className="section">
          <div className="section-content">
          <h3>2 Billing Address</h3>
            <button className="update-btn">+ Add</button>
          </div>
          <div className="address-box">
              <h6 style={{fontWeight:"600"}}>Billing</h6>
              <p>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
            </div>
        </div>

        {/* Shipping Address Section */}
        <div className="section">
          <div className="section-content">
          <h3>3 Shipping Address</h3>
            <button className="update-btn">+ Add</button>
          </div>
          <div className="address-box">
              <h6 style={{fontWeight:"600"}}>Shipping</h6>
              <p>2148 Stratford Park, KY, Winchester, 40391, United States</p>
            </div>
        </div>

        {/* Delivery Schedule Section */}
        <div className="section">
          <h3>4 Delivery Schedule</h3>
          <div className="section-content schedule">
            {deliverySlots.map((slot, index) => (
              <div
                key={index}
                className={`schedule-slot ${selectedSlot === index ? 'active-slot' : ''}`}
                onClick={() => handleSlotClick(index)}
              >
                <strong>{slot.label}</strong>
                <p>{slot.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Note Section */}
        <div className="section">
          <h3>5 Order Note</h3>
          <div className="section-content">
            <textarea
              className="order-note"
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="right-section" >
        <h5 style={{margin:"0px 0px 30px  130px",color:"black"}}>Your Order</h5>
        <ul>
        {Allcart?.map((item, index) => (
            <li key={index} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",fontSize:"12px",fontWeight:"600"}}>
              <p>{item.quantity} x {item.name} | </p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <div className="summary-details">
          <p><span>Sub Total</span>      
          <span>
        ₹{Allcart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </span>
      </p>
          <p><span>Tax</span> <span>Calculated at checkout</span></p>
          <p><span>Estimated Shipping</span> <span>Calculated at checkout</span></p>
        </div>
        <button className="check-availability-btn">Check Availability</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Checkout
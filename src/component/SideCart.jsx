import { useEffect, useState, useRef } from "react";
import "../assets/navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeCart } from "../features/AddCart/cartSlice";
import { Link } from "react-router-dom";

function SideCart({ handleCartModalClose }) {
  const dispatch = useDispatch();
  const { Allcart = [] } = useSelector((state) => state.cart); // Set default empty array
  const [itemQuantities, setItemQuantities] = useState({});
  
  // Ref for modal to check if click is inside the modal
  const modalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    const initialQuantities = {};
    Allcart.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setItemQuantities(initialQuantities);
  }, [Allcart]);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCartModalClose(); // Close modal if clicked outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCartModalClose]);

  const handleIncresCountModal2 = (id) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecresCountModal2 = (id) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const handleremove = (data) => {
    dispatch(removeCart(data));
  };

  return (
    <>
      <div className="modal2-1"></div>
      <div className="modal2-2" ref={modalRef} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="modal2-3">
          <div className="modal2-4">
            <span className="modal2-cart"><IoCartOutline /></span>
            <span className="modal2-5">Item {Allcart.length}</span>
          </div>
          <div className="modal2-6">
            <span className="modal2-7" onClick={handleCartModalClose}><RxCross2 /></span>
          </div>
        </div>

        {Allcart.length > 0 ? (
          Allcart.map((data) => (
            <div className="modal2-9" key={data.id} data={data}>
              <div className="modal2-8">
                <button onClick={() => handleDecresCountModal2(data.id)}>-</button>
                <span>{itemQuantities[data.id]}</span>
                <button onClick={() => handleIncresCountModal2(data.id)}>+</button>
              </div>
              <div className="modal2-10">
                <img
                  src={`https://eye-care.developmentalphawizz.com/storage/app/public/product/thumbnail/${data.thumbnail}`}
                  alt={data.name}
                />
              </div>
              <div className="modal2-11">
                <h6>{data.name}</h6>
                <span>RS: {data.price}</span>
                <p>{data.size}</p>
              </div>
              <div className="modal2-12">
                <p onClick={() => handleremove(data.id)}><RxCross2 /></p>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}

        <div style={{ marginTop: 'auto', padding: '10px' }}>
          <Link to={"/checkout"}>
            <button
              style={{
                width: '100%',
                padding: '10px 20px',
                backgroundColor: '#1c88B4',
                color: 'white',
                border: 'none',
                borderRadius: '120px',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              Checkout
              <h6 style={{
                padding: '10px 20px',
                backgroundColor: "white",
                color: "#1c88B4",
                borderRadius: "50px",
                textAlign: "center",
                margin: "0px"
              }}>
                <span>
                  ₹{Allcart.reduce((total, item) => total + item.price * (itemQuantities[item.id] || 1), 0).toFixed(2)}
                </span>
              </h6>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideCart;

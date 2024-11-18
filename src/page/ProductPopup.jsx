import { useState } from "react";
import "../assets/produtpopup.css";
import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const ProductPopup = ({ handleClosePopup }) => {
    // { handleBackModal, mdetales }

    const navigate = useNavigate()
    const [count, setCount] = useState(1);
    const [changeBtn, setChangeBtn] = useState(false)

    // const handleCheckOut=()=>{
    //     navigate("/checkorder")
    // }
   
    //     const h=()=>{
    // setCount(count+1)
    //     }
    const [counter , setCounter] = useState(1)
    const handleIncressCard=()=>{
        setCounter(counter+1)
    }
    const handleDecresscard=()=>{
        setCounter(counter-1)
        if(counter===1){
            setCounter(1)
        }
    }


    const handleChangeBtn = () => {
        setChangeBtn(true)
    }

    return (
        <>
            <div onClick={handleClosePopup} className="modal-1"></div>
            <div className="modal-2">
                <div onClick={handleClosePopup} className="modal-cros-20"><RxCross2 /></div>
                <div className="modal-3">
                    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-rectangle-lenskart-blu-lb-e14255-c3_g_2060_6_16_22.jpg" alt=""></img>
                </div>
                <div className="modal-4">
                    <h2>Gradient Grey Wayfarer Sunglasses - MG3631</h2>
                <p className="modal4-p-span" style={{fontSize:"20px"}}><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar />
                        <span style={{color:"black",fontSize:"17px"}}>4.6 Review</span>|<span style={{color:"black",fontSize:"17px"}}>0 order</span>|<span style={{color:"black",fontSize:"17px"}}>0 WishList</span>
                    </p>
                    <span className="m4-span-strike">33.30 RS <strike style={{ color: "red" }}>45 Rs</strike></span>
                    <h4><span>Discount Price:2.0Rs</span> <strike className="modal-strike">Rs:5.00</strike></h4>
                    <div className="m-4-quanty">
                        <span>Quantity:</span>
                        <button onClick={handleDecresscard}  style={{cursor:"pointer",fontSize:"25px",border:"none",backgroundColor:"white"}} >-</button>
                        <button style={{fontSize:"20px"}}>{counter}</button>
                        <button onClick={handleIncressCard} style={{cursor:"pointer",fontSize:"25px",border:"none",backgroundColor:"white"}} >+</button>
                    </div>
                    <p className="m-4-totalprice">Total Price: 33.0 RS</p>

                    <div className="modal-4-btn-2-3">
                        <button className="m-4-btn-1">3D TRY ON</button>
                        <button  className="m-4-btn-2">Add to Cart</button>
                      <span style={{color:"red"}} className="m-4-h-1"><FaHeart/></span>
                      <span style={{color:"red"}}>0</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPopup;
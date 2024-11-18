import { useState } from "react";
import "../assets/produtpopup.css";
import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


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
                    <p className="modal4-p-span"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                        <span> 0 Review</span>|<span>0 order</span>|<span>0 WishList</span>
                    </p>
                    <span style={{ color: "red" }} className="m4-span-strike">33.30 RS <strike>45 Rs</strike></span>
                    <h4><span>Discount Price:2.0Rs</span> <strike className="modal-strike">Rs:5.00</strike></h4>
                    <div className="m-4-quanty">
                        <span>Quantity:</span>
                        <span onClick={handleIncressCard} style={{cursor:"pointer",fontSize:"25px"}} >+</span>
                        <button style={{fontSize:"20px"}}>{counter}</button>
                        <span onClick={handleDecresscard}  style={{cursor:"pointer",fontSize:"25px"}} >-</span>
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
import { useState } from "react";
import "../assets/produtpopup.css";
import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";

const ProductPopup = ({handleClosePopup}) => {
    // { handleBackModal, mdetales }

    const [count, setCount] = useState(1);
    const [changeBtn, setChangeBtn] = useState(false)

    const price = 4.00;

    const handleIncres2 = () => {
        setCount(count + 1)
    }
    const handleDecres2 = () => {
        setCount(count - 1)
        if (count === 1) {
            setChangeBtn(false)
            setCount(count)
        }
    }
    //     const h=()=>{
    // setCount(count+1)
    //     }

    const handleChangeBtn = () => {
        setChangeBtn(true)
    }

    return (
        <>
            <div className="modal-1"></div>
            <div className="modal-2">
                <div onClick={handleClosePopup} className="modal-cros-20"><RxCross2 /></div>
                <div className="modal-3">
                    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-rectangle-lenskart-blu-lb-e14255-c3_g_2060_6_16_22.jpg" alt=""></img>
                </div>
                <div className="modal-4">
                    <h2>Gradient Grey Wayfarer Sunglasses - MG3631</h2>
                    <p>2Pfund</p>
                    <span>Frame Colour: Silver Feature: UV Protected Ideal For: Men & Women Lens Colour: Black Lens Material: CR39 Frame Material: Metal Temple Material: Me</span>
                    <span>see more</span>
                    <h4><span>Rs:7686</span> <strike className="modal-strike">Rs:5.00</strike></h4>

                    {
                        changeBtn ? (<p><div className="modal-btn-2" ><button onClick={handleIncres2}>+</button><span>{count}</span><button onClick={handleDecres2}>-</button></div></p>)

                            :
                            (<p onClick={handleChangeBtn}><button>Add Shopping Cart</button></p>)

                    }

                </div>
            </div>
        </>
    )
}
export default ProductPopup;
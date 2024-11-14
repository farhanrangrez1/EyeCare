import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import flashVanner1 from '../Image/flesVanner1.webp'
import flashSale from "../assets/flashSale.css"






const FlashSale=()=>{
    const navigate = useNavigate()

    const handleBackFromFlash=()=>{
        navigate("/home")
    }
    return (
        <div className="flash">
<div className="flash-1">
    <h2>Available Flash Sale</h2>
    <span onClick={handleBackFromFlash}><IoHomeOutline />Home</span>
</div>

<div className="flash-4">

<div className="flashCard">
    <div className="flashCardImg">
        <img src={flashVanner1}></img>
    </div>
    <div className="flashCardHead">
        <div className="flashCardTitle">
            Demo Title
        </div>
        <div className="flashSubTitle">
        Offer Till : <span>22-oct-2024</span>
        </div>
        <div className="flashSubTitle">
        Offer Till : <span>22-oct-2024</span>
        </div>
        <div className="flashSubTitle">
        Offer Till : <span>22-oct-2024</span>
        </div>
        <div className="flashSubTitle">
        Offer Till : <span>22-oct-2024</span>
        </div>
    </div>    
</div>

{/* <div className="flash-2">
    <img src="http://localhost:3003/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2289%2FGroup-1000003746.png&w=640&q=100"></img>
    <h6>Limited-Time Offer: Act Fast! 🔥</h6>
    <div className="flash-3"><h6>Offer Till:</h6><p>31 Oct 2024</p></div>
    <div className="flash-3"><h6>Campaign status :</h6><p>On side</p></div>
    <div className="flash-3"><h6>Campaign type on:</h6><p>persentage</p></div>
    <div className="flash-3"><h6>Deals rate:</h6><p>50</p></div>
</div>
<div className="flash-2">
    <img src="http://localhost:3003/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2285%2F2-92206549.png&w=640&q=100"></img>
    <h6>Limited-Time Offer: Act Fast! 🔥</h6>
    <div className="flash-3"><h6>Offer Till:</h6><p>16 Oct 2024 to 29 Oct 2024</p></div>
    <div className="flash-3"><h6>Campaign status :</h6><p>On side</p></div>
    <div className="flash-3"><h6>Campaign type on:</h6><p>persentage</p></div>
    <div className="flash-3"><h6>Deals rate:</h6><p>20</p></div>
</div> */}
</div>
        </div>
    )
}
export default FlashSale;
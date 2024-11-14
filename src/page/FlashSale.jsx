import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import flashVanner1 from '../Image/flesVanner1.webp';
import flashSale from "../assets/flashSale.css"; // Make sure this file is correctly linked

const FlashSale = () => {
    const navigate = useNavigate();

    // Define the handleBackFromFlash function only once
    const handleBackFromFlash = () => {
        navigate("/");
    };
    const handleGoOffer=()=>{
        navigate("/offer")
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
                        <img onClick={handleGoOffer} src={flashVanner1} alt="Flash Sale Image" />
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
            </div>
        </div>
    );
};

export default FlashSale;

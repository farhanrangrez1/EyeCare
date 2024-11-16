
import Home from './page/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Contect from './page/Contect';
import FlashSale from './page/FlashSale';
import Allcategory from './page/Allcategory';
import Allproduct from './page/Allproduct';
import Checkout from './page/Checkout';
import Profile from './page/Profile';
import ChangePassword from './page/ChangePassword';
import { ToastContainer,Bounce,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer2 from './component/Footer2';
import Offer from './page/Offer';
import CheckOrder from './page/CheckOrder';

function App() {

  return (
    <>
   <Router>
   <Navbar/>
   <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} 
        style={{marginTop:"90px"}}
      />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/flashsale' element={ <><FlashSale/> <Footer2/></>}/>
    <Route path='/contect' element={<><Contect/> <Footer2/></>}/>
    <Route path='/allcategory' element={<><Allcategory/> <Footer2/></>}/>
    <Route path='/allproduct' element={<><Allproduct/> <Footer2/></>}/>
    <Route path='/checkout' element={<><Checkout/> <Footer2/></>}/>
    <Route path='/profile'element={<><Profile/> <Footer2/></>}/>
    <Route path='/changepassword' element={<><ChangePassword/> <Footer2/></>}/>
    <Route path='/offer' element={<><Offer/> <Footer2/></>}/>
   <Route path="/checkorder" element={<CheckOrder/>}/>
    </Routes>
   
   </Router>
    </>
  );
}

export default App;
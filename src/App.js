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
    <Route path='/flashsale' element={ <FlashSale/>}/>
    <Route path='/contect' element={<Contect/>}/>
    <Route path='/allcategory' element={<Allcategory/>}/>
    <Route path='/allproduct' element={<Allproduct/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/profile'element={<Profile/>}/>
    <Route path='/changepassword' element={<ChangePassword/>}/>
    </Routes>
   </Router>
   <Footer2></Footer2>
    </>
  );
}

export default App;

import "../assets/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SideCart from "../component/SideCart";
import { useEffect, useState } from "react";
import { loginUser, logout, registerUser } from "../features/user/authSlice";
import newlogo from "../Image/logo.webp";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";
import profileDefault from "../Image/profile.png";
import { Oval } from "react-loader-spinner";

const Navbar = () => {
  const dispatch = useDispatch();
  // const [filteredContacts, setFilteredContacts] = useState([]);
  // const navigate = useNavigate();

  // Login Register
  const navigate = useNavigate();
  const swalOptions = {
    title: `<img src="${newlogo}" alt="logo" style="margin: 20px; height: 50px; width: 100px;" />`,
    html: `
            <style>
                .swal2-popup {
                    width: 400px !important;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #f8f9fa;
                    
                }
                .swal2-input {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    box-sizing: border-box;
                }
                .login-btn, .register-btn {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }
                .login-btn:hover, .register-btn:hover {
                    background-color: #0056b3;
                }
                .google-btn, .mobile-btn {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }
                .google-btn:hover {
                    background-color: #5a6268;
                }
                .forgot-link {
                    float: right;
                    font-size: 12px;
                    color: #007bff;
                    text-decoration: none;
                    margin-bottom: 15px;
                }
                .forgot-link:hover {
                    text-decoration: underline;
                }
                .divider {
                    text-align: center;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: #6c757d;
                    font-size: 14px;
                }
            </style>
            <div id="login-form">
                <p style="font-size: 18px; color:gray; margin-top:-40px;">Login with your email & password</p>
                <input id="swal-input-email" class="swal2-input" placeholder="Email" type="email">
                <input id="swal-input-password" class="swal2-input" placeholder="Password" type="password">
                <a href="#" class="forgot-link">Forgot password?</a>
                <button id="loginBtn" class="login-btn">Login</button>
                <div class="divider">Or</div>
                <button id="googleLoginBtn" class="google-btn">Login with Google</button>
                <button id="mobileLoginBtn" style="background-color: #6c757d;" class="mobile-btn">Login with Mobile number</button>
                <p style="font-size: 18px; color:gray; margin-top:30px;">Don't have an account? <span id="register-link" class="register-link" style="cursor: pointer;color:#007bff">Register</span></p>
            </div>
            
         <div id="register-form" style="display: none;">
            <p style="font-size: 18px; color:gray; margin-top:-40px;">Register with your details</p>
            <input id="swal-input-f_name" class="swal2-input" placeholder="First Name" type="text">
            <input id="swal-input-l_name" class="swal2-input" placeholder="Last Name" type="text">
            <input id="swal-input-email-reg" class="swal2-input" placeholder="Email" type="email">
            <input id="swal-input-phone" class="swal2-input" placeholder="Phone" type="text">
            <input id="swal-input-password-reg" class="swal2-input" placeholder="Password" type="password">
            <input id="swal-input-city" class="swal2-input" placeholder="City" type="text">
            <input id="swal-input-state" class="swal2-input" placeholder="State" type="text">
            <input id="swal-input-friend_code" class="swal2-input" placeholder="Friend Code" type="text">
            <button id="registerBtn" class="register-btn">Register</button>
        </div>
        `,

    showConfirmButton: false,
    focusConfirm: false,
    didOpen: () => {
      // Event Listeners for Login and Register
      document
        .getElementById("loginBtn")
        .addEventListener("click", handleLogin);
      document
        .getElementById("register-link")
        .addEventListener("click", showRegisterForm);
      document
        .getElementById("registerBtn")
        .addEventListener("click", handleRegister);
    },
  };

  const handleButtonClick = async () => {
    await Swal.fire(swalOptions);
  };
  const handleCartModal=()=>{
    navigate("/checkorder")
  }
  const handleLogin = () => {
    const email = document.getElementById("swal-input-email").value;
    const password = document.getElementById("swal-input-password").value;

    if (email && password) {
      dispatch(loginUser({ email, password }));
      Swal.close();
      <Oval
        height={30}
        width={30}
        color="blue"
        secondaryColor="gray"
        strokeWidth={4}
        strokeWidthSecondary={2}
        ariaLabel="loading"
        className="loader"
      />;
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill in all fields",
      });
    }
  };
  const showRegisterForm = () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  };
  const handleRegister = () => {
    const f_name = document.getElementById("swal-input-f_name").value;
    const l_name = document.getElementById("swal-input-l_name").value;
    const email = document.getElementById("swal-input-email-reg").value;
    const phone = document.getElementById("swal-input-phone").value;
    const password = document.getElementById("swal-input-password-reg").value;
    const city = document.getElementById("swal-input-city").value;
    const state = document.getElementById("swal-input-state").value;
    const friend_code = document.getElementById("swal-input-friend_code").value;
    if (
      f_name &&
      l_name &&
      email &&
      phone &&
      password &&
      city &&
      state &&
      friend_code
    ) {
      dispatch(
        registerUser({
          f_name,
          l_name,
          email,
          phone,
          password,
          city,
          state,
          friend_code,
        })
      );
      // console.log({ f_name, l_name, email, phone, password, city, state, friend_code });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Passwords do not match",
      });
    }
    // } else {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Error!',
    //         text: 'Please fill in all fields',
    //     });
    // }
  };

  // /// Login Regoster And

  
  
  const { loginWithRedirect } = useAuth0();
  const handleFlashSale = () => {
    navigate("flashsale");
  };

  const [showModal, setShowModal] = useState(false);
  const handleCartModalClose = () => {
    setShowModal(false);
  };


  const handleGoLogoFromHome = () => {
    navigate("/");
  };
  const handleContect = () => {
    navigate("/contect");
  };
  
  const { user, isSuccess, isError } = useSelector((state) => state.user);
  // Login and Logout
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("loggedIn");
    if (savedLoginStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (user && isSuccess) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else if (isError || !user) {
      setLoggedIn(false);
      localStorage.setItem("loggedIn", "false");
    }
  }, [isSuccess, isError, user]);

  // Logout functionality
  // const handleLogout = () => {
  //   localStorage.setItem('loggedIn', 'false');
  //   setLoggedIn(false);
  // };

  const handleLogout = () => {
    dispatch(logout());
    setProfileMenuOpen(false);
  };

  const { Allcart = [] } = useSelector((state) => state.cart); 


  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("loggedIn");
    if (savedLoginStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (user && isSuccess) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else if (isError || !user) {
      setLoggedIn(false);
      localStorage.setItem("loggedIn", "false");
    }
  }, [isSuccess, isError, user]);


  const toggleProfileMenu = (e) => {
    e.stopPropagation();
    setProfileMenuOpen((prev) => !prev);
  };

  const closeProfileMenu = (e) => {
    if (!e.target.closest("#user-menu") && !e.target.closest("#user-menu-button")) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeProfileMenu);
    return () => {
      document.removeEventListener("click", closeProfileMenu);
    };
  }, []);

  return (
    <>
      {/* {loading ? (
        <Oval
          height={30}
          width={30}
          color="blue"
          secondaryColor="gray"
          strokeWidth={4}
          strokeWidthSecondary={2}
          ariaLabel="loading"
          className="loader"
        />
      ) : (
        <div className="loaded-content">
          <h1>Data Loaded</h1>
        </div>
      )} */}
      <div className="nav">
        <img
          onClick={handleGoLogoFromHome}
          className="nav-img"
          src={newlogo}
        ></img>

        <div className="navMenuContainerList" style={{marginTop:"10px"}}>
          <div className="NavMenuList" >
            <div className="hoverList">
              {" "}
              <Link to={"/allproduct"}>
                {" "}
                <h2 style={{ fontSize: "17px", fontWeight: "400" }}>
                  Products
                </h2>
              </Link>
              {/* <div className="hoverComponent">
                <div className="hoverContent">
                  <div className="hoverNavList">
                    <h6 href="https://www.google.com">Mens </h6>
                    <Link to={"/allproduct"}>
                      <a
                        href="https://www.google.com"
                        style={{ color: "gray" }}
                      >
                        All Products
                      </a>
                    </Link>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Round Frames
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Power Sunglasses
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Rhapsody
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Acetate Icons
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Masaba
                    </a>
                  </div>

                  <div className="hoverNavList">
                    <h6 href="https://www.google.com">Women's</h6>
                    <Link to={"/allcategory"}>
                      <a
                        href="https://www.google.com"
                        style={{ color: "gray" }}
                      >
                        All Category
                      </a>
                    </Link>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Eyeglasses
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Iconnect
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Acuvue
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Bausch Lomb
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Aqualens
                    </a>
                  </div>

                  <div className="hoverNavList">
                    <h6 href="https://www.google.com">Kid"s</h6>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Aviator
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Rounders
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Hexagons
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Eyeglasses
                    </a>
                    <a href="https://www.google.com" style={{ color: "gray" }}>
                      Rectangle
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="hoverList">
            {" "}
            <Link to={"/allcategory"}>
              {" "}
              <h2 style={{ fontSize: "17px", fontWeight: "400" ,}}>Category</h2>
            </Link>
            <div className="hoverComponent">
  <div className="hoverContent">
    <div className="hoverNavList">
      <h6 href="https://www.google.com">Mens </h6>
      <div className="dropdown">
        <Link to="/allproduct">
          <a href="https://www.google.com" style={{ color: "gray" }}>
            All Products
          </a>
        </Link>
        <div className="dropdownMenu">
          <a href="https://www.google.com" style={{ color: "gray" }}>
            Round Frames
          </a>
          <a href="https://www.google.com" style={{ color: "gray" }}>
            Power Sunglasses
          </a>
          <a href="https://www.google.com" style={{ color: "gray" }}>
            Rhapsody
          </a>
          <a href="https://www.google.com" style={{ color: "gray" }}>
            Acetate Icons
          </a>
          <a href="https://www.google.com" style={{ color: "gray" }}>
            Masaba
          </a>
        </div>
      </div>
      <a href="https://www.google.com" style={{ color: "gray" }}>
        Round Frames
      </a>
      <a href="https://www.google.com" style={{ color: "gray" }}>
        Power Sunglasses
      </a>
      <a href="https://www.google.com" style={{ color: "gray" }}>
        Rhapsody
      </a>
      <a href="https://www.google.com" style={{ color: "gray" }}>
        Acetate Icons
      </a>
      <a href="https://www.google.com" style={{ color: "gray" }}>
        Masaba
      </a>
    </div>
  </div>
</div>

          </div>
          <h6 style={{ fontSize: "17px", fontWeight: "400" }}>Brands</h6>
          {/* <h6 style={{ fontSize: "17px", fontWeight: "400" }}>
            SCREEN GLASSES
          </h6> */}
          <li onClick={handleContect}>Contact</li>
          <li onClick={handleFlashSale}>Flash Sale</li>
         <Link to={"/Becameparson"}> <li>Became parson</li></Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          <Nav.Link href="#" style={{ color: "black" }}>
            <FaQuestionCircle size={25} />
          </Nav.Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "white",
              color: "pointer",
              border: "1px solid gray",
            }}
          >
            <FaSearch size={16} />
          </div>

          {loggedIn ? (
            <div>
              <button
                type="button"
                style={{
                  position: "relative",
                  display: "flex",
                  borderRadius: "9999px",
                  backgroundColor: "#4a5568",
                  fontSize: "0.875rem",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setProfileMenuOpen((prev) => !prev)}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-0.375rem",
                    right: "-0.375rem",
                  }}
                ></span>
                <span style={{ display: "none" }}>Open user menu</span>
                <img
                  style={{
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "9999px",
                  }}
                  src={profileDefault}
                  alt=""
                />
              </button>
            </div>
          ) : (
            <button
              className="nav-btn"
              onClick={handleButtonClick}
              style={{ width: "45px" }}
            >
              Join
            </button>
          )}

          <span onClick={handleCartModal} className="nav-cart">
            <svg
              style={{ fontSize: "30px" }}
              xmlns="http://www.w3.org/3000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.8 8.8v-4a4 4 0 00-8 0v4m-3-2h14l1 12H.8z"></path>
            </svg>
          </span>
          <div className="notifaction">{Allcart.length}</div>
        </div>
      </div>
      <div>
        {showModal && <SideCart handleCartModalClose={handleCartModalClose} />}
      </div>

      {profileMenuOpen && (
        <div
          id="user-menu"
          style={{
            right: "0",
            zIndex: "10",
            marginTop: "0.5rem",
            width: "12rem",
            borderRadius: "0.375rem",
            backgroundColor: "#fff",
            padding: "0.25rem 0",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            marginRight: "80px",
            position: "fixed",
          }}
          role="menu"
          aria-orientation="vertical"
        >
          <Link to={"/profile"}>
            <a
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                color: "#4a5568",
                textDecoration: "none",
              }}
              role="menuitem"
            >
              Your Profile
            </a>
          </Link>
          <a
            style={{
              display: "block",
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              color: "#4a5568",
              textDecoration: "none",
            }}
            role="menuitem"
          >
            Saved Properties
          </a>
          <Link to={"/checkout"}>
            <a
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                color: "#4a5568",
                textDecoration: "none",
              }}
              role="menuitem"
            >
              Checkout
            </a>
          </Link>

          <Link to={"/"} onClick={handleLogout}>
            <a
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                color: "#4a5568",
                textDecoration: "none",
              }}
              role="menuitem"
            >
              Sign Out
            </a>
          </Link>
        </div>
      )}
    </>
  );
};
export default Navbar;

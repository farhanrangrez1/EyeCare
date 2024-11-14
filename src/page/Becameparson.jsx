import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/bacameparson.css";

function Becameparson() {
  const dispatch = useDispatch();
  const [name, setName] = useState("John Doe");
  const [lastName, setLastName] = useState("Doe");
  const [phone, setPhone] = useState("1234567890");
  const [pinCode, setPinCode] = useState("12345");
  const [email, setEmail] = useState("admin@demo.com");

  const [activeButton, setActiveButton] = useState("Button1");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleIconClick = (iconId) => {
    setActiveButton((prevId) => (prevId === iconId ? null : iconId));
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === "name") setName(value);
    if (field === "lastName") setLastName(value);
    if (field === "phone") setPhone(value);
    if (field === "pinCode") setPinCode(value);
    if (field === "email") setEmail(value);
  };

  return (
    <div className="Becameparson">
      <div className="Becameparson-form">
        <div className="services">
          <div className="services-4">
            <div className="servic-2">
              <h6
                onClick={() => handleClick("Button1")}
                className={activeButton === "Button1" ? "active" : ""}
              >
                Manufacture
              </h6>
            </div>
            <div className="servic-2">
              <h6
                onClick={() => handleClick("Button2")}
                className={activeButton === "Button2" ? "active" : ""}
              >
                Docker
              </h6>
            </div>
            <div className="servic-2">
              <h6
                onClick={() => handleClick("Button3")}
                className={activeButton === "Button3" ? "active" : ""}
              >
                Aggregator
              </h6>
            </div>
          </div>

          <div className="services-5">
            {activeButton === "Button1" && (
              <div className="profile-form">
                <h3>Manufacture</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                </div>
                <div className="form-group">
                  <label>Pin code</label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => handleInputChange(e, "pinCode")}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <button className="update-button">Update</button>
              </div>
            )}

            {activeButton === "Button2" && (
              <div className="profile-form">
                <h3>Docker</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                </div>
                <div className="form-group">
                  <label>Pin code</label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => handleInputChange(e, "pinCode")}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <button className="update-button">Update</button>
              </div>
            )}

            {activeButton === "Button3" && (
              <div className="profile-form">
                <h3>Aggregator</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                </div>
                <div className="form-group">
                  <label>Pin code</label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => handleInputChange(e, "pinCode")}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <button className="update-button">Update</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Becameparson;

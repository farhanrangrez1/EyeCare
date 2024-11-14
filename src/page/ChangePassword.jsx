import { useState } from 'react';
import '../assets/profil.css';
import ProfileSideb from "../page/ProfileSidebar"
import { useDispatch } from 'react-redux';
import { Changepassword } from '../features/Profile/userProfileSlice';

const ChangePassword = () => {
const dispatch=useDispatch()

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    phone: "",
    password: "",
  });
  const {f_name, l_name, phone, password } = formData;

  // Password visibility states
  // const [showOldPassword, setShowOldPassword] = useState(false);
  // const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Changepassword(formData))
   };

  return (
    <div className='profile'>
      <ProfileSideb/>
      <div className="change-password-container">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <div className="input-group">
              <input
                type={'text' }
                name="f_name"
                onChange={handleChange}
                value={f_name}
                required
                placeholder=''
              />
            </div>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <div className="input-group">
              <input
                type={'text'}
                name="l_name"
                onChange={handleChange}
                value={l_name}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <div className="input-group">
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                value={phone}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="password"
                onChange={handleChange}
                value={password}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className="bi bi-eye" style={{ color: "grey" }}></i>
              </button>
            </div>
          </div>

          {/* <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className="bi bi-eye" style={{ color: "grey" }}></i>
              </button>
            </div>
          </div> */}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

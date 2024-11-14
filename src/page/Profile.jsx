import  { useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import profil from "../assets/profil.css";
import ProfileSidebar from "./ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../features/Profile/userProfileSlice";

function Profile() {
  const dispatch =useDispatch()
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("admin@demo.com");

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  
  const { Allprofile } = useSelector((state) => state.userProfile);  
  console.log(Allprofile,"i am user profile");
  
  useEffect(() => {
    dispatch(UserProfile());
  }, [dispatch]);

  return (
    <div className="profile">
      <ProfileSidebar />
      <div className="profile-form">
        {/* <div className="upload-box" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some images here, or click to select images</p>
      </div> */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            // onChange={(e) =>setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={name}
            // onChange={(e) => setName(AllUserProfile.f_name)}
          />
        </div>
        <div className="form-group">
          <label>Phone Numbar</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pin code</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div> */}
        {/* <button className="save-button">Save</button> */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="update-button">Update</button>
        {/* <h3>Contact Number</h3> */}
        {/* Add a contact number field if needed */}
      </div>
    </div>
  );
}

export default Profile;

import axios from "axios";
import { toast } from "react-toastify";

const API_URL = '/api/v1/customer'

const Changepassword = async (data) => {
    try {
        const userdata = JSON.parse(localStorage.getItem("user"));
        const token = userdata?.token;

        if (!token) {
            console.error("Token is missing!");
            toast.error("User is not authenticated!");
            return;
        }
        const firname = token.split('.')[0]; 

        const response = await axios.put(
            `${API_URL}/update-profile`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Firname: firname,
                },
            }
        );
        if (response.data) {
            localStorage.setItem("Allprofile", JSON.stringify(response.data));
            toast.success("User Password Changed successfully!");
        }
            localStorage.setItem("Allprofile", JSON.stringify(response.data));
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            toast.error(error.response.data.errors[0].message || "Error changing password");
        } else {
            toast.error("An error occurred. Please try again later.");
        }
        console.error('Error:', error);
    }
};


const UserProfile = async () => {
    try {
        const userdata = JSON.parse(localStorage.getItem("user"));
        const token = userdata?.token;
        if (!token) {
            console.error("Token is missing!");
            toast.error("User is not authenticated!");
            return;
        }
        const firname = token.split('.')[0]; 
        const response = await axios.get(
            `${API_URL}/info`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Firname: firname,
                },
            }
        );
        if (response.data) {
            localStorage.setItem("Allprofile", JSON.stringify(response.data))
            toast.success("User Profile fetched successfully!");
        }
        localStorage.setItem("Allprofile", JSON.stringify(response.data));

    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            toast.error(error.response.data.errors[0].message || "Error fetching user profile");
        } else {
            toast.error("An error occurred. Please try again later.");
        }
        console.error('Error:', error);
    }
};

const userProfilesService={
    Changepassword,
    UserProfile
}

export default userProfilesService
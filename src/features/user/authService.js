import axios from "axios";
import { toast } from "react-toastify";

const API_URL = '/api/v1/auth'

const registerUser =async(data)=>{
 
  try {
    const response = await axios.post(API_URL + "/register", data);
      if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("User registered successfully!");
    }
    localStorage.setItem("user", JSON.stringify(response.data));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      // Access and display the specific error message from the errors array
      toast.error(error.response.data.errors[0].message || "Error registering user");
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  }
}
const loginUser = async (data) => {
  try {
    const response = await axios.post(API_URL + "/login", data);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      
      // Show the success message from response data
      toast.success(response.data.message || "User login successfully!");
      
      return response.data;    
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      // Access and display the specific error message from the errors array
      toast.error(error.response.data.errors[0].message || "Error registering user");
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  }
}







//   const createresult = async (data) => {
//     try {
//         const response = await axios.post(API_URL + "/", data);
//         if (response.data) {
//             localStorage.setItem("Allresult", JSON.stringify(response.data));
//             toast.success("Result successfully!");
//             return response.data;
//         }
//     } catch (error) {
//         if (error.response && error.response.data) {
//             toast.error(error.response.data.message || "Error logging in user");
//         } else {
//             toast.error("An error occurred. Please try again later.");
//         }
//         throw error; 
//     }
// };
const authService={
registerUser,
loginUser
}


export default authService









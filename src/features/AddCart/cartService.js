import axios from "axios";
import { toast } from "react-toastify";

const API_URL =  '/api/v1'

    const AddCart = async (data) => {
        const userdata = JSON.parse(localStorage.getItem("user"))
        const token = userdata?.token
        console.log("Token:", token)
    
        const tokenParts = token?.split('.')
        const firname = tokenParts ? tokenParts[0] : null
    
        const payload = tokenParts && tokenParts.length > 1 ? JSON.parse(atob(tokenParts[1])) : null
        const id = payload ? payload.id : null
        const requestData = {
            id:data.id,
            token: token,
            quantity: 1, 
        };

        try {
            const response = await axios.post(API_URL + "/cart/add", requestData, {
                headers: {
                    Authorization:`Bearer ${token}`,
                    Firname: firname,
                },
        });
            if (response.data) {
              localStorage.setItem("Allcart", JSON.stringify(response.data));
              
              // Show the success message from response data
              toast.success(response.data.message || "Add cartd successfully!");
              
              return response.data;    
            }
          } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
              // Access and display the specific error message from the errors array
              toast.error(error.response.data.errors[0].message || "Error cart user");
            } else {
              toast.error("An error occurred. Please try again later.");
            }
          }
    }

 
    const fetchCart = async (data) => {
      const userdata = JSON.parse(localStorage.getItem("user"));
      const token = userdata?.token;
      console.log("Token:", token);
  
      const tokenParts = token?.split('.');
      const firname = tokenParts ? tokenParts[0] : null;
  
      const payload = tokenParts && tokenParts.length > 1 ? JSON.parse(atob(tokenParts[1])) : null;
      const id = payload ? payload.id : null;
  
      try {
          const response = await axios.get(API_URL + "/cart", {
              headers: {
                  Authorization: `Bearer ${token}`,
                  Firname: firname,
              }, 
          });
          localStorage.setItem('Allcart', JSON.stringify(response.data)); 
          return response?.data
          console.log(response.data);
      } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
      }
  }
  


  const removeCart = async (data) => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    const token = userdata?.token;
    console.log("Token:", token);

    const tokenParts = token?.split('.');
    const firname = tokenParts ? tokenParts[0] : null;

    const payload = tokenParts && tokenParts.length > 1 ? JSON.parse(atob(tokenParts[1])) : null;
    const id = payload ? payload.id : null;

    try {
        const response = await axios.delete(`${API_URL}/cart/remove`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Firname: firname,
            },
            params: {
                key: data,
                token: token,
            },
        });
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
    }
};

  const cartService=({
    AddCart,
    fetchCart,
    removeCart
  })
  
  export default cartService

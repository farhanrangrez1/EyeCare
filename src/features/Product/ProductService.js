import axios from "axios";

const API_URL =  '/api/v1/'


const fetchProduct=async(data)=>{
  const response  = await axios.get(API_URL + "products/latest", data)
  localStorage.setItem('Allproduct', JSON.stringify(response.data)); 
  console.log(response.data.products);
  
  return response?.data 
}


const productService=({
  fetchProduct
})


export default productService
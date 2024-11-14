import axios from "axios";
// import productService from "../Product/ProductService";

const API_URL = '/api/v1'


//AllCategori
const fetchCategory=async(data)=>{
 const response  = await axios.get(API_URL + "/categories/get_categories", data)
 localStorage.setItem('AallCategori', JSON.stringify(response.data)); 
console.log(response?.data);
return response?.data
}
//AllCategori




const categoriesService={
    fetchCategory,
}


export default categoriesService
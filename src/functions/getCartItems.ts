import axios from "axios";

export default async function getCartItems(email:string){

 const body = {
     email:email
 }  
 const response = await axios.post('http://localhost:3000/api/get-cart-items/', body);
  // console.log('response is ', response.data.arr)
  return response.data.arr;

   
}
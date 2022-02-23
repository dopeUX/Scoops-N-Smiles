import axios from "axios";

export default async function getCartItems(email:string){
 let arr:any[] = [];   
 const body = {
     email:email
 }  
 const response = await axios.post('http://localhost:3000/api/get-cart-items/', body);
 //const items:any[] = await response.data.cartItems;

//  items.map((i:any, index:number)=>{
//      arr.push(i.productId);
//      return null;
  return response.data.cartItems;
//  })
 
//  console.log(items);

 
  //productId
  //quantity

   // name
   // price

   
}
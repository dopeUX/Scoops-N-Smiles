import axios from "axios";
import getCartItems from "./getCartItems";
  
 export default async function saveCartItemsToAdmin(email:string,firstName:string,lastName:string, orderStatus:string,
    phone:string,address:string, time:string, cartTotal:string, cartItems:any[]){
        cartItems = await getCartItems(email);
                
        const body = {
            email:email,
            name:firstName+" "+lastName,
            orderStatus:orderStatus,
            phone:"+91"+phone,
            address:address,
            time:time,
            cartTotal:cartTotal,
            cartItems:cartItems
          }
     
     const response = await axios.post('http://localhost:3000/api/save-cart-items-to-admin/', body);
     console.log(response);
    //  window.location.reload();
     window.location.href= '/'
     alert('order placed');
    }
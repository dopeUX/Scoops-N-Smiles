import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";
import getCartItems from "./getCartItems";
  
 export default async function saveCartItemsToAdmin(email:string,firstName:string,lastName:string, orderStatus:string,
    phone:string,address:string, time:string, cartTotal:string, cartItems:any[]){
       
      store.dispatch(changeIsLoading(true));
      store.dispatch(changeLoadingState('fixed'));
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
     
     const response = await axios.post(process.env.REACT_APP_REPL_HOST+'/api/save-cart-items-to-admin/', body);
     console.log(response);
     store.dispatch(changeIsLoading(false));
     store.dispatch(changeLoadingState('hidden'));
    //  window.location.reload();
     window.location.href= '/'
     alert('order placed');
    }
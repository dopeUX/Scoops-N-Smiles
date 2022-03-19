import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function getCartItems(email:string){
 store.dispatch(changeIsLoading(true));
 store.dispatch(changeLoadingState('fixed'));
 const body = {
     email:email
 }  
 const response = await axios.post(process.env.REACT_APP_REPL_HOST+'/api/get-cart-items/', body);
  // console.log('response is ', response.data.arr)
  store.dispatch(changeIsLoading(false));
  store.dispatch(changeLoadingState('hidden'));
  return response.data.arr;
  
   
}
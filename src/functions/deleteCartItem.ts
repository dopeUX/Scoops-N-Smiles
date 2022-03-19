import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";

 export default async function deleteCartItem(email:string, productId:string){
    store.dispatch(changeIsLoading(true));
    store.dispatch(changeLoadingState('fixed'));
    const body = {
       email:email,
       productId : productId
    } 
    await axios.post(process.env.REACT_APP_REPL_HOST+'/api/delete-from-cart',body).then(res=>{
        console.log(res.data)
        window.location.reload();
        store.dispatch(changeIsLoading(false));
        store.dispatch(changeLoadingState('hidden'));
    })
 } 
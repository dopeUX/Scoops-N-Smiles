import axios from "axios";
import { changeIsLoading,changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function saveItemToCart(email: string, itemId: string) {
   store.dispatch(changeIsLoading(true));
   store.dispatch(changeLoadingState('fixed'));
    const body = {
      email: email,
      productId: itemId,
    };
    const res = await axios.post(
      process.env.REACT_APP_REPL_HOST+"/api/save-item-to-cart",
      body,
    );
    if(res.status===200){
      console.log(res.data);
      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState('hidden'));
    }
    else{
      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState('hidden'));
    }
  }
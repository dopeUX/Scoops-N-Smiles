import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function getProducts(setProducts) {
  store.dispatch(changeIsLoading(true));
  store.dispatch(changeLoadingState('fixed'));

    const config = {
      headers: {
        category: "",
      },
    };
    return await axios
      .get(process.env.REACT_APP_REPL_HOST+"/api/retrieve-products", config)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.items)
          store.dispatch(changeIsLoading(false));
          store.dispatch(changeLoadingState('hidden'));
          return res.data.items;
        } else{
          store.dispatch(changeIsLoading(false));
          store.dispatch(changeLoadingState('hidden'));
        }       
      });
 
   }
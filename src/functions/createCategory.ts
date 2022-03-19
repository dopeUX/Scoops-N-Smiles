import axios from "axios";
import getCategories from "./getCategories";
import { changeLoadingState,changeIsLoading } from "../AppSlice";
import store from "../store";

 const createCategory = async (category:string, setCategories:any) => {
    store.dispatch(changeLoadingState('fixed'));
    store.dispatch(changeIsLoading(true));
    const ct = {
      cat: category,
    };

    return await axios.put(process.env.REACT_APP_REPL_HOST+"/api/save-category", ct).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
         getCategories().then((res) => {
         setCategories(res);
         store.dispatch(changeLoadingState('hidden'));
         store.dispatch(changeIsLoading(false));
        });
      }
      else{
        store.dispatch(changeLoadingState('hidden'));
         store.dispatch(changeIsLoading(false));
      }
    });
  };

  export default createCategory;
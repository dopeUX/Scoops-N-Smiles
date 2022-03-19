import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function getCategories():Promise<any[]> {
  store.dispatch(changeIsLoading(true));
  store.dispatch(changeLoadingState('fixed'));
  const res = await axios.get(process.env.REACT_APP_REPL_HOST+"/api/retrieve-categories");
  store.dispatch(changeIsLoading(false));
  store.dispatch(changeLoadingState('hidden'));

  return res.data.items;
}
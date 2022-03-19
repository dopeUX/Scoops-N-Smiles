import axios from "axios";
import { changeIsLoading,changeLoadingState } from "../AppSlice";
import store from "../store";


export default async function updateUserDetails(email:string, firstName:string, lastName:string, phone:number, address:string ){
    store.dispatch(changeIsLoading(true));
    store.dispatch(changeLoadingState('fixed'));
    const config = {
       params:{
           email:email,
           firstName:firstName,
           lastName:lastName,
           phone:phone,
           address:address
       }
    } 
    const response = await axios.get(process.env.REACT_APP_REPL_HOST+'/api/update-user-details',config);
  
    if(response.status===200){
        store.dispatch(changeIsLoading(false));
        store.dispatch(changeLoadingState('hidden'));
        console.log(response.data);  
        window.location.reload();
    }else{
    store.dispatch(changeIsLoading(false));
    store.dispatch(changeLoadingState('hidden'));
    console.log(response.data);  
    window.location.reload();
    }
}
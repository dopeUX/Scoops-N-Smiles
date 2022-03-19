import axios from "axios";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";


export default async function verifyToken(token:string){
  store.dispatch(changeIsLoading(true));
  store.dispatch(changeLoadingState('fixed'));
    let config = {
        headers: {
          "x-access-token": token,
        },
      };
   return await axios.get(process.env.REACT_APP_REPL_HOST+'/api/auth-check',config).then(res=>{
       if(res.status===200){
         store.dispatch(changeIsLoading(false));
         store.dispatch(changeLoadingState('hidden'));
         console.log(res.data.email)  
         return res.data.email; 

       }
       else{
        store.dispatch(changeIsLoading(false));
        store.dispatch(changeLoadingState('hidden'));
        alert('error')
       }
    })
}
import axios from "axios";
import verifyToken from "./verifyToken";
import { changeIsLoading, changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function getLoggeInUserDetails(token:string){ 
   store.dispatch(changeIsLoading(true));
   store.dispatch(changeLoadingState('fixed'));
   return await verifyToken(token).then(async res=>{
     const config={
         params:{
            email:res 
         }
     }  
     return await axios.get(process.env.REACT_APP_REPL_HOST+'/api/get-logged-in-user-details', config).then(res=>{
      //  console.log('thi',res.data.user) 
       store.dispatch(changeIsLoading(false));
       store.dispatch(changeLoadingState('hidden'));
       return res.data.user;
     })
   })
} 
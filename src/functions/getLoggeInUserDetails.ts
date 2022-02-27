import axios from "axios";
import verifyToken from "./verifyToken";

export default async function getLoggeInUserDetails(token:string){ 
   return await verifyToken(token).then(async res=>{
     const config={
         params:{
            email:res 
         }
     }  
     return await axios.get('http://localhost:3000/api/get-logged-in-user-details', config).then(res=>{
       return res.data.user;
     })
   })
} 
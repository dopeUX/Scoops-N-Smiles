import axios from "axios";

export default async function verifyToken(token:string){
    let config = {
        headers: {
          "x-access-token": token,
        },
      };
   return await axios.get('http://localhost:3000/api/auth-check',config).then(res=>{
       if(res.status===200){
         console.log(res.data.email)  
         return res.data.email; 
       }
       else{
           alert('error')
       }
    })
}
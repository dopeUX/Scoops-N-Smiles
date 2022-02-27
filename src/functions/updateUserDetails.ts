import axios from "axios";

export default async function updateUserDetails(email:string, firstName:string, lastName:string, phone:number, address:string ){
    const config = {
       params:{
           email:email,
           firstName:firstName,
           lastName:lastName,
           phone:phone,
           address:address
       }
    } 
    const response = await axios.get('http://localhost:3000/api/update-user-details',config);
    console.log(response.data);  
    window.location.reload();
}
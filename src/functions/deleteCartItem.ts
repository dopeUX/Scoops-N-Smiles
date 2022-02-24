import axios from "axios";

 export default async function deleteCartItem(email:string, productId:string){
    const body = {
       email:email,
       productId : productId
    } 
    await axios.post('http://localhost:3000/delete-from-cart',body).then(res=>{
        console.log(res.data)
        window.location.reload();
    })
 } 
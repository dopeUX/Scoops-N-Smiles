import axios from "axios";

export default async function saveItemToCart(email: string, itemId: string) {
    const body = {
      email: email,
      productId: itemId,
    };
    const res = await axios.post(
      "http://localhost:3000/api/save-item-to-cart",
      body,
    );
    if(res.status===200){
      console.log(res.data);
    }
  }
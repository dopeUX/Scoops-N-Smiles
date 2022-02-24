import axios from "axios";

export default async function getProducts() {
    const config = {
      headers: {
        category: "",
      },
    };
    return await axios
      .get("http://localhost:3000/retrieve-products", config)
      .then((res) => {
        if (res.status === 200) {
          return res.data.items;
        }        
      });
   }
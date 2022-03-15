import axios from "axios";

export default async function getProducts(setProducts) {
    const config = {
      headers: {
        category: "",
      },
    };
    return await axios
      .get("http://localhost:3000/api/retrieve-products", config)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.items)
          return res.data.items;
        }        
      });
   }
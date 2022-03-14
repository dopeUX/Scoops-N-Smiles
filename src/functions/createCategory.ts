import axios from "axios";
import getCategories from "./getCategories";

 const createCategory = async (category:string, setCategories:any) => {
    const ct = {
      cat: category,
    };
    return await axios.put("http://localhost:3000/save-category", ct).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
         getCategories().then((res) => {
         setCategories(res);
        });
      }
    });
  };

  export default createCategory;
import axios from "axios";
import store from "../store";
import { changeIsLoading, changeLoadingState } from "../AppSlice";

const uploadImage = async (image:File,iceName:string, setNav:any) => {
    const data: any = new FormData();
    data.append("image", image);
    data.append("iceName", iceName);
    //  OPTIONAL HEADERS
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    console.log("uploading");
    await axios
      .put(process.env.REACT_APP_REPL_HOST+"/api/upload", data, config)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        
      });
    console.log("uploaded");
    setNav()
    // window.location.reload();
  };

  const saveIceItem = async (iceName:string, category:string, price:string, color:any, image:File, setNav:any) => {
    store.dispatch(changeLoadingState('fixed'));
    store.dispatch(changeIsLoading(true))
    const item = {
      iceName: iceName,
      category: category,
      price: price,
      color: color,
    };
    //  await axios.post('http://localhost:3000/save-item',item).then(res=>{
    //    if(res.status){
    //      uploadImage();
    //    }
    //  });
    const response = await axios.post(process.env.REACT_APP_REPL_HOST+"/api/save-item", item);
    if (response.status) {
      await uploadImage(image,iceName, setNav);
    }
    store.dispatch(changeLoadingState('hidden'));
    store.dispatch(changeIsLoading(false));
  };

  export default saveIceItem;
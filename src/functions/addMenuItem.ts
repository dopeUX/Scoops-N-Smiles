import axios from "axios";

const uploadImage = async (image:File,iceName:string) => {
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
      .put("http://localhost:3000/api/upload", data, config)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
      });
    console.log("uploaded");
    window.location.reload();
  };

  const saveIceItem = async (iceName:string, category:string, price:string, color:any, image:File) => {
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
    const response = await axios.post("http://localhost:3000/api/save-item", item);
    if (response.status) {
      uploadImage(image,iceName);
    }
  };

  export default saveIceItem;
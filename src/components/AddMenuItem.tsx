import React, {useEffect, useRef, useState} from "react";
import Footer from "./Footer";
import { Link, useNavigate,useLocation} from "react-router-dom";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";
import CategoryDropDown from "./CategoryDropDown";

export default function AddMenuItem(){
    // const navigate = useNavigate();
    // const location = useLocation();
    // const state = location.state;
    const [price, setPrice] = useState('5');
    const imageRef:any = useRef();
    const [imageSrc, setImageSrc] = useState('/assets/add-menu-item.png');
    const [iceName,setIceName] = useState('');
    const [category, setCategory] = useState('def');
    const [image, setImage] = useState<File>();
    //window.location.href = '/secret';

    const uploadImage = async() =>{
       const data:any = new FormData();
       data.append('image',image);
       data.append('iceName',iceName);
      //  OPTIONAL HEADERS
       const config = { 
           headers:{
             'Content-Type':'multipart/form-data'
        }
       }
       console.log('uploading');
       await axios.put('http://localhost:3000/upload',
       data, config).then(res=>{
         console.log(res.data);
         console.log(res.status);
       })
       console.log('uploaded');
    }
     
    const saveIceItem = async() =>{
       const item = {
         iceName:iceName,
         category:category,
         price:price,
         image:image
       }
       await axios.post('http://localhost:3000/save-item',item).then(res=>{
         if(res.status){
           uploadImage();
         }
       });
    }
     
    const saveCategory = async() =>{
      const ct = {
        cat:category,
      };
       await axios.put('http://localhost:3000/save-category',ct).then(res=>{
         console.log(res.data);
       })
    }
    return(
        <div className="relative h-full">
           <header className='w-full h-fit bg-[#f1f1f1] flex justify-between px-[25%] py-5'>
             <Link to='/'>
             <img src="/assets/back_button.png" className="w-16 h-16 cursor-pointer" alt="" />
             </Link>
             <h1 className='my-auto font-semibold text-2xl'>Add Ice item</h1>
             <h1 className='text-lg logo'>Scoops N<span className='block mx-auto'>Smiles</span></h1>
           </header> 
          
             <div className="w-full h-full px-[25%] mb-20 mt-14 flex justify-between">
               <label htmlFor="myfile">
               <img ref={imageRef} src={imageSrc} typeof="file" alt="" className="w-[19em] h-[28em] object-cover cursor-pointer rounded-[2em]"></img>
               </label>
               <input type="file"  onChange={
                   async(e)=>{
                    //  setImageSrc(e.currentTarget.value);
                    setImageSrc(URL.createObjectURL(e.target.files![0]));
                    setImage(e.target.files![0]);
                   // console.log(e.target.files);
                       
                   }
               } accept=".jpg," alt="" id="myfile" className="hidden w-[20em]"/>
           
               <section className="mt-14 w-fit">
                <input type="text" className="w-72 py-4 px-4 bg-[#eaeaea] focus:outline-none focus:border-[#ff4a60] focus:border-2 focus:ring-1 focus:ring-[#ff4a60] rounded-xl" placeholder="Ice name" name="" id="" onChange={
                  (e)=>{
                    setIceName(e.currentTarget.value);
                  }}/> 
                

                <input type="text" className="w-72 py-4 px-4 bg-[#eaeaea] focus:outline-none focus:border-[#ff4a60] focus:border-2 focus:ring-1 focus:ring-[#ff4a60] rounded-xl block mt-9" placeholder="Category" name="" id="" onChange={
                  (e)=>{
                    setCategory(e.currentTarget.value); 
                  }}/>                  
                <div className="flex flex-row justify-between">
                <input type="range" min="5" max="30" value={price} className="mt-14 mb-14 h-2 appearance-none rounded-3xl bg-[#ff4a60] slider"
                onChange={(e)=>{
                     setPrice(e.currentTarget.value);
                 }}/>
                <h2 className="w-fit my-auto font-bold text-2xl text-[#6c69f9]">$ {price}</h2>
                </div>
                <button className="w-full bg-[#ff4a60] py-4 text-white rounded-full font-semibold"
                  onClick={()=>{
                    //  uploadImage();
                     saveIceItem();
                    // saveCategory();
                  }}
                >Add this item</button>
               </section>
            
             </div>
            <Footer/>
        </div>
    );
}
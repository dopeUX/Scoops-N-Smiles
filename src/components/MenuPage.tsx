import React,{useEffect, useState} from 'react';
import axios from 'axios';

export default function MenuPage(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/retrieve-categories').then(res=>{
            // console.log(res.data.items);
            setCategories(res.data.items);
        });
        axios.get('http://localhost:3000/retrieve-products').then(res=>{
            setProducts(res.data.items);
        })
        
    },[]);

   console.log(products)
    return (
        <div>
         {
           categories.map((item:any, index:number)=>{
             return (
              <section className='w-fit h-fit' key={index}>
                 <div className='flex'>
                 <div className='w-fit h-fit flex my-3'>
                  <h1 className='font-semibold relative text-xl z-10 my-1'>{item.category}</h1>
                  <div className='bg-[#ff4a60] w-16 ml-[-2.3em]'></div>
                 </div>   
                 <div className='w-32 h-1 bg-[#CBCBCB] my-auto rounded-full ml-5'></div>
                 </div>
                 
                 {products.map((item:any, index:number)=>{
                   return <h1 key={index} className='block'>{item.iceName}</h1>
                  })
                 }
              </section>
             );   
           })
         }
        </div>
        
       
    );
}
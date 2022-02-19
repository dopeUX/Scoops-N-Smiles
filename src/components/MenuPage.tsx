import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { get } from 'immer/dist/internal';

export default function MenuPage(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState<any[]>([]);
    // let arr=[];
    useEffect(()=>{
        axios.get('http://localhost:3000/retrieve-categories').then(res=>{
            // console.log(res.data.items);
            setCategories(res.data.items);
        });
         //  console.log(getProducts('cups'));
          // console.log(getProducts('cups',[]))
          
     },[]);
      // console.log(products)
    
     async function getProducts(category:string):Promise<any[]>{
      let arr:any[] = []; 
      const config = {
        headers:{
          category: category
        }
      }
       await axios.get('http://localhost:3000/retrieve-products', config).then(res=>{
        // setProducts(res.data.items);
        // setProducts(res.data.items);
        arr = res.data.items
      });
       return arr;
    }

      function mapArray(cat:string){
        let arr:Promise<any[]> = getProducts('cat')
        let y = Promise.all(arr);
        // y.then(res=>{
        //   console.log(res)
        // })
        // getProducts(cat).then(res=>{
        //   res.map((item,index)=>{
        //     console.log(item.iceName);
        //     return (<h1 key={index}>{item.iceName}</h1>)
        //   })
        // })
        
        return y;

     }
     console.log(mapArray('cups'));
   
  //  console.log(getProducts('cups'));
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
                 
                 { 
                
                  //  getProducts('cups').then(res=>{
                  //    res.map((item:any,index:number)=>{
                  //      return <h1 key={index}>{item.iceName}</h1>
                  //    })
                  //  })
                 }
              </section>
             );   
           })
         }
        </div>
        
       
    );
}
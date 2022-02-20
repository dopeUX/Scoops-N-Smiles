import React,{useEffect, useState} from 'react';
import axios from 'axios';

export default function MenuPage(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState<any[]>([]);
    const [category, setCategory] = useState({
      // cones : 'cones', 
      // cups : 'cups'
    });
    var arr:any[] = [];

    async function getCategories(){
     const res = await axios.get('http://localhost:3000/retrieve-categories');
      return res.data.items;
    }
    
    useEffect(() => {
      try {
        getCategories().then(res=>{
          setCategories(res)
        });

        getProducts('cups')
      } catch (error) {
        console.log(error)
      }
       
        //  console.log(c)
        
        //  getProducts('cups').then(res2=>{
        //    console.log(res2)
        //  })
         
        

        //  getProducts('cups').then(res=>{
        //   console.log(res)
        //   arr.push(...res);
        //   console.log("thisis", arr);
        //  })
         //  console.log(getProducts('cups'));
          // console.log(getProducts('cups',[]))
          
     },[]);

      // console.log(categories)
    //  temp()
     async function getProducts(category:string){     
      // let arr:any[] = []; 
      const config = {
        headers:{
          category: category
        }
      }
      return await axios.get('http://localhost:3000/retrieve-products', config).then(res=>{
        // setProducts(res.data.items);
      //  setProducts(res.data.items);
        if(res.status===200){
          setProducts(res.data.items);
           console.log(res.data.items)
        }
        return res.data.items;
      });
     }

      // function mapArray(cat:string):any{
      //   return getProducts('cups').then(
      //     res=>{
      //       return res
      //     }
      //   )
      // }
      
      
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
                 <div>
                 {
                   products.length && products.filter(product=>{
                     return product.category===item.category
                   }).map((item,i)=>{
                      return <h1 key={i}>{item.iceName}</h1>
                   })
                  
                  }
                 </div>
              </section>
             );   
           })
         }
        </div>
        
       
    );
}
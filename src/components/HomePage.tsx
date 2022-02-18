import React, {useState, useEffect, useRef} from 'react';
import ProductItem from './ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import { changeAuthPageState } from '../AppSlice';
import Footer from './Footer';
import {RootState} from '../store';
import axios from 'axios';
import jwt from 'jsonwebtoken';


export default function HomePage(){
   
    const [items,setItems] = useState([]);
    useEffect(()=>{
     axios.get('http://localhost:3000/retrieve-items/').then(res=>{
        setItems(res.data.items);
         console.log(items);
 
     })
    },[]);
    const dispatch = useDispatch();
    const authCheck = useSelector((state:RootState)=>{
       return state.appReducer.checkUserAuth
    });
   
    function checkIfUserLoggedIn(itemName:string):any{
       if(authCheck==='not logged in'){
          dispatch(changeAuthPageState('animate-slideDown'));
       }
       else{
         console.log(itemName+' order placed');     
         // const tok = jwt.decode(authCheck)
         // console.log(tok)    
         jwtVerify();
         // console.log(check)
       }
    }
    const jwtVerify = async()=>{
      let config = {
         headers:{
            'x-access-token':authCheck
         }
      } 
     await axios.get('http://localhost:3000/auth-check',config).then(
         res=>{
            console.log(res.data.email);
         }
      )
     }
    return (

          /* //TOP PICKS SECTION */
          
          <section className='px-0 py-5 pb-[6rem] w-full h-full md:pb-0 lg:px-20'>
           
          <div className='flex flex-col relative w-full h-fit md:flex-col-reverse'>      
             <div className='top-picks-section w-full h-fit md:text-center md:mx-auto md:w-fit'>    
               <div className='relative pl-5 w-fit h-fit md:mx-auto md:mt-20 lg:mt-20'>  
               <div className='w-14 h-full z-0 right-0 absolute bg-[#ff4a60]'></div>           
               <h1 className='w-fit h-fit z-10 mr-4 relative text-xl font-[600]'>Top Picks</h1>           
               </div>  
                 
               <ul className='mt-3 pl-5 py-7 w-full h-fit mx-auto relative flex overflow-x-scroll md:overflow-hidden md:w-fit'>
                {
                   items.map((item:any,index:number)=>{
                     return (
                        <ProductItem key={index}
                         iceName = {item.iceName}
                         price = {item.price}
                         onAddToCartClick={()=>{
                            checkIfUserLoggedIn(item.iceName);
                         }}/>
                     );
                   })
                }
               </ul>
               <button className='hidden bg-[#6c69f9] text-white text-sm md:flex mx-auto font-semibold mt-5 px-8 py-3 border-white border-2 rounded-full shadow-lg shadow-slate-400'>Explore more</button>
             </div> 
             
          {/* FIND YOUR PERFECT ICECREAM */}
             <section className='w-[83%] block relative mt-4 bg-[#6C69F9] ml-5 rounded-xl px-6 py-4 h-fit md:w-[90%] lg:py-8 lg:px-12 lg:rounded-3xl'>
                <h2 className='font-bold text-white text-xl relative z-10 lg:text-3xl '>Find Your Perfect<br/>Icecream</h2>
                <p className='font-semibold text-white relative text-sm z-10 mt-2 mr-16 md:w-64 lg:text-xl lg:w-72 lg:my-5'>A little lick of frozen cream every now and then, goes a long, long way.</p>
                <button className='text-black bg-white rounded-md relative z-10 px-3 py-2 text-sm font-semibold cursor-pointer mt-5 lg:text-lg lg:px-5 lg:py-4 hover:bg-black hover:text-white'>Explore menu</button>
                <img alt="" src="./assets/image4.jpg" className='w-36 absolute bottom-0 right-3 mb-[-3.2rem] md:hidden'/> 
                <img alt="" src="./assets/frame1.png" className='w-[25em] absolute hidden bottom-0 right-2 md:flex lg:w-[36em] md:mb-[-5em] lg:mb-[-5em] lg:right-28'/>
                 
             </section>

          </div>    
          
          
           {/* CRAFTED WITH ALPINE SPIRIT */}
          <section className=' w-[100%] h-fit mx-auto pt-5 mt-7 text-center'>
             <div className='w-full relative h-fit py-5 z-0 bg-[#F2F1F1] mr:w-[65%] mr:ml-auto mr:mr-0 mr:pl-20 mr:pb-20 mr:pt-16 mr:text-left'>
             <h2 className='font-semibold text-lg z-10 text-[#ff4a60] mr:text-3xl mr:mr-36 mr:mb-10'>Crafted With Alpine Spirits</h2>
             <p className='mx-5 my-3 text-[#8d5c5c] text-sm font-medium mr:mx-0 mr:mr-24 mr:mb-10'>We put a secret ingredient in everything we do. Care, purity, passion and joy, all combine to form our alpine spirit : The way we take care of our cows Matilda, sophie and candy.</p>
             <button className='px-9 py-3 mt-2 bg-[#6C69F9] text-white text-sm font-semibold rounded-full shadow-lg shadow-slate-400 stroke-white border-[3px] border-white'>Read more</button>
             <img alt="" src='./assets/frame2.png' className='w-80 hidden absolute mr:flex z-10 bottom-0 left-0 ml-[-15em]'/>
             </div>

          </section>
          
           {/* NATURE'S BEST INGREDIENTS */}
          <section className='w-[100%] mt-0 mx-auto mr:mt-14'>
             <div className='w-full relative pt-3 pb-10 bg-[#f2f1f1] h-fit mr:w-[65%] mr:text-left mr:pl-14 mr:pr-0 mr:pb-20 lg:pb-40 lg:pl-20 xl:pb-48'>
             <h2 className=' w-full text-center font-semibold text-lg text-[rgb(255,74,96)] mr:text-3xl mr:pt-5 mr:w-[50%] mr:text-left lg:ml-4 lg:mt-5 xl:w-[40%]'>Nature's Best Ingredients</h2>
             <div className='w-fit h-fit mr:ml-[20em] lg:ml-[30em] mr:mt-[-3em] mr:mb-auto xl:ml-[37em] xl:mt-0'> 
             <img src="./assets/image5.jpg" alt="" className='hidden w-[23em] lg:w-[30em] mr:block mr:mt-0 xl:w-[42em]' />
             <p className='ml-8 w-fit mr-40 mt-7 my-3 text-[#6D6D6D] relative z-20 text-sm font-medium mr:w-[22em] mr:ml-2 mr:mr-2 xl:mr-10'>"You can't buy happiness, but you can buy ice cream, and that is pretty much the same thing."</p>
             <button className='px-5 py-3 ml-6 mt-2 bg-[#6C69F9] text-white text-sm font-semibold rounded-full shadow-lg shadow-slate-400 stroke-white border-[3px] border-white mr:ml-0'>Read more quotes</button>
             </div>
             <img alt="" src='./assets/image12.jpg' className='w-32 absolute top-16 right-5 mr:left-16 mr:bottom-24 mr:top-auto mr:w-[12em] lg:w-[15em] lg:ml-8 xl:w-[20em]'/>
             </div>
          </section>

            {/* TESTIMONIALS SECTION */}
           <section className='mt-5'>
             <div>
                <h2 className='text-center font-medium'>What our customers say</h2>
                <ul className='w-full table text-center'>
                   <li className='inline-block'>
                      <div className='w-fit shadow-inner py-5 px-5 pb-10 rounded-2xl mx-5 my-5 shadow-slate-400'>
                         <div className='flex'>
                            <img alt="" src='./assets/tm1.jpg' className='w-10 rounded-full'/>
                            <h3 className='w-fit mx-5 text-[#ff4a60] my-auto font-semibold'>Jane Doe</h3>
                            <img alt="" src='./assets/doubleq.svg' className='w-10 ml-auto mr-3'/>
                         </div>
                            <p className='w-72 text-[#505050] ml-2 mt-3 font-medium text-sm'>I’m eating the entire pint now so that it won’t be able to tempt me later.</p>
                      </div>
                   </li>
                   <li className='inline-block'>
                      <div className='w-fit shadow-inner py-5 px-5 pb-10 rounded-2xl mx-5 my-5 shadow-slate-400'>
                         <div className='flex w-full'>
                            <img alt="" src='./assets/tm1.jpg' className='w-10 rounded-full'/>
                            <h3 className='w-fit mx-5 text-[#ff4a60] my-auto font-semibold'>Jane Doe</h3>
                            <img alt="" src='./assets/doubleq.svg' className='w-10 ml-auto mr-3'/>
                         </div>
                            <p className='w-72 text-[#505050] ml-2 mt-3 font-medium text-sm'>I’m eating the entire pint now so that it won’t be able to tempt me later.</p>
                      </div>
                   </li>
                </ul>
             </div>            
            </section>  
            
            {/* //FOOTER SECTION ------- */}
          
        </section>
    );
}
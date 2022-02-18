import React from "react";

export default function CartItem(){
    let quantity:number = 3;
    return(
        <div className="block w-fit mt-5">
         <div className="flex w-fit">
          <img src="/assets/ic3.jpg" className="rounded-full w-24 h-24 mr-5 shadow-lg shadow-slate-500" alt=""/>
          <div className="block w-fit">
              <h2 className="font-semibold text-lg mt-1">Mint Chocolate Chip</h2>
              <h3 className="mt-1 mb-3 text-[#797979]">quantity : <span className="font-bold text-black">{quantity}</span></h3>
               <div className="justify-between flex">
               <h3 className="text-[#ff4a60] font-semibold">$14</h3>
               <h4 className="text-[#ff4a60] font-semibold cursor-pointer">remove</h4>
               </div>
          </div>
         </div>
          <div className="w-[80%] h-[2px] bg-[#a5a2a2] mx-auto mt-9 rounded-full"></div>
        </div>
    );
}
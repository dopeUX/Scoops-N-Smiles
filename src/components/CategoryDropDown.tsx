import React from "react";

export default function CategoryDropDown(){
    return(
       <ul className="menu">
        <li>
      <a href="#" className="">Category</a>
    
     <ul>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
      </ul>
     </li>
    </ul>
   
    );
}
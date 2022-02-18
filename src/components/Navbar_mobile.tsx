import React,{useState} from 'react';
import { Link, To } from 'react-router-dom';
const NavbarItems = [
  {
    menuIcon : "./assets/home_icon.svg",
    menuItem :'Home'
  },
  {
   menuIcon : "./assets/menu_icon.svg",
   menuItem :'Menu'
 },
 {
   menuIcon : "./assets/store_icon.svg",
   menuItem :'Store'
 },
 {
   menuIcon : "./assets/profile_icon.svg",
   menuItem :'Profile'
 },
  
]
const activeIndex = [
  true,
  false,
  false,
  false
];

const routesNavigation: To[] = [
  '/',
  '/menu',
  '/stores',
  '/profile'
]

export default function NavbarMobile(){
    
   
    const [navbarIndex, setNavbarIndex] = useState(0);


    return(
        <nav className='bg-[#141414] w-full z-20 h-fit mx-auto fixed bottom-0 left-0 right-0 px-3 py-2 rounded-t-lg sm:w-[80%] md:hidden' >
           <ul className='w-full justify-between px-4 py-0 flex'>
             {  NavbarItems.map((item:any, index:number)=>{
                   return (
                   <Link to={routesNavigation[index]} key={index}>
                    <li className='w-fit cursor-pointer block justify-center align-middle'
                     onClick={()=>{
                      setNavbarIndex(index);
                      activeIndex[activeIndex.indexOf(true)]=false;
                      activeIndex[index]=true;
                     
                     }
                     }>
                    
                     {/* <div  className="w-fit "> */}
                     <img alt="" src={item.menuIcon} className={`w-14 ${activeIndex[index]?'apply-filter':null}`}/>
                        <h3 className={`text-center font-[600] ${activeIndex[index]?'text-[#FF4a60]':'text-gray-400'}`}>{item.menuItem}</h3>
                     {/* </div> */}
                    </li>
                    </Link>
                   );
                })
            }
             
           </ul>
        </nav>
    );
}
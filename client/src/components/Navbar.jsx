import React from 'react'
import {MdMemory } from "react-icons/md";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);


const Navbar = () => {
  return (
    <nav className ="w-full flex md:justify-center justify-between p-4">
      <div className=" text-white pt-6 pl-6 text-3xl font-mono text-left"> 
      Memories 
      </div>
      <div className=" text-white pt-6 text-3xl font-mono text-left">
      <MdMemory />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial font-mono pt-8">
        {["Home","Videos","Marketplace","Community"].map((item,index)=>(<NavBarItem key={item+index} title={item}/>))}
      </ul>
      <div className="pt-6">
        <li className=" text-white bg-[#2952e3] list-none mx-2 py-2 px-6 rounded-full cursor-pointer font-mono hover:bg-[#2546bd] h-10 ">
          Login
        </li>
      </div>
    </nav>
  )
}

export default Navbar
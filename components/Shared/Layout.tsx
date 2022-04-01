import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "../Sidebar";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
 
   
   return (

    <>
    <div className="flex">
    <Sidebar/>

      {children}
     
      </div>
    

     
     
    </>
)

};

export default Layout;


import Logo from "../assets/svg/Logo";
import User from "../assets/svg/User";
import Eye from "../assets/svg/Eye";
import Layout from "../components/Shared/Layout";


const Question = () => {
 
  return (
    <Layout>
    <div className="flex w-4/5  justify-center h-screen ">
    <div className="container mx-auto">
   <div className="m-8 rounded overflow-hidden">
   
     <div className="group outline-none accordion-section" tabindex="1">
       <div className="group  bg-slate-300 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
         <div className="group-focus:text-white transition ease duration-500">
           Title for Tab - 1
         </div>
         <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
           +
         </div>
       </div>
       <div className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
         <p className="p-2 text-gray-400 text-justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
           repellat amet doloribus consequuntur eos similique provident
           tempora voluptates iure quia fuga dicta voluptatibus culpa
           mollitia recusandae delectus id suscipit labore?
         </p>
       </div>
     </div>
    
   
     <div className="group outline-none accordion-section" tabindex="2">
       <div className="group  bg-slate-300 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
         <div className="group-focus:text-white transition ease duration-500">
           Title for Tab - 2
         </div>
         <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
           +
         </div>
       </div>
       <div className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
         <p className="p-2 text-gray-400 text-justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
           repellat amet doloribus consequuntur eos similique provident
           tempora voluptates iure quia fuga dicta voluptatibus culpa
           mollitia recusandae delectus id suscipit labore?
         </p>
       </div>
     </div>
    
   
     <div className="group outline-none accordion-section" tabindex="3">
       <div className="group  bg-slate-300 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
         <div className="group-focus:text-white transition ease duration-500">
           Title for Tab - 3
         </div>
         <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
           +
         </div>
       </div>
       <div className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
         <p className="p-2 text-gray-400 text-justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
           repellat amet doloribus consequuntur eos similique provident
           tempora voluptates iure quia fuga dicta voluptatibus culpa
           mollitia recusandae delectus id suscipit labore?
         </p>
       </div>
     </div>
    
   </div>
 </div>


    </div>
    </Layout>
  );
};

export default Question;

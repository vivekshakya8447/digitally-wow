import { useState } from "react";

export default function Header(){
    const [showMe, setShowMe] = useState(false);
    const toggle = () =>  {
    setShowMe(!showMe);
}

      return (
        <>
          <button >option 1 </button>
          <button >option 2</button>
          <button >option 3</button>
          <button onClick={()=>toggle()}>other</button>
       <div>
          
          <div style={{display: showMe?"block":"none" }}>
          <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                        	Who are you? Describe your business in 1 line
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="phone"  />
                        
                    </div>
                </div>
          </div>
         </div>
        </>
      );
    }
import { useState } from "react";
import { CFormCheck } from '@coreui/react'

export default function App() {
  

  return (
    <div className="App">
       <div  className="flex justify-between">
     <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" className="ml-3 text-white flex w-1/3 justify-around items-center" label="Default radio"/>
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" className="ml-3 text-white flex w-1/3 justify-around items-center" label="Checked radio" defaultChecked/>
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" className="ml-3 text-white flex w-1/3 justify-around items-center" label="Checked radio" defaultChecked/>

    </div>
    </div>
  );
}
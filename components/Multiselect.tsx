
import Logo from "../assets/svg/Logo";
import User from "../assets/svg/User";
import Eye from "../assets/svg/Eye";

import From from "@Components/searchbar/formdata";

const multiselect = () => {


    return (
        <>
            <label className="block uppercase tracking-wide text-white text-xs font-bold " >Select your favourite accessories: </label >
            <div className="flex">
                <div className="flex items-center pr-2 pb-2 appearance-none w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                    <input type="checkbox" id="1" name="acs" value="Mobile" /><span className="block pl-3 uppercase tracking-wide text-white text-xs font-bold " >Mobile</span>
                </div>
                <div className="flex items-center pr-2 pb-2 appearance-none w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                    <input type="checkbox" name="acs" value="Mobile" /><span className="block pl-3 uppercase tracking-wide text-white text-xs font-bold " >Mobile</span>
                </div>
                <div className="flex items-center pr-2 pb-2 appearance-none w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                    <input type="checkbox" name="acs" value="Mobile" /><span className="block pl-3 uppercase tracking-wide text-white text-xs font-bold " >Mobile</span>
                </div>

            </div>
        </>
    );
};

export default multiselect;

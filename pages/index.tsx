
import Logo from "../assets/svg/Logo";
import User from "../assets/svg/User";
import Eye from "../assets/svg/Eye";


const homePage = () => {

    return (
        <div className="flex items-center justify-center  h-screen ">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
            </form>
            {/* <div className="containner px-20 my-20 mx-auto">
                    <div className="divide-y">
                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none"> Search Engine Optimization</h1>
                                <p className="text-xs text-gray-500 mt-2 leading-4">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">Element Definition</h1>
                                <p className="text-xs text-gray-500 mt-2 leading-4">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">Element Definition</h1>
                                <p className="text-xs text-gray-500 mt-2 leading-4">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
    );
};

export default homePage;

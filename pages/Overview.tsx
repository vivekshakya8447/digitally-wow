
import Logo from "../assets/svg/Logo";
import User from "../assets/svg/User";
import Newform from "../components/AddForm";
import Eye from "../assets/svg/Eye";
import Layout from "../components/Shared/Layout";


const Login = () => {

    return (
        <Layout>
            <div className=" w-4/5  justify-center ">
                <div className="w-full flex px-10 p-4 md:shadow">
                    <div className="items-center hidden px-2  w-full space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">

                        <span>
                            <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none bg-gray-100 shadow border"
                        />
                    </div>
                    {/* <button className="login-bg  w-1/5 text-white font-bold py-2 px-4 rounded">
  Add form
</button> */}
                    <Newform />
                </div>
                <div className="containner px-20 my-10 mx-auto">
                    <div className="divide-y">
                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none"> Search Engine Optimization</h1>

                            </div>
                        </div>

                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">Social Media Marketing</h1>

                            </div>
                        </div>

                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">paid marketing</h1>

                            </div>
                        </div>
                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">graphic design for digital marketing</h1>

                            </div>
                        </div>
                        <div className="flex items-start space-x-3 py-6">
                            <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                            <div className="flex flex-col">
                                <h1 className="text-gray-700 font-medium leading-none">Website Development</h1>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </Layout>
    );
};

export default Login;

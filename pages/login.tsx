
import Logo from "../assets/svg/Logo";
import User from "../assets/svg/User";
import Eye from "../assets/svg/Eye";
import Layout from "../components/Shared/Layout";


const Login = () => {
 
  return (
    <Layout>
    <div className="flex w-4/5 items-center justify-center h-screen ">
      <div className=" w-2/3 login-bg py-32 login-radius">
      <form  className="px-10">
       <div className="flex justify-center">
       <Logo />
       </div>
      <div className="flex justify-center flex-col pt-6">
      <div className="flex justify-center items-center">
         <div className=" relative left-7 z-10">
         <User />
         </div>
       <input placeholder="Email"  type="email"  
        className="border-2 px-10 rounded-2xl  text-white   border-white"
      />
      
       </div>
      
      </div>
      
     
      <div className="flex justify-center flex-col py-6">
      <div className="flex justify-center items-center">
         <div className=" relative left-7 z-10">
         <Eye />
         </div>
       <input placeholder="Password"  type="password" 
         
         className="border-2 px-10 rounded-2xl  text-white   border-white"
        />
       
     
       </div>
      
      </div>
    
      
      <div className="text-center py-6">
        <button className="text-white btn-color rounded-2xl text-center py-3 ml-4 text-xl font-montserrat font-semibold w-5/12">SIGN IN</button>
      </div>
      </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;

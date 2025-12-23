import React from 'react';
import {Link} from 'react-router-dom';
import { useForm} from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
     const userInfo = {
            emailId: data.emailId,
            password: data.password
          }
        
          await axios.post("https://book-store-app-wc75.onrender.com/user/login", userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data){
             toast.success('Loggedin Successfully!');
              document.getElementById("login_modal")?.close();
             setTimeout(()=>{
            
              window.location.reload(); 
              localStorage.setItem("Users",JSON.stringify(res.data.user));
             },1000)
                
            }
           
          })
          .catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
             document.getElementById("login_modal")?.close();
            setTimeout(()=>{},2000)
           }
          });
  }
  return (

    <>

    <div className='font-serif '>
      <dialog id="login_modal" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => {
    document.getElementById("login_modal")?.close();
    navigate("/");
  }}>✕</button>
    
    
    <h3 className="font-bold text-2xl text-center">Login</h3>
    <div className='ml-8 flex flex-col justify-center mt-8 '>
        <div className='text-xl'>Email</div>
        <input type="email" placeholder='Enter your email' className='border p-2 rounded w-[400px] outline-none ' {...register("emailId", { required: true })} ></input>
        {errors.emailId && <span className='mb-8 text-red-500'>This field is required</span>}
        <div className='text-xl'>Password</div>
        <input type="password" placeholder='Enter your password' className='border p-2 rounded w-[400px] outline-none' {...register("password", { required: true })} ></input>
        {errors.password && <span className=' text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-8'>
        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 font-semibold '>Login</button>
        <p>Not registered? {" "}<Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup!</Link></p>
    </div></form>
  </div>
</dialog>

    </div>
    
    </>

  )
}

export default Login

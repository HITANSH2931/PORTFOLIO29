import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;


const Form = () => {

    const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange'});
    const [loading,setLoading] = useState(false);

    const SubmitData = async (data) =>{

        setLoading(true);

         try {
       const res = await emailjs.send(
       serviceId,
       templateId,
       data,
       publicKey
      );

    console.log("Email sent:", res.text);
    toast.success("Email is Sent to Website Owner",{
       
       className: 'text-[14px] text-gray-700 font-semibold rounded-lg'
    });
   
    }

    catch (err) {
     console.error("Email error:", err);
       toast.warn("Email is Sent to Website Owner",{
       
       className: 'text-[14px] text-red-700 font-semibold rounded-lg'
    });
     
  }

   finally{
    reset();
    setLoading(false);
   }
 }

  return (
    <div className='border border-solid border-gray-800 rounded-lg px-6 py-10 '>
         
         <form onSubmit={handleSubmit(SubmitData)} className='flex flex-col gap-10'>
        <h1 className='text-white font-bold text-3xl text-center'>Let's Work Together</h1>

        <div className='flex flex-col gap-1.5'>
        <input type='text' placeholder='Name'
               className={`text-gray-100  font-semibold border border-solid ${errors.name ? 'border-red-500' : 'border-gray-600'}  focus:outline-none focus:border-blue-400 px-3.5 py-2.5 rounded-lg w-full`}
              {...register("name", { required: "Name is required" })}
        />

         {errors.name && <p className="pl-3 text-red-500 text-[12px]">{errors.name.message}</p>}


        </div>

        <div className='flex flex-col gap-1.5'>
        <input type='text' placeholder='Email' 
               className={`text-gray-100 font-semibold border border-solid ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:border-blue-400 px-3.5 py-2.5 rounded-lg w-full`}
               {...register("email", { required: "Email is required" })}
               />

          {errors.email && <p className="pl-3 text-red-500 text-[12px]">{errors.email.message}</p>}

         </div> 
      
        <div className='flex flex-col gap-1.5'>
        <textarea placeholder='Tell your Idea' 
                  className={`h-25 text-gray-100  font-semibold border border-solid ${errors.idea ? 'border-red-500' : ' border-gray-600'} focus:outline-none focus:border-blue-400 px-3.5 py-2.5 rounded-lg w-full`}
                  {...register("idea", { required: "Your Idea Matters" })}
               
        >

        </textarea>

         {errors.idea && <p className="pl-3 text-red-500 text-[12px]">{errors.idea.message}</p>}


        </div>

        <button disabled={loading} className={`text-white ${!loading ? ' bg-blue-600 hover:bg-blue-700' : 'cursor-not-allowed bg-gray-500 hover:bg-gray-600'} font-semibold  rounded-lg py-2.5 `}>Send Message</button>
        
        </form>
    </div>
  )
}

export default Form

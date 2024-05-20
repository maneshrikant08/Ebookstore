import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div >
     
     <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Sign Up </h3>
    <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name" className='w-80 px-3 border rounded-md outline-none'
                
              />
              <br />
             
            </div>
    <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email" className='w-80 px-3 border rounded-md outline-none'
                
              />
              <br />
             
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className='w-80 px-3 border rounded-md outline-none'
              
              />
              <br />
              
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              
            </div>
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Sign Up
              </button>
              <p>
                Have Account?{" "}
                <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>{" "}
              </p>
            </div>  

            

   
  </div>
</div>
    </div>
      
    </div>
  )
}

export default Signup

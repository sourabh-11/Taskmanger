import React from 'react'
import { useState } from 'react'

const Login = ({handllogin}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHndrer =(e)=>{
        e.preventDefault()
        handllogin(email,password)
        setemail("")
        setpassword("")
        
    }
    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className="border-2 border-emerald-600 p-20">
                <form 
                onSubmit={(e)=>{
                    submitHndrer(e)
                }} className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value);
                        
                    }}
                    required className='border-2 border-emerald-600 rounded-3xl px-5 py-2 text-xl outline-none bg-transparent ' type="text" placeholder='Email' />
                    <input
                     value={password}
                     onChange={(e)=>{
                         setpassword(e.target.value);
                         
                     }}
                     required className='border-2 border-emerald-600 rounded-3xl px-5 py-2 text-xl outline-none bg-transparent mt-2 ' type="password" placeholder='Password' />
                    <button className='border border-none rounded-2xl px-10 py-2 text-xl outline-none bg-violet-800 text-black   mt-2 ' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
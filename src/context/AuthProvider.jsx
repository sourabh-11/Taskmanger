import React, { createContext } from 'react'
import { useState,useEffect } from 'react'
import { Getlocalstorage, Setlocalstorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {


   const [userdata, setuserdata] = useState(null)

    useEffect(() => {
        Setlocalstorage()
        const {employees,admin} = Getlocalstorage()
        setuserdata({employees,admin})

    }, [])
    
   
   

  return (
    <div>
        <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
import React from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDaskboard from './components/Daskboard/EmployeeDaskboard'
import AdminDaskboard from './components/Daskboard/AdminDaskboard'
import { Getlocalstorage, Setlocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { useContext } from 'react'

const App = () => {
 const [user, setUser] = useState(null)
 const [loggedInUserData, setloggedInUserData] = useState(null)
 const authdata  = useContext(AuthContext)


// console.log(authdata.employees);

// useEffect(()=>{
//   if(authdata)
//   {
//      const  loggedInUser = localStorage.getItem("loggedInUser") 
//      if(loggedInUser)
//      {
//       setUser(loggedInUser.role)
//      }
         
//   }
// },[authdata])



 const handllogin = (email,password) =>{
   if(email  == 'admin@123' && password =='123')
   {
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
  }
  else if(authdata )
    {
      const employee =  authdata.employees.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employees'}))
      }
   }
   else{
    alert('invalid')
   }
 }




  return (
    <>
    {!user ?  <Login handllogin = {handllogin}/> :' '}
   
    {user =='admin'?<AdminDaskboard/> :(user=='employee' ? <EmployeeDaskboard data ={loggedInUserData} />:null)}
    {/* <AdminDaskboard/> */}
    </>
  )
}

export default App
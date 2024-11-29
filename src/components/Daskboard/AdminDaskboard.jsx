import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'

const AdminDaskboard = () => {
    return (
        <div className='h-screen w-full p-10 '>
            <Header />
            <CreateTask/>
            <Alltask/>
           
        </div>
    )
}

export default AdminDaskboard
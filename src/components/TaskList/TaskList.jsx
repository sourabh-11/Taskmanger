import React from 'react'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='h-[55%] w-full overflow-x-auto py-5 mt-10 flex items-center gap-5 flex-nowrap'>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-red-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-blue-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-violet-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-orange-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-pink-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>
            <div className="h-full w-[300px] flex-shrink-0 p-5 bg-yellow-300 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3  text-sm py-1 rounded ">High</h3>
                    <h4>20 FEB 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Make a youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo laborum praesentium possimus, sapiente repellendus!</p>
            </div>


        </div>
    )
}

export default TaskList
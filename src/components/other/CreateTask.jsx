import React from 'react'

const CreateTask = () => {
  return (
    <div className=' bg-[#1C1C1C] p-5 rounded-xl' >
    <form className='flex justify-between' >
        <div className='w-1/2'>

            <div className='mb-2'>
                <h3 >Task Title</h3>
                <input type="text" placeholder='    Make a ui Desine' className='bg-transparent border-gray-400 border-2 w-[500px] rounded' />
            </div>
            <div className='mb-2'>
                <h3 className='text-gray-300'>Date</h3>
                <input type="date" name="" id="" className='bg-transparent border-gray-400 border-2 w-[500px] rounded' />
            </div>
            <div className='mb-2'>
                <h3 className='text-gray-300'>Asign to </h3>
                <input type="text" name="" id="" placeholder='emp name' className='bg-transparent border-gray-400 border-2 w-[500px] rounded' />
            </div>
            <div className='mb-2'>
                <h3 className='text-gray-300'>Catrgory</h3>
                <input type="text" placeholder='desine ya dev' className='bg-transparent border-gray-400 border-2 w-[500px] rounded' />
            </div>
        </div>
      
            <div className='mb-2 flex flex-col ' >
                <h3>Description</h3>
                <textarea className= ' w-[500px] bg-transparent border-gray-400 border-2 mb-2 rounded' name="" id="" cols="30" rows="10"></textarea>
                <button className='w-[500px] text-white bg-green-300 p-3 rounded '>CreatTask</button>
            </div>
     




    </form>
</div>
  )
}

export default CreateTask
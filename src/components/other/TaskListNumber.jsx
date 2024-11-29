import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div>
        <div className="flex screen mt-10 justify-between  gap-5 ">
            <div className="rounded-xl w-[45%] px-10 py-5 bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] px-10 py-5 bg-blue-400">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] px-10 py-5 bg-yellow-400">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] px-10 py-5 bg-gray-400">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumber
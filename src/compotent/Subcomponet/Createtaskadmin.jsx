import React from 'react'

const Createtaskadmin = () => {
  return (
    <>
      <div className="w-1/2 h-[100%] bg-black  px-4 mt-4  rounded-lg  ">
        <h1 className="text-white text-2xl font-medium m-4">Create Task</h1>
        <form>
          <h3 className="text-white   mt-2">Name</h3>
          <input
            type="text"
            className="w-full h-10 rounded-lg mt-2 px-2 text-white border border-blue-900"
            placeholder="enter name"
          />
          <h3 className="text-white   mt-2">Task</h3>
          <textarea
            type="text"
            className="w-full h-20 rounded-lg mt-2 px-2 text-white border border-blue-900"
            placeholder="enter task"
          />
          <label className="block text-sm text-gray-400 mb-1">
            Enter Deadline
          </label>
          <input
            type="date"
            className="w-full h-10 rounded-lg px-2 text-white border border-blue-900 bg-gray-900"
          />
          <label className="block text-sm text-gray-400 mb-1 mt-2">
            assign To
          </label>
          <input
            type="text"
            className="w-full h-10 rounded-lg px-2 text-white border border-blue-900"
            placeholder="enter name"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 active:scale-90 transition mt-4">
            Create Task
          </button>
        </form>
      </div>

    </>
  )
}

export default Createtaskadmin

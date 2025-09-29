import React from "react";

const Tasklistcounter = ({data}) => {
  const tasks = data?.tasks[0].taskSummary || [];
  
  
  return (
    <div
      className="flex
    justify-around gap-4 h-[20%]  "
    >
      <div className=" w-100 bg-[#db947e] rounded-lg mt-2   hover:scale-102 active:scale-90 transition flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{tasks.failed}</h1>
        <h3 className="text-xl">failed</h3>
      </div>
       <div className="w-100  bg-[#f3f16f] rounded-lg mt-2 p-4  hover:scale-102 active:scale-90 transition flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{tasks.active}</h1>
        <h3 className="text-xl">active</h3>
      </div>
       <div className="w-100 bg-[#99f171] rounded-lg mt-2 p-4  hover:scale-102 active:scale-90 transition flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{tasks.completed}</h1>
        <h3 className="text-xl">completed</h3>
      </div>
       <div className="w-100  bg-[#7173e4] rounded-lg mt-2 p-4  hover:scale-102 active:scale-90 transition flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{tasks.new}</h1>
        <h3 className="text-xl">new</h3>
      </div>
      
    </div>
  );
};

export default Tasklistcounter;

import React from "react";

const Tasklist = ({ data }) => {
  if (!data || !data.tasks || data.tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  const subtasks = data.tasks[0]?.subtasks || [];

  return (
    <div
      id="Tasklist"
      className="w-full h-[55%] rounded-lg mt-4 p-4 flex justify-start items-center gap-4 overflow-x-auto "
    >
      {subtasks.map((sub) => (
        <div
          key={sub.id}
          className="flex-shrink-0 w-[300px] h-full bg-yellow-400 rounded-xl"
        >
          <div className="flex justify-between items-center p-2 bg-black text-white rounded-t-lg">
            <h3 className="text-xl font-bold bg-red-900 rounded-full w-[30%] text-center">
              {sub.priority || "N/A"}
            </h3>
            <h2 className="text-sm">{sub.date}</h2>
          </div>
          <h2 className="text-l p-1">{sub.name}</h2>
          <p className="p-1">{sub.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;

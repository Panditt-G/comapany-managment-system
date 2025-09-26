import React from "react";
import Header from "../Subcomponet/header";
import Createtaskadmin from "../Subcomponet/Createtaskadmin";
import Tasklist from "../TaskLIst/Tasklist";
import Adminlist from "../Subcomponet/Adminlist";

const AdminDashboard = () => {
  return (
    <div className="p-1 bg-[#1c1c1c] h-screen ">
      <Header />
      <div className="flex gap-4 h-[80%]">
        <Createtaskadmin />
        <Adminlist />
      </div>
    </div>
  );
};

export default AdminDashboard;

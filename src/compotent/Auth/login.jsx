import React, { useState } from "react";

const Login = ({handlelogin}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const submithandler = (e) => {
    e.preventDefault();
    handlelogin(email,password)
    setemail('');
    setpassword('');
    
   
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 border border-gray-300 rounded-lg shadow-lg">
        <form onSubmit={submithandler}>
          <input
          value={email}
          onChange={(e)=>setemail(e.target.value)}
            required
            type="email"
            placeholder="enter your email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600
            active:scale-95 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

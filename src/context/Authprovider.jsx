import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage } from "../utilitis/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
const [userdata, setuserdata] = useState(null);

useEffect(() => {
  const data = getlocalStorage();
  setuserdata(data);
}, []);
// console.log(userdata);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

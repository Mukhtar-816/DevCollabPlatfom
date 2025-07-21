import { useDispatch } from "react-redux";

import { createContext, useContext, useState, useEffect } from "react";

//create context, lightweight global state, redux is same but for high scale
const AuthContext = createContext();

//using context
export const useAuth = () => useContext(AuthContext);

//context provider
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    function checkAuth() {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setAuthenticated(true);
      }
      setLoading(false); // <-- MARK DONE CHECKING
    }

    checkAuth();
  }, [authenticated]);

  const handleAuthenticated = (value) => {
    setAuthenticated(value);
  };

  return (
    <AuthContext.Provider
      value={{ loading, authenticated, handleAuthenticated, userData, setLoading }}
    >
      {children} {/* ← prevent rendering until check finishes */}
    </AuthContext.Provider>
  );
};

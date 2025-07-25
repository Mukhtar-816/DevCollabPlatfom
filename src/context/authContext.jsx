import { useDispatch, useSelector } from "react-redux";
import { createContext, useContext, useState, useEffect } from "react";
import { logout } from "../redux/slices/user/userSlice";
import { userProfile } from "../redux/slices/user/userAction";

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

  function checkAuth() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAuthenticated(true);
      dispatch(userProfile())
        .then((res) => {
          console.log("getUserProfile", res);
        })
        .catch((err) => {
          console.log("getUserProfile: ", err);
        });
    } else {
      setAuthenticated(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    checkAuth();
  }, [authenticated]);

  const handleAuthenticated = (value) => {
    setAuthenticated(value);
  };

  const Logout = async () => {
    dispatch(logout());
    checkAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        handleAuthenticated,
        userData,
        setLoading,
        Logout,
      }}
    >
      {children} {/* ← prevent rendering until check finishes */}
    </AuthContext.Provider>
  );
};

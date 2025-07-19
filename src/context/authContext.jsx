import { useDispatch } from "react-redux";

const { createContext, useContext, useState } = require("react");

//create context, lightweight global state, redux is same but for high scale
const AuthContext = createContext();

//using context
export const useAuth = () => useContext(AuthContext);

//context provider
export const AuthProvoder = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();

    



  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    let isLoggedIn = !!token;
    console.log("isLoggedIN", isLoggedIn);

    //logout

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextvalue = useContext(AuthContext);
    if (!authContextvalue) {
        throw new Error("usaAuth used outside of rhe provider");
    }

    return authContextvalue;
};
import React, {createContext, useState} from "react";

export const AuthContext = createContext({
    auth: null,
    authenticate: () => {},
    logout: () => {}
})

const {Provider} = AuthContext;

export const AuthProvider =  ({children}) => {
    const [auth, setAuth] = useState(null); //guardar el token
    const authenticate = (token) => {
        setAuth({token})
    }

    const logout = () => {
        setAuth(null);
    }

    return (
        <Provider value={{ auth, authenticate, logout}}>{children}</Provider>
    )
}
import { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, auth, setUserLocalStorage } from "../services/AuthService/Auth";

export const AuthContext: any = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser]: any = useState(null);

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user)
        }
    }, [])

    async function authenticate(userData: any) {
        const res = await auth(userData);

        if (res.status === 401) {
            return res
        }
        const payload: any = { token: res.data.token,  name: res.data.nome, email: res.data.email, image: res.data.image, user_type: res.data.user_type };
        setUser(payload);
        setUserLocalStorage(payload);
        return res
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
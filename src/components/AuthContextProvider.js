import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom'

export default function AuthContextProvider({ children }) {
    // unAuthState為未登入狀態
    const unAuthState = {
        // authorized 如果為true為已登入的狀態，預設要給false
        authorized: false,
        sid: 0,
        account: "",
        token: "",
    };
    // 先查看 localStorage 的資料是否表示已登入，getItem為拿到登入的資訊
    const localAuthStr = localStorage.getItem("auth");
    let localAuth = {...unAuthState};
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
            }
        } catch (ex) {}
    }
    const [auth, setAuth] = useState(localAuth);
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("auth");
        setAuth({...unAuthState});
        // navigate是轉向到('/')為首頁
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ ...auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

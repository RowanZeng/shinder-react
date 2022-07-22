import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppAuth from "./AppAuth";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
// import ThemeContext, {themes} from "./components/ThemeContext";
import MyDraw from "./components/MyDraw";
import Container from "./Container";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Container>
                {/* <ThemeContext.Provider value={themes.dark}> */}
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/list-auth" element={<AppAuth />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/my-draw" element={<MyDraw />} />
                    </Routes>
                {/* </ThemeContext.Provider> */}
            </Container>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
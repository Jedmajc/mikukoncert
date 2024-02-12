import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from "./pages/Start.jsx";
import Info from "./pages/Info.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Opinie from "./pages/Opinie.jsx";
import Bilety from "./pages/Bilety.jsx";
import Kupowanie from "./pages/Kupowanie.jsx";
import Rejestracja from "./pages/Rejestracja.jsx";
import Logowanie from "./pages/Logowanie.jsx";
import Konto from "./pages/Konto.jsx";
import { useState, useEffect } from "react";
import initialUsers from "/src/data/usersData.js"
import "/src/components/custom.css"

const App = () => {
    const [users, setUsers] = useState([]);
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log(isAuthenticated);
    document.title = "MIKU KONCERT";
    document.icon = "/src/img/logo.jpg"

    useEffect(() => {

        setUsers(initialUsers);
    }, []);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/opinie" element={<Opinie />} />
                    <Route path="/bilety" element={<Bilety />} />
                    <Route path="/kupowanie" element={<Kupowanie />} />
                    <Route
                        path="/rejestracja"
                        element={<Rejestracja/>}
                    />
                    <Route
                        path="/logowanie"
                        element={<Logowanie users={users}/>}
                    />
                    <Route
                        path="/konto"
                        element={
                            isAuthenticated === "true" ? <Konto /> : <Navigate to="/logowanie"/>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

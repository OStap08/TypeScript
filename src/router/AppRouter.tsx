import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRouter: FC = () => {
    const isEnter: boolean = JSON.parse(localStorage.getItem("isEnter") || 'false');

    return (
        <Routes>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route
                path="/"
                element={isEnter ? <Navigate to="/dashboard" replace/> : <Navigate to="/login" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;
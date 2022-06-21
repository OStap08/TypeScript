import React from 'react';
import Dashboard from "./pages/Dashboard";
import { Routes, Route, Navigate} from "react-router-dom"

const App = () => {
    return (
        <Routes>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route
                path="*"
                element={<Navigate to="/dashboard" replace/>}
            />
        </Routes>
    );
};

export default App;

import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import MyResume from './pages/MyResume';
import ResumeTemplates from './pages/ResumeTemplates';
import Users from './Users';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/resumetemplates" element={<ResumeTemplates/>} />
                <Route path="/myresume" element={<MyResume/>} />
                <Route path="/users" element={<Users/>} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages are imported here
import { Home, Login, Register } from '../pages'


const PublicRoute = () => {
    console.log('PublicRoute');
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default PublicRoute;
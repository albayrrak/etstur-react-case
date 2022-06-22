import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, DashboardDetail } from '../pages'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<DashboardDetail />} />
            <Route path="/login" element={< Navigate to="/dashboard" />} />
            <Route path="/register" element={< Navigate to="/dashboard" />} />
        </Routes>
    )
}

export default PrivateRoute;
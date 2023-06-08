import React from 'react';
import Repair from '../pages/AdminDashboard/Repair/Repair';
import { Outlet } from 'react-router-dom';

const LayoutAdminDashboardRepair = () => {
    return (
        <div className=''>
            <Repair />
            <Outlet />
        </div>
    );
};

export default LayoutAdminDashboardRepair;
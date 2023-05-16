import React from 'react';
import Admin from "../pages/Admin/Admin";


const AdminLayout = ({children}) => {
    return (<div>
        <Admin>
        {children}
        </Admin>

    </div>);
};

export default AdminLayout;

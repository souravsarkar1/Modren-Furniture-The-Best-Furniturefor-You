import React from 'react'
import '../Admin/Admin.css'
import AdminNav from './AdminNav'
import AdminMidNav from './AdminMidNav'
export default function Admin() {
    return (
        <div>
            <AdminNav pageName={"Deshbord"} />
            <AdminMidNav />
        </div>
    )
}

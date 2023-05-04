import React from 'react'
import { Link } from 'react-router-dom'
import '../Admin/Admin.css'

export default function AdminMidNav() {
    const RouterLinks = [
        { title: 'DeshoBord', path: '/' },
        { title: 'User', path: '/user' },
        { title: 'Products', path: '/products' },
        { title: 'Order', path: '/order' },
    ]

    return (
        <div>
            <div className='Amind-Min-Nav'>
                {
                    RouterLinks.map(({ title, path }) => {
                        return <Link to={path}>{title}</Link>
                    })
                }
            </div>
        </div>
    )
}

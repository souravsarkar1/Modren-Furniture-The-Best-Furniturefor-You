import React from 'react'
<<<<<<< HEAD:behanceclone/src/Admin/Pages/Deshbord.jsx
import '../Admin.module.css'
import { Container, Heading, Avatar } from '@chakra-ui/react'
=======
import '../Admin/Admin.css'
import { Container, Heading,  Avatar } from '@chakra-ui/react'
>>>>>>> 11a06856b947c81147f76134973e7c90b38d7c7d:behanceclone/src/Admin/Pages/DeshbordAdmin.jsx

export default function Deshbord() {
    return (
        <div>
            <Container maxW='70%' mt='10'>
                <div className='Deshbord-Box-Container'>
                    <div>
                        <div> <Avatar mt='6' mr='1' src="https://img.icons8.com/?size=1x&id=3686&format=png" alt="Sale" /></div>
                        <div><Heading mt='6' fontSize='lg' >Total Sales</Heading><Heading fontSize='lg'>$5634</Heading></div>
                    </div>
                    <div>
                        <div><Avatar mt='6' mr='1' src="https://img.icons8.com/?size=1x&id=97613&format=png" alt="User" /></div>
                        <div><Heading mt='6' fontSize='lg' >Daily User</Heading><Heading fontSize='lg'>$5634</Heading></div>
                    </div>
                    <div>
                        <div> <Avatar mt='6' mr='1' src="https://img.icons8.com/?size=1x&id=99010&format=png" alt="order" /></div>
                        <div><Heading mt='6' fontSize='lg' >Daily Order</Heading><Heading fontSize='lg'>634</Heading></div>
                    </div>
                    <div>
                        <div> <Avatar mt='6' mr='1' src="https://img.icons8.com/?size=1x&id=13013&format=png" alt="money" /></div>
                        <div><Heading mt='6' fontSize='lg' >Total revanue</Heading><Heading fontSize='lg'>$55634</Heading></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

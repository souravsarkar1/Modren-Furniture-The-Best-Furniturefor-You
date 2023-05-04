import { Container, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import '../Admin/Admin.css'
export default function AdminNav({ pageName }) {
    return (
        <div>
            <Container mt='0.5' maxW='98%' color='#262626'>
                <div className='Navbar-Container'>
                    <Heading size="lg" mt='1' ml='5' >{pageName}</Heading>
                    <div><Input type="text" htmlSize={75} mt='1' fontWeight="bold" fontSize="lg" placeholder="Search Product By Name,Category" /></div>
                    <Heading mt='1' size="lg" mr='5'>Admin-side-Email</Heading>
                </div>
            </Container>
        </div>
    )
}

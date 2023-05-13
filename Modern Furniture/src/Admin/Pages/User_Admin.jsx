import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Avatar,
    Td,
    TableContainer,
} from '@chakra-ui/react'
export default function UserAdmin() {
    return (
        <div style={{ width: '85%', margin: 'auto' }}>

            <TableContainer mt='10' overflowX='auto'>
                <Table variant='striped' >
                    <Thead>
                        <Tr>
                            <Th>User-Profile</Th>
                            <Th>Email</Th>
                            <Th>PassWord</Th>
                            <Th>Order</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Avatar src='' /></Td>
                            <Td>inches</Td>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

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
export default function Product() {
    return (
        <div style={{ width: '85%', margin: 'auto' }}>

            <TableContainer mt='10' overflowX='auto'>
                <Table >
                    <Thead>
                        <Tr>
                            <Th>Image</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Stock</Th>
                            <Th>Discripation</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Avatar src='' /></Td>
                            <Td>Sofa</Td>
                            <Td>10000</Td>
                            <Td>2</Td>
                            <Td>we dfjskflsdjflk;sdfjdlkf;fjd sg </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

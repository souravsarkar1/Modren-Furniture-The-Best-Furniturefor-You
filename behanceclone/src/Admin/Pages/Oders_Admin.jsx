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
export default function FuncOrder() {
  return (
    <div style={{ width: '85%', margin: 'auto' }}>

      <TableContainer mt='10' overflowX='auto'>
        <Table variant='striped' >
          <Thead>
            <Tr>
              <Th>Picture</Th>
              <Th>Title</Th>
              <Th>Discripation</Th>
              <Th>id</Th>
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

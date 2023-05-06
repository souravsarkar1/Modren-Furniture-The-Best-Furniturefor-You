import React from 'react'
import { Container, Flex, Box, Spacer, Image, Text } from '@chakra-ui/react'
import '../Admin/Admin.css'

export default function ProductCard({ id, name, price, images }) {

    return (
        <Container maxW='100%'>
            <Flex>
                <Box w='700px' h='110' as='box'  >
                    <Flex key={id}>
                        <Image ml='35' mr='38' w='100' h='110' src={images} alt={name} />
                        <div><Text fontWeight={'extrabold'} mt='8'>{name}</Text ><Text fontWeight={'extrabold'}>{price}</Text></div>
                    </Flex>
                </Box>
                <Spacer />
                <Box w='70px' h='100' as='box' >
                    <Text>1</Text>
                    <button>Increa</button>
                    <button>Decrea</button>
                </Box>
                <Spacer />
                <Box w='70px' h='100' as='box' >
                    <button><Image mt='5' src="https://img.icons8.com/?size=1x&id=107448&format=png" alt="" /></button>
                </Box>
            </Flex>
        </Container>
    )
}

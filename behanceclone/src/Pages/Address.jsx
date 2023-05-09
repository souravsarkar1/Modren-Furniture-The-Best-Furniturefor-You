import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
//import { Authcontext } from '../Authcontext/Authcontextprovider';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Setyouraddress() {
    const dieselAddress = JSON.parse(localStorage.getItem('dieselAddress')) || [];
    const [address, setAddress] = useState({
        fullAddress: '',
        name: '',
        phonenumber: '',
        pin: ''
    });

    const addressFlag = useSelector(st => st.authReducer.addressFlag);
    console.log(addressFlag);
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        //const val = type === "number" ? Number(value) : value;
        console.log(e.target.value);
        const val = type === "number" ? Number(value) : value;
        setAddress({ ...address, [name]: val })
    }
    const setAddressFlag = () => {
        return !addressFlag;
    }
    const { fullAddress, name, phonenumber, pin } = address;
    const userAddress = (data = { name: '', email: '', message: '' }) => {
        return axios(
            {
                method: 'post',
                url: `http://localhost:8080/userAddress`,
                data: data
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dieselAddress.push(address);
        localStorage.setItem('dieselAddress', JSON.stringify(dieselAddress))
        userAddress(address);
        setAddressFlag();
        console.log('Ratna');
        setAddress({
            fullAddress: '',
            name: '',
            phonenumber: '',
            pin: ''
        });
    }
    if (addressFlag) {
        return <Navigate to='/buynow' />
    }
    return (
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bgGradient="linear(to-r, teal.500, blue.500)"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Address</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                                        Fill up the form below to deliver your product safely to you
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                +91-988888888
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                hello@abc.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                Karnavati, India
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsDiscord size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" name='name' value={name} onChange={handleChange} />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="phonenumber">
                                                <FormLabel>Phone Number</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input type="number" size="md" value={phonenumber} name='phonenumber' onChange={handleChange} />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Full Address</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="Addrss"
                                                    value={fullAddress}
                                                    name='fullAddress'
                                                    onChange={handleChange}
                                                />
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Enter Pin</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    />
                                                    <Input type="number" size="md" value={pin} name='pin' onChange={handleChange} />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}
                                                    onClick={handleSubmit}
                                                >
                                                    Submit
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
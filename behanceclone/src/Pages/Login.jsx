import React, { useState } from 'react'
import styled from "styled-components";
//import { Button } from '@chakra-ui/react'
import googleLogo from '../Image and Logo/download (1).png'
import gitLogo from '../Image and Logo/GitHub-Mark.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { Heading } from '@chakra-ui/react';
import logo from '../Image and Logo/WhatsApp Image 2023-05-03 at 9.10.04 PM.jpeg'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isAuth = useSelector(st => st.authReducer.isAuth);
    const isError = useSelector(st => st.authReducer.isError);
    console.log(isAuth);
    const handleLoginBtn = (e) => {
        e.preventDefault();
        dispatch(login({ email, password })).then((res) => {
            navigate(location.state)
        })
        // console.log(email , password);
        // setEmail('');
        // setPassword('');
    }
    return (
        <Div className='login'>
            <Container>
                <Logo src={logo} alt="" />
                <Headin>MODERN FURNITURE</Headin>
            </Container>
            <DIV2 className='2nddiv' isAuth={isAuth} isError={isError}>
                <Heading id='mainHeading'>{isAuth ? 'Login Successfull' : 'Login to Continue'}</Heading>
                <Heading as='h5' size='sm' padding={5}>
                    No Account  <Link style={{
                        color: 'blue'
                    }} to={'/signup'}>
                        Create A New Account?
                    </Link>
                </Heading>
                <form action="" onSubmit={handleLoginBtn}>
                    <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Registerd Email' />
                    <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    <button>LOGIN</button>
                </form>
                <hr /> <h2>or</h2> <hr />
                <ButtonDiv>
                    <button className="googleBtn">
                        <img id="googleImg" src={googleLogo} alt="" width={'40px'} />
                        Continue With Google
                    </button>
                    <a href="https://github.com/login/oauth/authorize?client_id=e943d3a1b6c71a113d3c&scope=user">
                    <button className="githubBtn">
                        <img id="githubImg" src={gitLogo} alt="" width={'40px'} />
                        Continue With GitHub
                    </button>
                    </a>
                </ButtonDiv>
            </DIV2>

        </Div>
    )
}

export default Login

const Div = styled.div`
  height: 100vh;
  width: 100%;
  margin: 10px;
  padding: 10px;
  background-image: linear-gradient(to right, #2c5aa3, #9c1986);
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const ButtonDiv = styled.div`
  .googleBtn,
  .githubBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    color: #fff;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    font-size: x-large;
  }

  .googleBtn {
    background-color: #4285f4;
  }

  .githubBtn {
    background-color: #24292e;
  }

  #googleImg,
  #githubImg {
    margin-right: 10px;
    border-radius: 50%;
  }

  .googleBtn:hover,
  .githubBtn:hover {
    opacity: 0.8;
  }
`;

const DIV2 = styled.div`
  #mainHeading {
    color: ${({ isAuth }) => (isAuth ? 'green' : 'red')};
  }
  width: 40%;
  margin-top: 30px;
  height: 700px;
  padding: 10px;
  background-color: white;
  border-radius: 30px;

  h1 {
    color: black;
  }

  form {
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 20px;
      padding: 20px;
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
      border: none;
      font-size: large;
      border: ${({ isError }) => (isError ? '1px solid red' : '1px solid black')};
    }

    input:hover {
      border: 1px solid blue;
    }

    button {
      margin: 30px auto;
      padding: 10px;
      width: 100px;
      font-size: larger;
      border-radius: 7px;
      border: none;
      background-color: teal;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: green;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const Headin = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: #2b4231;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
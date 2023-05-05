import React, { useState } from 'react'
import styled from "styled-components";
//import { Button } from '@chakra-ui/react'
import googleLogo from '../Image and Logo/download (1).png'
import gitLogo from '../Image and Logo/GitHub-Mark.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../Redux/AuthReducer/action';
import { Heading } from '@chakra-ui/react';
import logo from '../Image and Logo/WhatsApp Image 2023-05-03 at 9.10.04 PM.jpeg'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const signupFlag = useSelector(st => st.authReducer.signupFlag);
    const signupFlag2 = useSelector(st => st.authReducer.signupFlag2);
    const isError = useSelector(st => st.authReducer.isError);
    console.log(signupFlag);
    const handleLoginBtn = (e) => {
        e.preventDefault();
        dispatch(signup({ email, password })).then((res) => {
            navigate(location.state)
        })
        // console.log(email , password);
        setEmail('');
        setPassword('');
        setName("");
    }
    return (
        <Div className='login'>
            <Container>
                <Logo src={logo} alt="" />
                <Headin>MODERN FURNITURE</Headin>
            </Container>
            <DIV2 className='2nddiv' isAuth={signupFlag} isError={isError}>
                {!signupFlag2 && <Heading id='mainHeading'>{signupFlag ? 'Successfully Created A New Account' : 'Create A New Account To Continue'}</Heading>}
                {signupFlag2 && <Heading>User Is Already Register</Heading>}
                <Heading as='h5' size='sm' padding={5}>
                    Already Have A Account <Link style={{
                        color: 'blue'
                    }} to={'/login'}>
                        Login?
                    </Link> Through This
                </Heading>
                <form action="" onSubmit={handleLoginBtn}>
                    <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enteter Your Name' />
                    <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enteter Your Email' />
                    <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
                    <button>Submit</button>
                </form>
                <hr /> <h2>or</h2> <hr />
                <ButtonDiv>
                    <button className="googleBtn">
                        <img id="googleImg" src={googleLogo} alt="" width={'40px'} />
                        Continue With Google
                    </button>
                    <button className="githubBtn">
                        <img id="githubImg" src={gitLogo} alt="" width={'40px'} />
                        Continue With GitHub
                    </button>
                </ButtonDiv>
            </DIV2>

        </Div>
    )
}

export default Signup

const Div = styled.div`
height: 100vh;
width: 100wh;
margin: 10px;
padding: 10px;
//border: 2px solid red;
background-image: linear-gradient(to right, #2c5aa3, #9c1986);
display: flex;
 gap: 50px;
`
const ButtonDiv = styled.div`


.googleBtn, .githubBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    color: #fff;
    cursor: pointer;
    width: 600px;
    margin-left: 15px;
    margin-top: 10px;
    font-size: x-large;
  }

  .googleBtn {
    background-color: #4285F4;
  }

  .githubBtn {
    background-color: #24292E;
  }

  #googleImg, #githubImg {
    margin-right: 10px;
    border-radius: 50%;
  }

  .googleBtn:hover, .githubBtn:hover {
    opacity: 0.8;
  }

`
let DIV2 = styled.div`
#mainHeading{
    color: ${({ isAuth }) => (isAuth ? 'green' : 'blue')};
}
width: 40%;
//border: 1px solid red;
margin-top : 30px ;
height: 700px;
padding: 10px;
background-color: white;
border-radius: 30px;
h1{
    color:  black;
}
form{
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin: 20px;
        padding: 20px;
        width: 300px;
       border-radius: 10px;
       border: none;
       font-size: large;
       border: ${({ isError }) => (isError ? '1px solid red' : '1px solid black')};
    }
    input:hover{
        border: 1px solid blue;
    }
   button{
    margin: 30px;
    padding: 10px;
    width: 100px;
    margin: auto;
    font-size: larger;
    border-radius: 7px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
   }
   button:hover{
    background-color: green;
   }
}
`
// let DIV = styled.div`
// width: 50%;
// //border: 1px solid red;
// display: flex;
// justify-content: center;

// img{
//     width: 50px;
//     border-radius: 50%;
//     height: 50px;

// }
// `
const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

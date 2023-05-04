import React, { useState } from 'react'
import styled from "styled-components";
//import { Button } from '@chakra-ui/react'
import googleLogo from '../Image and Logo/download (1).png'
import gitLogo from '../Image and Logo/GitHub-Mark.png'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
const Login = () => {
    const [email , setEmail] = useState('');
  const [password , setPassword] = useState(''); 
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
  const handleLoginBtn =(e)=>{
    e.preventDefault();
    // dispatch(login({email , password})).then((res)=>{
    //   navigate(location.state)
    // })
    console.log(email , password);
    setEmail('');
    setPassword('');
  }
    return (
        <Div className='login'>
            <DIV className='1stdiv'></DIV>
            <DIV2 className='2nddiv'>
                <h1 color={'white'} fontSize={'30px'}>Login</h1>
                <form action="" onSubmit={handleLoginBtn}>
                    <input type="email" name="" id=""  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button>LOGIN</button>
                </form>
                <hr /> <h3>or</h3> <hr />
                <ButtonDiv>
                    <button id='googleBtn' style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}>
                        <img src={googleLogo} alt="google logo" width='30px' style={{ borderRadius: '50%', marginRight: '15px' }} />
                        <span style={{ display: 'inline-block' }}> Continue With Google</span>
                    </button>
                    <button style={{borderRadius: '5px' }}> <img src={gitLogo} alt="git logo" width='35px' style={{ borderRadius: '50%', marginRight: '15px' }} /> Continue With GitHub</button>
                </ButtonDiv>
            </DIV2>

        </Div>
    )
}

export default Login

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
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
button{
    margin: 10px;
    width: 600px;
    padding: 15px;
    font-size: xx-large;
    border-radius: 20px;
    align-items: center;
    border: none;
    cursor: pointer;
}
#googleBtn:hover{
    background-color: white;
    color: blue;
}
`
let DIV2 = styled.div`
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
let DIV = styled.div`
width: 50%;
//border: 1px solid red;
`
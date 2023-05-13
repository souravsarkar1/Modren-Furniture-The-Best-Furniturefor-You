import { Heading } from '@chakra-ui/react';
import React from 'react';

function SignupPopup(props) {
  const { signupFlag } = props;

  return (
    <div className={signupFlag ? 'popup active' : 'popup'}>
      <Heading color={'blue'}>Successfully Created A New Account</Heading>
    </div>
  );
}

export default SignupPopup;

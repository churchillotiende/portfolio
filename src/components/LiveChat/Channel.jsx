import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import getRecipientEmail from './Utils/GetRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import {useRouter} from 'next/router';

const Channel = ({id , users}) => {
  
  const router = useRouter();

  const enterChat = () => {
    router.push({
      pathname:`/chat/${id}`
      , undefined, 
      shallow: true
    })
  }
  const [user] = useAuthState(auth)
  const recipientEmail = getRecipientEmail(users , user)
  const [recipientSnapShot] = useCollection(db.collection('users').where('email', '==' , getRecipientEmail(users  ,user)))
  const recipient = recipientSnapShot?.docs?.[0]?.data();
  return (
      <Container>
        {
          recipient?(<Avatar src = {recipient?.photoURL}/>):(
            <Avatar>{recipientEmail[0]}</Avatar>
          )

        }
        <Title>{recipientEmail}</Title>
      </Container>
  )
}

export default Channel;

const Title = styled.p`
    font-size:18px;
    width:100%;
    display:flex;
    word-break:break-word;
    border-bottom:1px solid #212D45;
    padding:20px;
    cursor:pointer;
    &:hover{
        opacity:0.8;
    }
`

const Container = styled.div`
  display:flex;
  :hover{
    background-color:#11192a;
    padding-top:0 ;
  }
`;
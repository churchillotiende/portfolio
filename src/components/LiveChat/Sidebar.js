import React from 'react';
import { SidebarCss, SidebarInfo } from '../../styles/GlobalComponents';
import { HeaderContainer, HeaderLeft, HeaderAvatar , HeaderRight ,LastMessage } from './Header.style';
import { SidebarOptionContainer , Span , Hr } from './Sidebar.style';
import { Avatar, Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import Channel from './Channel';
import { useRouter } from 'next/router'
import EmailValidator from 'email-validator';



const Sidebar = () => {

  const [user] = useAuthState(auth)

  if(!user) return 'Loading';

  const router =useRouter();
  const userChatRef = db.collection('chats').where('users' , 'array-contains' , user.email)

  const[chatsSnapshot] = useCollection(userChatRef);

  const addChannel = () => {
    const input = prompt('Enter email address of the user you want to chat with')
    
    if(!input) return null;

    if(EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email){

      db.collection('chats').add({

        users:[user.email , input]

      });
    }

  }

  const chatAlreadyExists = (recipientEmail) =>

    !!chatsSnapshot?.docs.find(chat =>chat.data().users.find((user) =>user === recipientEmail)?.length > 0);

  return (
    <SidebarCss>
        <HeaderContainer>
            <>
              <HeaderLeft>
                  <HeaderAvatar>
                      <Avatar src = {user?.photoURL||user?.email[0]}/>
                  </HeaderAvatar>
              </HeaderLeft>
              <HeaderRight>
                <IconButton>
                  <Button style={{ cursor:'pointer', marginTop:'15px', borderRadius:'10px' , color:'white' , backgroundColor:"#212D45" }} onClick = {() => auth.signOut() && router.push('/')}><h2>Logout</h2></Button>
                </IconButton>
              </HeaderRight>
            </>
        </HeaderContainer>
        <SidebarOptionContainer onClick={addChannel}>
            <AddIcon />
            <Span>
              Add My Mail
            </Span>
            
        </SidebarOptionContainer>
        <Hr />
        <SidebarInfo>
            <Span>
              {chatsSnapshot?.docs.map((chat)=>(
                <Channel
                  key = {chat.id}
                  id = {chat.id}
                  users = {chat.data().users}
                /> 
               ))}
            </Span>
        </SidebarInfo>

    </SidebarCss>
  )
}

export default Sidebar
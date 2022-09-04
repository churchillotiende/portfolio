import React from 'react'
import Sidebar from '../../components/LiveChat/Sidebar'
import Chat from '../../components/LiveChat/Chat'
import { BoxChat, ChatBody, ChatComp, Section, SectionTitle, SidebarChat, SidebarComp } from '../../styles/GlobalComponents';
import { db } from '../../firebase';
import Link  from 'next/link';

const Chat1 = ({chat , messages}) => {
  return (
    <>
    {/* <Section id = 'chat'> */}
      <Link href = '/'><SectionTitle style = {{cursor:'pointer'}}>Churchill. </SectionTitle></Link>
      {/* <BoxChat> */}
        {/* <SidebarChat> */}
          <ChatBody>
              <SidebarComp>
                  <Sidebar />
              </SidebarComp>
              <ChatComp>
                      <Chat chat = {chat} messages = {messages}/>
              </ChatComp>
          </ChatBody>
        {/* </SidebarChat> */}
      {/* </BoxChat> */}
    {/* </Section> */}
  </>
  )
}

export default Chat1;

export async function getServerSideProps(context){

  const ref = db.collection('chats').doc(context.query.id)

  // prep the messages on the server

  let messages = null;
  const messagesRes = await ref
    .collection('messages')
    .orderBy('timestamp' , 'asc')
    .get();

  messages = messagesRes.docs.map(doc => ({
    id:doc.id,
    ...doc.data(),
  })).map(messages => ({
    ...messages,
    timestamp:messages.timestamp.toDate().getTime()
  }))

// Prep the chat

const chatRes = await ref.get();
let chat =null
chat = {
  id:chatRes.id,
  ...chatRes.data()
}

return {
  props:{
    messages:JSON.stringify(messages),
    chat:chat
  }
}
}
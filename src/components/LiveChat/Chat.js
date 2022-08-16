// import { Avatar } from '@material-ui/core';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
// import React, { useRef, useState } from 'react';
// import { ChatDiv, ChatName, ChatTimeStamp } from '../../styles/GlobalComponents';
// import { ChatHeaderInfo , ChatContainer, ChatHeader ,ChatSection , ChatAvatar , ChatMessage, Input , InputContainer , EndOfMessage} from './Chat.style';
// import {useParams} from 'react-router-dom';
// import { auth, db } from '../../firebase';
// import firebase from 'firebase';
// import Message from './Message';
// import { useCollection } from 'react-firebase-hooks/firestore';
// import { useRouter } from 'next/router';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import getRecipientEmail from './Utils/GetRecipientEmail';
// import TimeAgo from 'timeago-react';

// const Chat = ({chat , messages}) => {

//   const router = useRouter();

//   const[user] = useAuthState(auth);

//   const [recipientSnapshot] = useCollection(db.collection('users').where('email' , '==' , getRecipientEmail(chat.users , user)));

//   const[input , setInput] = useState("");
//   const endOfMessagesRef = useRef(null);

//   const recipientEmail = getRecipientEmail(chat.users , user)

//   const[messagesSnapshot] = useCollection(

//     db.collection('chats')
//       .doc(router.query.id)
//       .collection('messages')
//       .orderBy('timestamp' , 'asc')

//     );

//     const scrollToBottom = () => {
//       endOfMessagesRef.current.scrollIntoView({
//         behaviour:'smooth',
//         block:'start'
//       })
//     }

//     const sendMessage = (e) => {
//       e.preventDefault()

//       db.collection('users').doc(user.uid).set(
//           {
//             lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
//           },
//             {merge:true}
//       )

//       db.collection('chats').doc(router.query.id).collection('messages').add({
//         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
//         message:input,
//         user:user.email,
//         photoURL:user.photoURL
//       })
//       setInput('')
//       scrollToBottom()
//     }

//     const showMessages = () => {
//       if(messagesSnapshot){
//         return messagesSnapshot.docs.map(message => (
//           <Message
//             key = {message.id}
//             user = {message.data().user}
//             message = {{
//               ...message.data(),
//               timestamp:message.data().timestamp?.toDate().getTime()
//             }}
//           />
//         ))
//       }
//       else{

//         return JSON.parse(messages).map(message => (
//           <Message key= {message.id} user = {message.user} message = {message} />
//         ));
//       }
//     }
//   const recipient = recipientSnapshot?.docs?.[0]?.data();

//   return (
//     <ChatContainer>
//       <ChatHeader>
//         {
//           recipient?(
//             <ChatAvatar>
//               <Avatar src = {recipientEmail[0]}/>
//             </ChatAvatar>
//           )
//           :(
//             <ChatAvatar>
//               <Avatar src = {recipientEmail[0]}/>
//             </ChatAvatar>
//           )
//         }
//         <ChatHeaderInfo>
//           <h3>{recipientEmail}</h3>
//           {recipientSnapshot ? (
//             <p>
//               Active:{' '}
//               {recipient?.lastSeen?.toDate() ? (
//                 <TimeAgo datetime = {recipient?.lastSeen?.toDate() } />
//               ):'Unavailable'} 
//             </p>
//           ):(<p>'Loading last active'</p>)}
//         </ChatHeaderInfo>
//       </ChatHeader>
//       <ChatSection>
//       {showMessages()}
//       <EndOfMessage ref = {endOfMessagesRef}/>
//         <ChatMessage>
//           {/* {showMessages()} */}
//         </ChatMessage>
//       </ChatSection>
//       <InputContainer>
//             <InsertEmoticonIcon />
//             <Input type="text" value = {input} placeholder="Chat with Me" onChange={e => setInput(e.target.value)} />
//             {/* <Input type = 'text' onchange = {handleChange} placeholder = 'Chat with user' /> */}
//             <button type = "submit" hidden disabled={!input} onClick = {sendMessage}  >Send</button>
//         </InputContainer>
//     </ChatContainer>

//   )
// }

// export default Chat;


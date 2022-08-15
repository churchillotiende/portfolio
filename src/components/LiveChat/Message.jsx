import React from 'react';
import moment from 'moment';

import {Sender , Receiver , Timestamp} from './Message.style';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';

const Message = ({message , user}) => {

  const[userLoggedIn] = useAuthState(auth);

  if(!userLoggedIn) return 'Loading';

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver

  return (
    <TypeOfMessage>
      {message.message}
      <Timestamp>{message.timestamp ? moment(message.timestamp).format('LT'):"..."}</Timestamp>
    </TypeOfMessage>
  )
}

export default Message;

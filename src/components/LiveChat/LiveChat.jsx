import React from 'react';
import { Section , SectionDivider, SectionText, SectionTitle, SidebarChat,ChatBody,BoxChat , SidebarComp, ChatComp } from '../../styles/GlobalComponents';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Link from 'next/link';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth , db } from '../../firebase';
import Chat1 from '../../pages/chat/[id]';
import { ChannelMessage } from './Header.style';
import styled from 'styled-components';


const LiveChat = () => {

    // const user = useAuthState(auth)

    return (
        <Section id='chat'>
            <SectionTitle>Live Chat</SectionTitle>
            <ChannelMessage>
                <P>Add churchillotiende84@gmail.com or winstoneotiende@gmail.com and let's talk <br /> This is still under development...</P>
            </ChannelMessage>
            {/* <Chat1 /> */}
            <BoxChat>
                <SidebarChat>
                    <ChatBody>
                        <SidebarComp>
                            <Sidebar />
                        </SidebarComp>
                        {/* <ChatComp>
                                <Chat />
                        </ChatComp>  */}
                    </ChatBody>
                </SidebarChat>
            </BoxChat>  
        </Section>
    )
}

export default LiveChat;

const P = styled.p`
    font-size: 20px;
`
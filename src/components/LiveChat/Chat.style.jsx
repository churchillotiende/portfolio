import styled from 'styled-components';
import {Avatar} from '@material-ui/core';

export const ChatContainer = styled.div`
    height:100vh;

    @media ${props => props.theme.breakpoints.md} {
        margin:0;
    
      }
`;

export const ChatHeaderInfo = styled.div`

`;

export const ChatHeader = styled.div`
    display:flex;
    position:sticky;
    top:0;
    z-index:100;
    margin-top:-15px;
    background-color:#131921;
    padding:20px;
    border-bottom:1px solid #212D45;

    @media ${props => props.theme.breakpoints.md} {
        height:82px;
    
      }
`;

export const ChatAvatar = styled(Avatar)`
    cursor:pointer;
    margin-right:15px;
    &:hover{
        opacity:0.8;
    }
`;

export const ChatSection = styled.div`
    background-image: url('https://wallpaperaccess.com/full/1288076.jpg');
    height:81vh;
    margin-bottom:-20px;
    background-repeat:repeat;
    background-position:center;
    flex:1;
    padding:30px;

    overflow-y:scroll ;

    ::-webkit-scrollbar{
    display:none;
    }

    -ms-overflow-style:none;
    scrollbar-width:none;
`;

export const ChatMessage = styled.p`
    position:relative;
    font-size:16px;
    padding:10px;
    width:fit-content;
    border-radius:10px;
    margin-bottom:30px;
    background-color:#212D45;
`;

export const Input = styled.input`
		flex:1;		
		outline:0;
		border-radius:10px;
    background-color:#0F1624;
		padding:20px;
		margin-left:15px;
    color:whitesmoke;
		margin-right:15px;
		border:none;
`;

export const InputContainer = styled.form`
		display:flex;
		align-items:center;
		padding:10px;
    font-size:15px;
		position:sticky;
		bottom:0;
		background-color:#212D45;
		z-index:100;

`;

export const EndOfMessage = styled.div` `;
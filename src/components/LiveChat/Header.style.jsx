import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const HeaderContainer = styled.div`
    display:flex;
    height:81px;
    margin-top:-40px;
    padding:20px;
    background-color:#131921;
    position:sticky;
    top:0;
    justify-content:space-between;
    border-bottom:1px solid #212D45;

    @media ${props => props.theme.breakpoints.md} {
       height:82px;
       place-items:center;
    
      }
`;

export const HeaderLeft = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    // margin-left:20px;
    margin-top:25px;

    >.MuiSvgIcon-root {
        margin-left:auto;
        margin-right:20px;
    }
`;

export const HeaderRight = styled.div`
    display:flex;
    align-items:center;
    
`

export const HeaderAvatar = styled(Avatar)`
    cursor:pointer;
    :hover{
        opacity:0.8;
    }
`;

export const LastMessage = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:15px;
    border-bottom:1px solid #212D45;
`;

export const ChannelMessage = styled.p`
    font-size:16px;
`
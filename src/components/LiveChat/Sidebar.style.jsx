import styled from 'styled-components';

export const SidebarOptionContainer = styled.div`
    display:flex;
    margin:100px 50px 25px 45px;
    position:relative;
    @media ${props => props.theme.breakpoints.md}{
        margin:150px 50px 25px 45px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        margin:150px 20px 25px 20px;
    }

    
`;

export const Span = styled.div`
    padding-left:10px;
    position:relative;
    :hover{
        padding:0 ;
    }
    @media screen and (max-width: 500px) {
    font-size:12px;
  }
`;
export const Hr = styled.div`
    border-bottom:1px solid #212D45;
    margin-top:10px;
`;
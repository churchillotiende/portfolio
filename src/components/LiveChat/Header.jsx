import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar } from './Header.style';
import { Avatar } from '@material-ui/core';
import  AccessTime  from '@material-ui/icons/AccessTime';

export const HeaderRight = () => {
    return (
        <h1>Hey</h1>
    )
}

const Header = () => {

    return (
        <HeaderContainer>
            {/* HeaderLeft */}
            <HeaderLeft>
                <HeaderAvatar>
                    <Avatar/>
                </HeaderAvatar>
                <AccessTime/>
            </HeaderLeft>
        </HeaderContainer>
    )
}

export default Header;
import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    const HeaderWrapper = styled.header`
      height: 64px;
      background: #83C5BE;
      justify-content: center;
      display: flex;
      align-items: center;
    `
    const LinkWrapper = styled(Link)`
      text-decoration: none;
      color: #006D77;
      font-family: Inter, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 1000;
      line-height: normal;
      margin: 0 16px;
    `
    return (
        <HeaderWrapper>
            <LinkWrapper to='/'>Running</LinkWrapper>
            <LinkWrapper to='/completed'>Completed</LinkWrapper>
            <LinkWrapper to='/create'>Create</LinkWrapper>
        </HeaderWrapper>
    );
};

export default Header;

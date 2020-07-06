import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Menu } from './Menu';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    return (
        <Root>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <StyledMenu />
        </Root>
    );
};

const Root = styled.aside`
    width: 56px;
    background-color: #ffffff;
    box-shadow: 1px 0px 0px #f1eded;
    z-index: 2;
    display: flex;
    flex-direction: column;
}
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 56px;
    padding-top: 10px;
`;

const StyledMenu = styled(Menu)`
    flex: 1;
`;

import React, { useState, useEffect } from 'react';
import { H1, Popover, Button, MenuItem, Menu } from '@blueprintjs/core';
import styled from 'styled-components/macro';
import { ReactComponent as NotificationIcon } from '../assets/icons/notifications.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { MatchParams } from '../routes';
import { useParams, useLocation } from 'react-router-dom';

export const Header: React.FC<{}> = ({}) => {
    let location = useLocation();

    const MenuItems = (
        <Menu>
            <MenuItem text="Account" />
            <MenuItem text="Permissions" />
            <MenuItem text="Log Out" />
        </Menu>
    );
    return (
        <Root>
            <Title>{location.pathname.split('/')[1]}</Title>
            <ActionMenu>
                <ActionButton>
                    <SearchIcon />
                </ActionButton>
                <ActionButton>
                    <NotificationIcon />
                </ActionButton>
                <UserMenu content={MenuItems} position="bottom">
                    <Button
                        rightIcon={'caret-down'}
                        text={'Tommy W.'}
                        minimal
                    />
                </UserMenu>
            </ActionMenu>
        </Root>
    );
};

const Root = styled.div`
    height: 56px;
    background-color: #ffffff;
    box-shadow: 0px 1px 0px #f1eded;
    display: flex;
    z-index: 1;
    align-items: center;
    padding: 0 15px;
    display: flex;
`;

const Title = styled(H1)`
    font-size: 30px !important;
    font-weight: 400 !important;
    text-transform: capitalize;
    margin: 0;
    flex: 1;
`;

const ActionMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const ActionButton = styled.li`
    margin-right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        width: auto;
        height: 18px;
    }
    :hover,
    :active {
        * {
            fill: #333;
        }
    }
`;

const UserMenu = styled(Popover)`
    .bp3-button {
        font-weight: 700;
    }
`;

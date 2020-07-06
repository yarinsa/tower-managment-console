import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { StockRoutes } from '../../routes';
import { ReactComponent as BuildingsIcon } from '../../assets/icons/buildings.svg';
import { ReactComponent as TeamsIcon } from '../../assets/icons/team.svg';
import { ReactComponent as DevicesIcon } from '../../assets/icons/devices.svg';
import { ReactComponent as ReportsIcon } from '../../assets/icons/reports.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({}) => {
    return (
        <MenuList>
            <MenuListItem aria-label="Buildings" to="/buildings">
                <BuildingsIcon />
            </MenuListItem>
            <MenuListItem to="/devices/overview">
                <DevicesIcon />
            </MenuListItem>
            <MenuListItem to="/reports">
                <ReportsIcon />
            </MenuListItem>
            <MenuListItem to="/teams">
                <TeamsIcon />
            </MenuListItem>
            <Spacer />
            <MenuListItem to="/settings">
                <SettingsIcon />
            </MenuListItem>
        </MenuList>
    );
};

const MenuList = styled.nav`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

const activeClassName = 'nav-item-active';

const MenuListItem = styled(NavLink).attrs({ activeClassName })`
    transition: all 0.1s;
    border-radius: 15px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 5px;
    &.${activeClassName}, :hover {
        background-color: rgba(65, 159, 255, 0.2);
        * {
            fill: #097ff9;
        }
    }
    svg {
        width: 24px;
        height: auto;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

import React from 'react';
import styled from 'styled-components';
import { H3, H5 } from '@blueprintjs/core';
import Lhg from '../assets/connectors/alexa.png';

export const ConnectorsList: React.FC<{}> = ({}) => {
    const VendorItems = vendors.map(vendor => {
        console.log(vendor.logoUrl);
        return (
            <VendorListItem>
                <img src={vendor.logoUrl} />
            </VendorListItem>
        );
    });
    return (
        <Root>
            <H3>Please select vendor to setup a connector...</H3>
            <VendorList>{VendorItems}</VendorList>
        </Root>
    );
};

const Root = styled.div``;

const VendorList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const VendorListItem = styled.div`
    background-color: white;
    border-radius: 18px;
    border: 1px solid #e5e5e5;
    width: 80px;
    height: 80px;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
        border: 1px solid #419fff;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

interface vendor {
    name: string;
    id: string;
    authUrl: string;
    logoUrl: string;
}
const vendors: vendor[] = [
    {
        name: 'Hue',
        id: '1',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/hue.png'),
    },
    {
        name: 'LCN',
        id: '2',
        authUrl: 'lcn./auth',
        logoUrl: require('../assets/connectors/lcn.png'),
    },
    {
        name: 'Smart Things',
        id: '3',
        authUrl: 'smart.com/auth',
        logoUrl: require('../assets/connectors/smartthings.png'),
    },
    {
        name: 'WeMo',
        id: '4',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/wemo.png'),
    },
    {
        name: 'Sonos',
        id: '5',
        authUrl: 'sonos.com/auth',
        logoUrl: require('../assets/connectors/sonos.png'),
    },
    {
        name: 'alexa',
        id: '6',
        authUrl: 'lcn./auth',
        logoUrl: require('../assets/connectors/alexa.png'),
    },
    {
        name: 'ESP Home',
        id: '7',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/esphome.png'),
    },
    {
        name: 'MQTT',
        id: '8',
        authUrl: 'lcn./auth',
        logoUrl: require('../assets/connectors/mqtt.png'),
    },
    {
        name: 'Netgear',
        id: '9',
        authUrl: 'smart.com/auth',
        logoUrl: require('../assets/connectors/netgear.png'),
    },
    {
        name: 'Ring',
        id: '10',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/ring.png'),
    },

    {
        name: 'Open UV',
        id: '3',
        authUrl: 'smart.com/auth',
        logoUrl: require('../assets/connectors/openuv.png'),
    },
    {
        name: 'Open Gate',
        id: '11',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/opengate.png'),
    },
    {
        name: 'Linod',
        id: '12',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/linod.png'),
    },
    {
        name: 'Rachio',
        id: '13',
        authUrl: 'lcn./auth',
        logoUrl: require('../assets/connectors/rachio.png'),
    },
    {
        name: 'Rain Machine',
        id: '14',
        authUrl: 'smart.com/auth',
        logoUrl: require('../assets/connectors/rainmachine.png'),
    },
    {
        name: 'WeMo',
        id: '4',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/wemo.png'),
    },
    {
        name: 'Hue',
        id: '1',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/hue.png'),
    },
    {
        name: 'Sense',
        id: '17',
        authUrl: 'huecom/auth',
        logoUrl: require('../assets/connectors/sense.png'),
    },
];

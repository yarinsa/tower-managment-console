import React, { useState } from 'react';
import styled from 'styled-components';
import { BatteryIndicator } from './BatteryIndicator';
import { useHistory } from 'react-router-dom';
import { Drawer } from '@blueprintjs/core';

export const DevicesTable: React.FC<{}> = ({}) => {
    const [isDrawerOpen, setDrawer] = useState(false);
    let history = useHistory();

    const handleDrawer = (isOpen: boolean, route?: string) => {
        if (isOpen) {
            setDrawer(false);
            history.push(`/devices/overview`);
        } else {
            setDrawer(true);
            history.push(`/devices`);
        }
    };

    const TableRows = devices.map(device => {
        return (
            <TableRow>
                <TableCell>
                    {/* <a onClick={() => handleDrawer(false, 'market')}> */}
                    {device.name}
                    {/* </a> */}
                </TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.building}</TableCell>
                <TableCell>
                    <BatteryIndicator batteryLevel={device.batteryLevel} />
                </TableCell>
            </TableRow>
        );
    });
    return (
        <Table>
            <TableHeader>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Building</TableCell>
                <TableCell>Battery Level</TableCell>
            </TableHeader>
            {TableRows}
        </Table>
    );
};

const Table = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background-color: #ffffff;
`;

const TableCell = styled.div`
    flex: 1;
    border-right: 1px solid #e5e5e5;
    padding: 8px;
    &:nth-of-type(2) {
        border-left: 1px solid #e5e5e5;
    }
    &:first-of-type {
        flex: 2;
        border: unset;
        text-align: left;
        padding-left: 10px;
    }
    &:last-of-type {
        border: unset;
    }
`;

const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    &:last-of-type {
        border-bottom: unset;
    }
`;

const TableHeader = styled(TableRow)`
    font-weight: 600;
    background-color: #f9f7f7;
    border-radius: 18px 18px 0 0;
    * {
        text-align: center !important;
    }
`;

interface IDevice {
    name: string;
    type: DeviceType;
    batteryLevel: number;
    building: string;
    softwareVersion: string;
    nextInspection: Date;
    ip: string;
}

enum DeviceType {
    CO2_SENSOR = 'CO2 Sensor',
    HUMIDITY_SENSOR = 'Humidity Sensor',
    FLOOD_INDICATOR = 'Flood Indicator',
}

const devices: IDevice[] = [
    {
        name: 'Garbage Room CO2 ',
        type: DeviceType.CO2_SENSOR,
        building: 'TLV 8',
        batteryLevel: 72,
        softwareVersion: '1.3.4',
        nextInspection: new Date(),
        ip: '1.3.233.2',
    },
    {
        name: 'Lobby Humidity Sensor',
        type: DeviceType.HUMIDITY_SENSOR,
        building: 'TLV 10',
        batteryLevel: 23,
        softwareVersion: '8.7.4',
        nextInspection: new Date(),
        ip: '1.3.233.6',
    },
    {
        name: 'Parking Lot Flood Indicator',
        type: DeviceType.FLOOD_INDICATOR,
        building: 'TLV 8',
        batteryLevel: 99,
        softwareVersion: '5.3.4',
        nextInspection: new Date(),
        ip: '1.3.233.4',
    },
];

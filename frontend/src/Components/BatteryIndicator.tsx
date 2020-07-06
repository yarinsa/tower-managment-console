import React from 'react';
import styled from 'styled-components/macro';

interface BatteryIndicatorProps {
    batteryLevel: number;
}

export const BatteryIndicator: React.FC<BatteryIndicatorProps> = ({
    batteryLevel,
}) => {
    return (
        <Root>
            <Indicator batteryLevel={batteryLevel} />
            <Indicator batteryLevel={batteryLevel} />
            <Indicator batteryLevel={batteryLevel} />
        </Root>
    );
};

const Root = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Indicator = styled.div<{ batteryLevel: number }>`
    margin-right: 2px;
    width: 10px;
    height: 6px;
    &:last-of-type {
        border-radius: 0 100% 100% 0;
        background-color: ${props => {
            if (props.batteryLevel > 75) {
                return 'green';
            } else {
                return '#e5e5e5';
            }
        }};
    }
    &:first-of-type {
        border-radius: 100% 0 0 100%;
        background-color: ${props => {
            if (props.batteryLevel < 30) {
                return 'red';
            } else if (props.batteryLevel > 75) {
                return 'green';
            } else {
                return 'orange';
            }
        }};
    }
    &:nth-of-type(2) {
        background-color: ${props => {
            if (props.batteryLevel < 30) {
                return '#e5e5e5';
            } else if (props.batteryLevel > 75) {
                return 'green';
            } else {
                return 'orange';
            }
        }};
    }
`;

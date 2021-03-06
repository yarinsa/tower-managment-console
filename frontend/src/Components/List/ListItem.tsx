import React from 'react';
import styled from 'styled-components/macro';
import { H4, Tag } from '@blueprintjs/core';
import { Stock, Interval, TimeRange } from '../../@generated/types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { addCurrencySymbol } from '../../utils.service';
import Chart from '../Chart';

interface StockListItemProps extends Pick<Stock, 'symbol' | 'name'> {
    isActive: boolean;
    onStockSelect: CallableFunction;
}

export const StockListItem: React.FC<StockListItemProps> = ({
    symbol,
    name,
    isActive,
    onStockSelect,
}) => {
    // TODO: move query up.
    const { data } = useQuery(GET_STOCKR_INFO, {
        variables: {
            symbol: symbol,
            interval: Interval.Day,
            timeRange: TimeRange.Month,
        },
    });
    return (
        <Root isActive={isActive} onClick={() => onStockSelect(symbol)}>
            <StockDetails>
                <Title>{symbol}</Title>
                <Subtitle>{name}</Subtitle>
            </StockDetails>
            <ChartContainer>
                <Chart symbol={symbol} height={60} />
            </ChartContainer>
            {data && (
                <StyledTag isPositive={data.stock.quote.change > 0}>
                    {addCurrencySymbol(
                        data.stock.quote.price.toFixed(2),
                        data.stock.market.currency
                    )}
                </StyledTag>
            )}
        </Root>
    );
};

const Root = styled.div<{ isActive: boolean }>`
    height: 60px;
    box-shadow: 40px 0px 1px #999;
    padding-left: 40px;
    padding-right: 15px;
    cursor: pointer;
    background-color: ${props => (props.isActive ? 'white' : 'unset')};
    box-shadow: ${props =>
        props.isActive ? '-9px 0px 10px #dcdcdc' : '40px 0px 1px #999'};
    position: ${props => (props.isActive ? 'relative' : 'unset')};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StockDetails = styled.div`
    text-transform: uppercase;
`;

const Title = styled(H4)`
    line-height: 8px !important;
    font-size: 16px !important;
    font-family: SF-UI-Text-Bold;
    margin: 0;
`;

const Subtitle = styled.span`
    display: block;
    color: #999;
    padding-left: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    width: 90px;
`;

const ChartContainer = styled.div`
    padding-right: 10px;
    flex: 1;
    max-width: 70px;
`;

const StyledTag = styled(Tag)<{ isPositive: boolean }>`
    background-color: ${props => {
        if (props.isPositive === null) {
            return '#999';
        } else if (props.isPositive) {
            return '#21ce99';
        } else {
            return '#FF4D2D';
        }
    }};
    padding: 4px 8px;
    text-align: center;
`;

const GET_STOCKR_INFO = gql`
    query StockItem(
        $symbol: ID!
        $timeRange: TimeRange!
        $interval: Interval!
    ) {
        stock(symbol: $symbol) {
            quote {
                price
                change
            }
            chartData(timeRange: $timeRange, interval: $interval) {
                time
                close
                time
                close
                open
                high
                low
                volume
            }
            market {
                currency
            }
        }
    }
`;

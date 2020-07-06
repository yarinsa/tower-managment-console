import React from 'react';
import styled from 'styled-components/macro';
import { StockListItem } from './StockListItem';
import { Stock } from '../../@generated/types';
import { useParams, useHistory } from 'react-router-dom';
import { MatchParams } from '../../routes';

interface StockListProps {
    stocks: [any];
}

export const StockList: React.FC<StockListProps> = ({ stocks }) => {
    let { symbol } = useParams<MatchParams>();
    console.log(symbol);
    let history = useHistory();
    const handleClick = (symbol: string) => {
        history.push(`/stocks/${symbol}`);
    };

    const StockItems = stocks.map((stock: Partial<Stock>, index) => (
        <StockListItem
            key={index}
            {...stock}
            isActive={symbol === stock.symbol}
            onStockSelect={handleClick}
        />
    ));

    return <div>{stocks && StockItems}</div>;
};

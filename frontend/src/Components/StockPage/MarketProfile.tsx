import React from 'react';
import { Market, MarketState } from '../../@generated/types';
import styled from 'styled-components/macro';
import { Card, H1, H4 } from '@blueprintjs/core';
import ISO6391 from 'iso-639-1';
import Clock from 'react-live-clock';

export const MarketProfile: React.FC<Exclude<Market, '_typename'>> = ({
    currency,
    exchangeName,
    gmtOffset,
    language,
    marketState,
    region,
    timezone,
}) => {
    const languageCode = language.split('-')[0];

    return (
        <Root>
            <H1>{exchangeName}</H1>
            <div>
                <Title>Currency:</Title>
                <span>{currency}</span>
            </div>
            <div>
                <Title>Language:</Title>
                <span>{ISO6391.getName(languageCode)}</span>
            </div>
            <div>
                <Title>Region:</Title>
                <span>{region}</span>
            </div>
            <div>
                <Title>Local Time:</Title>
                <span>
                    <Clock
                        format={'MM-DD-YYYY HH:mm:ss'}
                        ticking={true}
                        timezone={timezone}
                    />
                </span>
            </div>
            <MarketStateContainer>
                <Title>Market State</Title>
                {marketState !== MarketState.Closed && (
                    <TimeCardList>
                        (
                        <TimeCard
                            isActive={
                                marketState === MarketState.Pre ||
                                marketState === MarketState.Prepre
                            }
                        >
                            <TimeCardTitle> PRE </TimeCardTitle>
                        </TimeCard>
                        <TimeCard
                            isActive={marketState === MarketState.Regular}
                        >
                            <TimeCardTitle> REGULAR </TimeCardTitle>
                        </TimeCard>
                        <TimeCard
                            isActive={
                                marketState === MarketState.Post ||
                                marketState === MarketState.Postpost
                            }
                        >
                            <TimeCardTitle> POST </TimeCardTitle>
                        </TimeCard>
                        )
                    </TimeCardList>
                )}
                {marketState === MarketState.Closed && (
                    <TimeCardList>
                        <TimeCard isActive={null}>
                            <TimeCardTitle> Closed </TimeCardTitle>
                        </TimeCard>
                    </TimeCardList>
                )}
            </MarketStateContainer>
            <SkylineImage src={currency} />
        </Root>
    );
};

const Root = styled.div``;

const Title = styled(H4)`
    display: inline-block;
    font-size: 16px !important;
    margin-right: 10px;
    font-family: SF-UI-Text-Bold;
`;

const TimeCardList = styled.div`
    display: flex;
    justify-content: center;
`;

// True Or false values for is Active inidicates the current market status when open (PRE/POST/REG)
// Null value represents closed marker and turns to red outline.
const TimeCard = styled(Card)<{ isActive: boolean | null }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    border: 1px solid
        ${props => {
            if (props.isActive) {
                return '#62D96B';
            } else if (props.isActive === null) {
                return '#ff1b1b';
            } else {
                return 'unset';
            }
        }};
`;

const TimeCardTitle = styled(H4)`
    margin: 0;
`;

const MarketStateContainer = styled.div`
    text-align: center;
`;

const SkylineImage = styled.img.attrs(props => {
    let src: NodeRequire;
    if (props.src === 'USD') {
        src = require('../../assets/cities-skyline/usd.svg');
    } else {
        src = require('../../assets/cities-skyline/eur.svg');
    }

    return {
        src: src,
    };
})`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 10px;
`;

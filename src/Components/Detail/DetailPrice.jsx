import React, { useState } from 'react';
import { styled } from 'styled-components';
import { DetailTitle } from '../../Pages/Detail';

const DetailPriceWrapper = styled.div``;

const PriceContents = styled.div`
    display: flex;
    align-items: center;
`;

const CurrentPrice = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 35%;
    color: ${(props) => props.theme.accent_dark};
    font-size: 24px;
    align-items: center;
    margin-right: 24px;
    span {
        margin: 8px 0;
    }
`;

const OtherPrices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-basis: 65%;
`;

const PriceName = styled.span``;

const PriceValue = styled.span``;

const PriceChange = styled.span``;

export default function DetailPrice({ tickersData }) {
    const currentPrice = tickersData.quotes.USD.price.toFixed(2);
    const timeData = [
        { label: '15Minutes ago', prop: 'percent_change_15m' },
        { label: '30Minutes ago', prop: 'percent_change_30m' },
        { label: '1Hour ago', prop: 'percent_change_1h' },
        { label: '6Hours ago', prop: 'percent_change_6h' },
        { label: '12Hours ago', prop: 'percent_change_12h' },
        { label: '7Days ago', prop: 'percent_change_7d' },
        { label: '30Days ago', prop: 'percent_change_30d' },
        { label: '1Year ago', prop: 'percent_change_1y' },
    ];
    return (
        <DetailPriceWrapper className="detail_item">
            <DetailTitle>Price</DetailTitle>
            <PriceContents>
                <CurrentPrice>
                    <PriceName>Current Price</PriceName>
                    <PriceValue>{currentPrice} USD</PriceValue>
                </CurrentPrice>
                <OtherPrices>
                    {timeData.map((time) => (
                        <React.Fragment key={time.label}>
                            <PriceName>{time.label}</PriceName>
                            <PriceValue>
                                {(
                                    currentPrice *
                                    (100 - tickersData.quotes.USD[time.prop])
                                ).toFixed(2)}{' '}
                                USD
                            </PriceValue>
                            <PriceChange>
                                {tickersData.quotes.USD[time.prop].toFixed(2)}%
                            </PriceChange>
                        </React.Fragment>
                    ))}
                </OtherPrices>
            </PriceContents>
        </DetailPriceWrapper>
    );
}

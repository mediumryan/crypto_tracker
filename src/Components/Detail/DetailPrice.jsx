import React from 'react';
import { styled } from 'styled-components';
import { DetailTitle } from '../../Pages/Detail';
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { wrapperVariants } from './DetailOverView';

const DetailPriceWrapper = styled(motion.div)`
    align-self: center;
`;

const PriceContents = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
`;

const CurrentPrice = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.accent_dark};
    font-size: 28px;
    align-items: center;
    margin-right: 24px;
    span {
        margin: 8px 0;
    }
`;

const OtherPrices = styled.div``;

const OtherPriceItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    font-size: 20px;
    margin-bottom: 24px;
    padding: 12px 24px;
    box-shadow: ${(props) => props.theme.bg_dark} 0px 8px 8px -8px,
        ${(props) => props.theme.bg_dark} 0px 30px 60px -30px,
        ${(props) => props.theme.bg_dark} 0px 30px 60px -30px inset;
    border-radius: 4px;
`;

const PriceName = styled.span``;

const PriceValue = styled.span``;

const PriceChange = styled.span`
    display: flex;
    align-items: center;
    color: ${(props) =>
        props.priceColor > 0
            ? '#0000FF'
            : props.priceColor === 0
            ? props.theme.text_dark
            : '#FF0000'};
`;

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
        <DetailPriceWrapper
            className="detail_item"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
        >
            <DetailTitle>Price</DetailTitle>
            <PriceContents>
                <CurrentPrice>
                    <PriceName>Current Price</PriceName>
                    <PriceValue>{currentPrice} USD</PriceValue>
                </CurrentPrice>
                <OtherPrices>
                    {timeData.map((time) => (
                        <OtherPriceItems key={time.label}>
                            <PriceName>{time.label}</PriceName>
                            <PriceValue>
                                {(
                                    currentPrice *
                                    (100 - tickersData.quotes.USD[time.prop])
                                ).toFixed(2)}{' '}
                                USD
                            </PriceValue>
                            <PriceChange
                                priceColor={tickersData.quotes.USD[time.prop]}
                            >
                                {tickersData.quotes.USD[time.prop].toFixed(2)}%
                                {tickersData.quotes.USD[time.prop] > 0 ? (
                                    <FaArrowUp />
                                ) : tickersData.quotes.USD[time.prop] === 0 ? (
                                    <FaMinus />
                                ) : (
                                    <FaArrowDown />
                                )}
                            </PriceChange>
                        </OtherPriceItems>
                    ))}
                </OtherPrices>
            </PriceContents>
        </DetailPriceWrapper>
    );
}

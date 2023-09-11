import React from 'react';
import { styled } from 'styled-components';
import { DetailTitle } from '../../Pages/Detail';
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { wrapperVariants } from './DetailOverView';

const DetailPriceWrapper = styled(motion.div)`
    align-self: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        min-height: 30vh;
        margin: var(--margin-medium-large) var(--margin-very-large);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: var(--margin-very-large) auto;
        padding: var(--padding-large) 0;
    }
`;

const PriceContents = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
`;

const CurrentPrice = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.accent_dark};
    font-size: var(--font-size-medium-large);
    margin-right: var(--margin-medium-large);
`;

const OtherPrices = styled.div``;

const OtherPriceItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-medium-large);
    padding: var(--padding-double-medium);
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
            ? '#8CC63F'
            : props.priceColor === 0
            ? props.theme.text_dark
            : '#FF5733'};
`;

export default function DetailPrice({ tickersData }) {
    const currentPrice = tickersData.quotes.USD.price.toFixed(2);
    const timeData = [
        { label: '15M ago', prop: 'percent_change_15m' },
        { label: '30M ago', prop: 'percent_change_30m' },
        { label: '1H ago', prop: 'percent_change_1h' },
        { label: '6H ago', prop: 'percent_change_6h' },
        { label: '12H ago', prop: 'percent_change_12h' },
        { label: '7D ago', prop: 'percent_change_7d' },
        { label: '30D ago', prop: 'percent_change_30d' },
        { label: '1Y ago', prop: 'percent_change_1y' },
    ];
    return (
        <DetailPriceWrapper
            className="detail_item"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
        >
            <DetailTitle>Price(USD)</DetailTitle>
            <PriceContents>
                <CurrentPrice>
                    <PriceName>Current Price</PriceName>
                    <PriceValue>{currentPrice}</PriceValue>
                </CurrentPrice>
                <OtherPrices>
                    {timeData.map((time) => (
                        <OtherPriceItems key={time.label}>
                            <PriceName>{time.label}</PriceName>
                            <PriceValue>
                                {(
                                    currentPrice *
                                    (100 - tickersData.quotes.USD[time.prop])
                                ).toFixed(2)}
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

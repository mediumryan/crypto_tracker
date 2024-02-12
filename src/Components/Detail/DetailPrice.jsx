import { styled } from 'styled-components';
import { motion } from 'framer-motion';
// import icons
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
// import components
import { DetailTitle, wrapperVariants } from './DetailOverView';

const DetailPriceWrapper = styled(motion.div)`
    flex-basis: 30%;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
`;

const PriceInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
`;

const CurrentPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${(props) => props.theme.accent_dark};
    font-size: 1.15rem;
    span {
        color: ${(props) => props.theme.accent};
        margin-top: 1rem;
    }
`;

const OtherPriceItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const OtherPriceItems = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 0.9rem;
    margin: 0.5rem 0;
    padding: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.accent};
    & > div:nth-child(2) {
        text-align: center;
    }
`;

const PriceChange = styled.div`
    justify-self: end;
    display: flex;
    align-items: center;
    & > p {
        margin-right: 0.5rem;
    }
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
            <PriceInner>
                <CurrentPrice>
                    <p>Current Price</p>
                    <span>{currentPrice} USD</span>
                </CurrentPrice>
                <OtherPriceItemWrapper>
                    {timeData.map((time) => (
                        <OtherPriceItems key={time.label}>
                            <div>{time.label}</div>
                            <div>
                                {(
                                    currentPrice *
                                    (100 - tickersData.quotes.USD[time.prop])
                                ).toFixed(2)}
                                USD
                            </div>
                            <PriceChange
                                style={{
                                    color:
                                        tickersData.quotes.USD[time.prop] > 0
                                            ? '#8CC63F'
                                            : tickersData.quotes.USD[
                                                  time.prop
                                              ] === 0
                                            ? tickersData.quotes.USD[
                                                  time.prop
                                              ] > 0
                                            : '#FF5733',
                                }}
                            >
                                <p>
                                    {tickersData.quotes.USD[time.prop].toFixed(
                                        2
                                    )}
                                    %
                                </p>
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
                </OtherPriceItemWrapper>
            </PriceInner>
        </DetailPriceWrapper>
    );
}

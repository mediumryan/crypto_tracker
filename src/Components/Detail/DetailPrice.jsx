import { styled } from 'styled-components';
import { motion } from 'framer-motion';
// import icons
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
// import components
import { DetailTitle, wrapperVariants } from './DetailOverView';

const DetailPriceWrapper = styled(motion.div)`
    flex-basis: 30%;
    border: 0.5px solid ${(props) => props.theme.text_dark};
    margin: 1.5rem 3rem;
    padding: 1.5rem 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 20px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 1rem 0;
        width: 90%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 1rem 0;
        padding: 2rem;
    }
`;

const PriceInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
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
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 1rem 0;
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
    border-bottom: 0.5px solid ${(props) => props.theme.text_dark};
    & > div:nth-child(2) {
        text-align: center;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
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

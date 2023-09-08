import React from 'react';
import { styled } from 'styled-components';
import { Logo } from '../Coin';
import { DetailTitle } from '../../Pages/Detail';
import { motion } from 'framer-motion';

const DetailOverviewWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        min-height: 30vh;
        margin: var(--margin-medium-large) var(--margin-very-large);
    }
`;

const OverviewContents = styled.div`
    display: flex;
`;

const RankType = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: var(--margin-medium);
    padding: var(--padding-double-large);
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        border-bottom: 1px solid white;
        width: 100%;
        padding-bottom: 24px;
        flex-basis: 30%;
    }
`;

const RankTypeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
        margin-bottom: var(--margin-medium);
        font-weight: 700;
        font-size: var(--font-size-medium);
    }
`;

const OverView = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--margin-medium);
    padding: var(--padding-double-large);
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    h3 {
        margin-bottom: var(--margin-medium);
        font-size: var(--font-size-medium);
        font-weight: 700;
    }
    p {
        padding-left: var(--padding-very-large);
        line-height: 1.5;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        flex-basis: 70%;
    }
`;

export const wrapperVariants = {
    initial: {
        opacity: 0,
        scale: 0,
        y: -200,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.2,
        },
    },
};

export default function DetailOverView({ infoData }) {
    return (
        <DetailOverviewWrapper
            className="detail_item"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
        >
            <DetailTitle
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Logo
                    src={`https://coinicons-api.vercel.app/api/icon/${infoData.symbol.toLowerCase()}`}
                />
                <span>{infoData.name}</span>
                <span>({infoData.symbol})</span>
            </DetailTitle>
            <OverviewContents>
                <RankType>
                    <RankTypeItem>
                        <span>Rank</span>
                        <span>{infoData.rank}</span>
                    </RankTypeItem>
                    <RankTypeItem>
                        <span>Type</span>
                        <span>{infoData.type}</span>
                    </RankTypeItem>
                </RankType>
                <OverView>
                    <h3>OverView</h3>
                    <p>{infoData.description}</p>
                </OverView>
            </OverviewContents>
        </DetailOverviewWrapper>
    );
}

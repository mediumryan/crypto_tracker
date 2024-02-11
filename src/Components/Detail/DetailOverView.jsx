import React from 'react';
import { styled } from 'styled-components';
import { Logo } from '../Coin';
import { motion } from 'framer-motion';

const DetailOverviewWrapper = styled(motion.div)`
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
`;

export const DetailTitle = styled.h1`
    font-size: 1.15rem;
    margin: 1rem 0;
    text-align: center;
    color: ${(props) => props.theme.accent};
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        border-bottom: 1px solid ${(props) => props.theme.text_dark};
        width: 100%;
        padding-bottom: 1.5rem;
    }
`;

const OverviewContents = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }
`;

const RankType = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    font-size: 1.15rem;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
`;

const RankTypeItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    span:first-child {
        font-weight: 700;
    }
`;

const OverView = styled.div`
    flex-basis: 60%;
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 0.85rem;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
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
                        <span>Rank : </span>
                        <span>{infoData.rank}</span>
                    </RankTypeItem>
                    <RankTypeItem>
                        <span>Type : </span>
                        <span>{infoData.type}</span>
                    </RankTypeItem>
                </RankType>
                <OverView>
                    <p>{infoData.description}</p>
                </OverView>
            </OverviewContents>
        </DetailOverviewWrapper>
    );
}

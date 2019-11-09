import React from 'react';
import styled from 'styled-components';
import PortfolioContainer from '../../elements/PortfolioContainer'



const SubtitleStyled = styled.p`
    font-weight: 500;
    font-size: 54px;
    line-height: 62px;
    margin-bottom: 4rem;
`;

const BlurbStyled = styled.p`
    font-weight: 500;
    font-size: 38px;
    line-height: 49px;
    padding-right: 2rem;
`;

const Wrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 15rem;
`;


const Overview = ({
    subtitle,
    blurb,
    Subtitle = SubtitleStyled,
    Blurb = BlurbStyled,
}) => (
        <>
        <Wrapper>
                <PortfolioContainer>
                    <Subtitle>{subtitle}</Subtitle>
                </PortfolioContainer>

                <PortfolioContainer>
                    <Blurb>{blurb}</Blurb>
                </PortfolioContainer>

        </Wrapper>
        </>
    );

export default Overview;
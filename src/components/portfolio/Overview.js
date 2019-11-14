import React from 'react';
import styled from 'styled-components';
import ColItem2 from '../../elements/ColItem2'

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
    margin-left: 10rem;
    margin-right: 15rem;
`;

const Container = styled(ColItem2)`
  display: flex;
  width: 85vw;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  flex-wrap: wrap;
`;


const Overview = ({
    subtitle,
    blurb,
    Subtitle = SubtitleStyled,
    Blurb = BlurbStyled,
}) => (
        <>
        <Wrapper>
                <Container>
                    <Subtitle>{subtitle}</Subtitle>
                </Container>

                <Container>
                    <Blurb>{blurb}</Blurb>
                </Container>

        </Wrapper>
        </>
    );

export default Overview;
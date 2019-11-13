import React from 'react'
import styled from 'styled-components'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'


const WrapperStyled = styled.div`
  position: relative;
  margin-top: 80px;
  padding-bottom: 100px;
  &:before {
    content: ' ';
    z-index: -1;
    width: 100%;
    height: 60%;
    max-width: auto;
    position: absolute;
    left: 15%;
    right: 0%;
    top: 14.62%;
    bottom: 14.46%;
    background-image: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
  }

`;

const PortfolioHero = ({
    imagePath,
    subtitleTop,
    subtitleMiddle,
    subtitleBottom,
    name,
    Wrapper = WrapperStyled
}) => (
    <>
        <Wrapper background = {imagePath}>
            <PortfolioTitle
                subtitleTop={subtitleTop}
                subtitleMiddle={subtitleMiddle}
                subtitleBottom={subtitleBottom}
                name={name} />
        </Wrapper>
    </>

);

export default PortfolioHero;
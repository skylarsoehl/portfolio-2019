import React from "react"
import styled from 'styled-components'
import PortfolioTitle from '../components/portfolio/PortfolioTitle'
import ColItem2 from '../elements/ColItem2'

const StyledImage = styled.img`
  position: absolute;
  width: 836px;
  height: 456px;
`;

const ImageBgStyled = styled.div`
    position: relative;
    width: 100 %; 
    margin-top 10rem;
    margin-bottom: 7rem;
`;



const SectionHero = ({
    stt,
    subtitleMiddle,
    subtitleBottom,
    name,
    src,
    alt,
    ImageBg = ImageBgStyled,
    Image = StyledImage
}) => (
        <>
            <ImageBg>
                <ColItem2>
                    <Image src={src} alt={alt}>
                    </Image>
                </ColItem2>

                    <PortfolioTitle
                        subtitleTop={stt}
                        subtitleMiddle={subtitleMiddle}
                        subtitleTop={subtitleBottom}
                        name={name}
                    />
            </ImageBg>
        </>
);


export default SectionHero
import React from "react"
import styled from 'styled-components'
import Img from '../elements/Img'

const GridContainerStyled = styled.div`
    margin: 4rem;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;



const GridPhotoThree = ({
    src1,
    alt1,
    caption1,
    src2,
    alt2,
    caption2,
    src3,
    alt3,
    caption3,
    GridContainer = GridContainerStyled,
}) => (
        <>
            <GridContainer>
                <Img
                src={src1}
                alt={alt1}
                caption={caption1}
                ></Img>

                <Img
                    src={src2}
                    alt={alt2}
                    caption={caption2}
                ></Img>

                <Img
                    src={src3}
                    alt={alt3}
                    caption={caption3}
                ></Img>
                
            </GridContainer>
        </>
    );


export default GridPhotoThree
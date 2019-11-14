import React from "react"
import styled from 'styled-components'

const GridContainerStyled = styled.div`
    margin: 4rem;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;

const ImgStyled = styled.img`
    position: relative;
    object-fit: contain;
    width: 258px;
    height: 328px;
`;


const GridPhotoFour = ({
    src1,
    alt1,
    src2,
    alt2,
    src3,
    alt3,
    src4,
    alt4,
    GridContainer = GridContainerStyled,
    Img = ImgStyled
}) => (
        <>
            <GridContainer>
                <Img
                    src={src1}
                    alt={alt1}
                ></Img>

                <Img
                    src={src2}
                    alt={alt2}
                ></Img>

                <Img
                    src={src3}
                    alt={alt3}
                ></Img>

                <Img
                    src={src4}
                    alt={alt4}
                ></Img>
            </GridContainer>
        </>
    );


export default GridPhotoFour
import React from "react"
import styled from 'styled-components'

const GridContainerStyled = styled.div`
    margin: 5rem;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;

const ImgStyled = styled.img`
    position: relative;
    object-fit: contain;
    width: 514px;
    height: 308px;
`;


const GridPhotoTwo = ({
    src1,
    alt1,
    src2,
    alt2,
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
            </GridContainer>
        </>
    );


export default GridPhotoTwo
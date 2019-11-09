import React from "react"
import styled from 'styled-components'


const ImgStyled = styled.img`
    position: relative;
    width: 350px;
    height: 260px;
`;

const CaptionStyled = styled.figcaption`
    margin-top: 1rem;
   font-size: 14px;
   font-weight: 600;
   line-height: 23px;
`;


const Img = ({
    src,
    alt,
    caption,
    Img = ImgStyled,
    Caption = CaptionStyled
}) => (
        <>
        <figure>
                <Img
                    src={src}
                    alt={alt}>
                </Img>

                <Caption>
                    {caption}
                </Caption>
        </figure>

        </>
    );


export default Img
import React from "react"
import styled from 'styled-components'


const ImgStyled = styled.img`
    object-fit: contain;
    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`};
    border: ${props => `${props.border}`};
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
    width,
    height,
    border,
    Img = ImgStyled,
    Caption = CaptionStyled
}) => (
        <>
        <figure>
                <Img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    border= {border}>
                </Img>

                <Caption>
                    {caption}
                </Caption>
        </figure>

        </>
    );


export default Img
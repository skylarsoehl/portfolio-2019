import React from 'react'
import styled from 'styled-components'
import './layout.scss';
import * as theEnd from '../images/the-end.svg'

const SiteContainer = styled.div`
    margin: 57px;
`;

const SiteTitle = styled.div`
    font-family: 'Maelstrom';
    font-size: 100px;
    font-size: 60px;
    line-height: 78px;
    position: absolute;
    left: 3%;
    right: 53.96%;
    top: 7%;
    bottom: 97.82%;
`;

const FooterImage = styled.img`
    display: block;
    margin: 20% auto;
    width: 50%;
`;

const Layout = (props) => {
    return (
        <SiteContainer>
            <SiteTitle>SKYLAR SOEHL</SiteTitle>
            {props.children}
            <FooterImage src={theEnd} alt='This is the end of the page.'></FooterImage>
        </SiteContainer>
    )
}
export default Layout
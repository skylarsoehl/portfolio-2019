import React from 'react'
import styled from 'styled-components'
import './layout.scss';
import * as theEnd from '../images/the-end.svg'

const SiteContainer = styled.div`
    margin: 57px;
    font-family: neue-haas-unica, sans-serif;
`;

const SiteTitle = styled.div`
    font-family: 'Maelstrom';
    font-size: 60px;
    left: 3%;
    right: 53.96%;
    top: 7%;
    margin-bottom: 20px;
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
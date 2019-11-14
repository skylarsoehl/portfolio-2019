import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import './layout.scss';
import * as theEnd from '../images/the-end.svg'
import { COLORS } from '../tokens';

const SiteContainer = styled.div`
    margin: 57px;
    font-family: neue-haas-unica, sans-serif;
`;

const LinkTitle = styled(Link)`
    text-decoration: none;
    color: black;
    transition: color 250ms ease-in-out;
    &:hover,
  &:focus {
    color: ${COLORS.RED};
    text-decoration: none;
  }
`;

const SiteTitle = styled.div`
    font-family: 'Maelstrom';
    font-size: 60px;
    left: 3%;
    right: 53.96%;
    margin-top: -3rem;
    margin-bottom: 15px;
`;

const FooterImage = styled.img`
    display: block;
    margin: 45% auto;
    width: 50%;
`;

const Layout = (props) => {
    return (
        <SiteContainer>
            <LinkTitle to="/">
                <SiteTitle>SKYLAR SOEHL</SiteTitle>
            </LinkTitle>
            {props.children}
            <FooterImage src={theEnd} alt='This is the end of the page.'></FooterImage>
        </SiteContainer>
    )
}
export default Layout
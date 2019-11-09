import React from "react"
import styled from 'styled-components'
import '../layout.scss';
import A from '../../elements/A'
import ColItem2 from '../../elements/ColItem2'
import SideTitle from '../SideTitle'
import SectionTitle from '../home/SectionTitle'
import Container from "../../elements/Container";



const PorfolioIndex = styled.ul`
    list-style: none;
    font-size: 50px;
`;

const PortfolioItem = styled.span`
    font-size: 25px;
    font-weight: 500;
    margin-right: 2em;
`;

const Wrapper = styled(ColItem2)`
    margin-top: 8rem;
`;




const Work = () => {
    return (
        <Container>
            <SideTitle title="02" />
            
            <SectionTitle 
            titleTop="SEL"
            titleMiddle="ECT"
            titleBottom="ED"
            smallTitle="WORK"
            />

            <Wrapper>
                <PorfolioIndex>
                    <li><PortfolioItem>2.1</PortfolioItem><A href="/selected-works/Butter">Butter</A></li>
                    <li><PortfolioItem>2.2</PortfolioItem><A href="/selected-works/Nuwit">NUWIT</A></li>
                    <li><PortfolioItem>2.3</PortfolioItem><A href="/selected-works/Kakuro">Kakuro</A></li>
                    <li><PortfolioItem>2.4</PortfolioItem><A href="/selected-works/Tough">Tough</A></li>
                    <li><PortfolioItem>2.5</PortfolioItem><A href="/selected-works/Esfresco">Esfresco</A></li>
                    <li><PortfolioItem>2.6</PortfolioItem><A href="/selected-works/Etc">Etc</A></li>
                </PorfolioIndex>
            </Wrapper>
            
        </Container>
    )
}
export default Work
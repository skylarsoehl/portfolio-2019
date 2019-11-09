import React from "react"
import styled from 'styled-components'
import homeStyles from '../home/home.module.scss'
import '../layout.scss';
import A from '../../elements/A'
import ColItem2 from '../../elements/ColItem2'
import ColItem1 from '../../elements/ColItem1'
import H2 from '../../elements/H2'
import A from '../../elements/A'
import SectionTitle from '../home/SectionTitle'



const PorfolioIndex = styled.ul`
    list-style: none;
    font-size: 36px;
`;

const PortfolioItem = styled.span`
    margin-right: 4em;
`;




const Work = () => {
    return (
        <div className={homeStyles.container}>
            
            <SectionTitle 
            titleTop="SEL"
            titleMiddle="ECT"
            titleBottom="ED"
            smallTitle="WORD"
            />

            <ColItem2>
                <PorfolioIndex>
                    <li><PortfolioItem>2.1</PortfolioItem><A href="/selected-works/Butter">Butter</A></li>
                    <li><PortfolioItem>2.2</PortfolioItem><A href="/selected-works/Nuwit">NUWIT</A></li>
                    <li><PortfolioItem>2.3</PortfolioItem><A href="/selected-works/Kakuro">Kakuro</A></li>
                    <li><PortfolioItem>2.4</PortfolioItem><A href="/selected-works/Tough">Tough</A></li>
                    <li><PortfolioItem>2.5</PortfolioItem><A href="/selected-works/Esfresco">Esfresco</A></li>
                    <li><PortfolioItem>2.6</PortfolioItem><A href="/selected-works/Etc">Etc</A></li>
                </PorfolioIndex>
            </ColItem2>
            
        </div>
    )
}
export default Work
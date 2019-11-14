import React from 'react'
import Layout from '../../components/layout'
import styled from 'styled-components'
import Center from '../../elements/Center'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import Grid from '../../components/portfolio/Grid'
import Img from '../../components/Img'
import CatRoleDate from '../../components/portfolio/CatRoleDate'
import A from '../../elements/A'
import P from '../../elements/P'

const images = require.context('../../images/portfolio/Kakuro', true)
const imagePath = name => images(name, true)


const StyledLink = styled(A)`
    font-size: 48px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
`;

const KakuroPage = () => {
    return (
        <Layout>

            <PortfolioHero
                subtitleTop="カッ"
                subtitleMiddle="クロ"
                subtitleBottom=""
                name="KAKURO"
                imagePath={imagePath('./comp2.png')} />


            <CatRoleDate
                categoryList={['Object-Oriented Design', 'Java', 'UI design']}
                roleList={['Co-creator']}
                date="November 2017 &ndash; December 2019"
            />



            <Overview
                subtitle="A mathematical transliteration of the crossword puzzle coded in Java."
                blurb="Kakuro Puzzle is a fully functioning game created with Java Swing. This was a month-long project undertaken during my third semester of college in my Object-Oriented Programming class. Kakuro is played almost identically to its more popular cousin, Saduko. In Kakuro, the number of each colored tile represents the number that every number (1-9) in the white tiles must add up to. The first number in the colored tiles represents the clue for a column, and the second number represents the clue for a row. In collaboration with Matthew Ritchie. UI design done by myself."
                        />
            
            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="SCREENS"></SideTitle>
                <Img
                    src={imagePath('./kakmockup.png')}
                    alt="Mockup of the live game in action"
                    caption=""
                    width="63.375rem"
                    height="42.25rem"
                />
            </Grid>

            <Center>
                <Img
                    src={imagePath('./kakuro1.png')}
                    alt="User Journey Explorations"
                    caption=""
                    width="63rem"
                    height="33.25rem"
                />
                <Img
                    src={imagePath('./kakuro2.png')}
                    alt="Mood Boards"
                    caption=""
                    width="63rem"
                    height="33.25rem"
                />
                <Img
                    src={imagePath('./kakuro3.png')}
                    alt="Personality Levers"
                    caption=""
                    width="63rem"
                    height="33.25rem"
                />
                <P>
                    <StyledLink href="https://github.com/skylarsoehl/KakuroPuzzle" target="_blank">View Github Repository</StyledLink>
                </P>
               
            </Center>

    

        </Layout>
    )
}

export default KakuroPage
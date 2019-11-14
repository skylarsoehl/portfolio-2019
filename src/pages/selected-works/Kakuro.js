import React from 'react'
import Layout from '../../components/layout'
import PortfolioContainer from '../../elements/portfolio/PortfolioContainer'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import Grid from '../../components/portfolio/Grid'
import Img from '../../components/Img'
import CatRoleDate from '../../components/portfolio/CatRoleDate'
import P from '../../elements/P'

const images = require.context('../../images/portfolio/Kakuro', true)
const imagePath = name => images(name, true)

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
                <SideTitle title="STEPPING INTO THE ROLE"></SideTitle>
                <PortfolioContainer>

                    <P>
                        At our very first internal meeting, the e-board and I created a list of action items and goals for the year. My to-dos included creating recruitment materials, event collateral, merchandise designs, and a design system for the organization. As for my goal, I first aimed to increase user engagement on our social media, peak interest for our social events, and retain members (new and old) through these tasks.
                </P>
                    <P>
                        Secondly, I planned to spend time developing NUWIT’s brand and creating an official design system + brand book that could be used by future design and web chairs. After spending a semester working as a developer for Scout, I was inspired to create something similar (albeit more simple) for NUWIT. As we continue to grow, having a guidelines to inform future design-related activities will be important for distinguishing and promoting the organization.
                </P>

                </PortfolioContainer>
            </Grid>

        </Layout>
    )
}

export default KakuroPage
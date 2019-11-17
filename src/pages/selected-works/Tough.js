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


const images = require.context('../../images/portfolio/Tough', true)
const imagePath = name => images(name, true)

const ToughPage = () => {
    return (
        <Layout>

            <PortfolioHero
                subtitleTop="CAM"
                subtitleMiddle="PA"
                subtitleBottom="IGN"
                name="TOUGH"
                imagePath={imagePath('./Vision2.png')} />


            <CatRoleDate
                categoryList={['Campaign Design', 'Infomation Design', 'Social Justice']}
                roleList={['Creator']}
                date="October 2018"
            />



            <Overview
                subtitle="Tough is a social campaign that aims to address the current issue of accessibility on the Green Line of Boston's subway system, the MBTA."
                blurb="For my Design Processes class, I was asked to create a design intervention for the MBTA. We were given complete freedom over the form of this project, the only exception that our idea must be translated into digital form.I have always been a purveyor of justice for marginalized groups and took this assignment as an opportunity to try designing for social awareness. I was inspired by my late grandfather who, as a double amputee, constantly struggled to use public transportation."
            />

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="CONCEPTION"></SideTitle>
                <PortfolioContainer>

                    <P>
                       This project started with an exercise that required me to ride the T. The experience map  below illustrates my very first experience with Boston's transit system. Growing up close to New York City, I was no stranger to public transportation, however, I have never been in a situation where I needed to independently navigate through public transit. This led to my anxious and frustrating "adventure" on the T.
 
                    </P>
                    
                    <P>
                        Secondly, I planned to spend time developing NUWIT’s brand and creating an official design system + brand book that could be used by future design and web chairs. After spending a semester working as a developer for Scout, I was inspired to create something similar (albeit more simple) for NUWIT. As we continue to grow, having a guidelines to inform future design-related activities will be important for distinguishing and promoting the organization.
                </P>

                </PortfolioContainer>
            </Grid>

           


        </Layout>
    )
}

export default ToughPage
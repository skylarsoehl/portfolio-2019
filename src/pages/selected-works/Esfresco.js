import React from 'react'
import styled from 'styled-components'
import Center from '../../elements/Center'
import Layout from '../../components/layout'
import PortfolioContainer from '../../elements/portfolio/PortfolioContainer'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import Grid from '../../components/portfolio/Grid'
import Img from '../../components/Img'
import CatRoleDate from '../../components/portfolio/CatRoleDate'
import P from '../../elements/P'
import A from '../../elements/A'
import * as EsfrescoPresentation from '../../documents/portfolio/esfrescoPresentation.pdf'

const images = require.context('../../images/portfolio/Esfresco', true)
const imagePath = name => images(name, true)

const StyledLink = styled(A)`
    font-size: 48px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
`;

const EsfrescoPage = () => {
    return (

        <Layout>

            <PortfolioHero
                subtitleTop="EXPE"
                subtitleMiddle="RIE"
                subtitleBottom="NCE"
                name="ESFRESCO"
                imagePath={imagePath('./esfrescoMockup.jpeg')} />


            <CatRoleDate
                categoryList={['Experience Design', 'Illustration', 'Prototyping']}
                roleList={['Creator']}
                date="January 2018"
            />

            <Overview
                subtitle="Object design conception for a multi-dimensional solution to food waste in American households."
                blurb="For my Experience Drawing class I was given the task of redesigning or creating an object that would improve an experience for myself. Based on a previous assignment, where I was asked to create an experience map based off a single day in my life, I decided to focus in on the stress I faced surrounding grocery shopping and wasting food. For this project we were only to be concerned about desirability and viability (not feasbility). From this came Esfresco, a portmanteau of “es fresco,” meaning “is fresh” in spanish."
            />

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="RESEARCH"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Although the target audience for this project was me specifically, I knew I wasn't the only overworked college student, or even the only person that struggled to keep food fresh and eat it before it went bad. While this issue is found all over the world, the problem of food waste in first-world countries, specifically in the United States,is a very different than that of developing nations.
                    </P>

                    <P>My extensive research left me with three big takeaways:</P>
                    <ol>
                        <li>Americans waste a ton of food.</li>
                        <li>We feel guilty and frustrated about the food we waste.</li>
                        <li>We waste food because we’re conditioned and confused and don't have the time to think about it.</li>
                    </ol>

                    <P>
                        We all know what it feels like to throw out food we could have eaten. Whether it be fresh fruit and veggies or our leftovers, it all hurts the same. So, I was left with one goal:
                </P>
                <P>
                     Make food waste less of a problem for americans.
                </P>
                </PortfolioContainer>
            </Grid>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="SKETCHES&nbsp;&amp; ITERATIONS"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Taking inspiration from supermarkets and modern technology, some of my initial thoughts involved creating some kind of scanner that would evaluate the freshness of any food item, perishable or non-perishable.
                    </P>

                    <P>
                       The goal was to create an object that would not only tell users how long they have their food goes bad, but to also provide a way to remind people to eat their perishing food. I wanted to create something intuitive and easy to have around the house.
                </P>
                </PortfolioContainer>
            </Grid>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="5rem"
                marginBottom="5rem"
                marginLeft="5rem"
                marginRight="5rem"
            >
                <Img
                    src={imagePath('./image0000.jpg')}
                    alt=""
                    caption=""
                    width="28.8125rem"
                    height="42.6875rem"
                />
                <Img
                    src={imagePath('./image0001.jpg')}
                    alt=""
                    caption=""
                    width="28.8125rem"
                    height="42.6875rem"
                />
            </Grid>

            <Center>
                <Img
                    src={imagePath('./image0002.jpg')}
                    alt=""
                    caption=""
                    width="60.45rem"
                    height="36.25rem"
                />
            </Center>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="FINAL PROTOTYPE"></SideTitle>
                <PortfolioContainer>

                    <P>
                       The final mockup features a scanner which evaluates the freshness of a food item and displays the days that remain before it spoils in the attached tablet. The tablet offers features such as the ability to search for recipes that use the scanned food item and store the remaining shelf-life of the scanned food.
                    </P>

                    <P>
                        This device comes accompanied with an Esfresco alarm that lives in the household fridge. It works with the tablet + scanner to send and receive messages and remind users that they have food that is expiring soon. These alerts begin three days before expiration.
                    </P>
                </PortfolioContainer>
            </Grid>

            <Center>
                <Img
                    src={imagePath('./mockup.png')}
                    alt=""
                    caption=""
                    width="60.45rem"
                    height="36.25rem"
                />
            </Center>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="REFLECTION"></SideTitle>
                <PortfolioContainer>

                    <P>
                       After presenting to and receiving critique from my peers and professor, I believe I could make this idea feasible by translating my idea into an app. While we don't currently possess the science or the technology to accomplish what I have proposed, creating an app that achieves a similar goal would be a start to improving the experience of people in the United States and beyond, and also a first step to tackling the global issue of food waste in general.
 
 
                    </P>

                    <P>
                        In the future, I plan on iterating on this project and working towards creating an app prototype that uses an API to communicate with databases that already contain information about the real shelf life of food. Overall, this project has taught me how to design for experience and conceptualize a solution that can be expanded on later down the line.
                    </P>

                    <P>
                        <StyledLink href={EsfrescoPresentation} target="_blank">View pitch/presenation</StyledLink>
                    </P>
                </PortfolioContainer>
            </Grid>

        </Layout>

    )
}

export default EsfrescoPage
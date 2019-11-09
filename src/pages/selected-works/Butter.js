import React, { Profiler } from 'react'
import Layout from '../../components/layout'
import styled from 'styled-components'
import { Row, Col, Tab } from 'react-bootstrap';
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioContainer from '../../elements/PortfolioContainer'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import GridPhotoThree from '../../components/GridPhotoThree'
import P from '../../elements/P'
import * as arrow from '../../images/down-arrow.svg'
import * as butterBrandBook from '../../documents/portfolio/butterBrandBookSpreads.pdf'


const images = require.context('../../images/portfolio/Butter', true)
const imagePath = name => images(name, true)

const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  padding-bottom: 100px;
  &:before {
    content: ' ';
    z-index: -1;
    width: 100%;
    height: 60%;
    max-width: auto;
    position: absolute;
    left: 15%;
    right: 0%;
    top: 14.62%;
    bottom: 14.46%;
    background-image: url(${imagePath('./NashvilleCoffee.png')});
    background-repeat: no-repeat;
  }

`;

const Personas = styled.img`
    width: 47.375rem;
`;

const GridWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 5rem;
`;

const DesktopWireframe = styled.img`
    position: relative;
    margin-left: 170px;
    width: 28rem;
    height: auto;
`;

const TabletWireframe = styled.img`
    position: relative;
    width: 14.0625rem;
    height: auto;
`;

const MobileWireframe = styled.img`
    position: relative;
    width: 8.937rem;
    height: auto;
`;


const ButterPage = () => {
    return (
        <Layout>

            <Wrapper>
                <PortfolioTitle
                    subtitleTop="DIS"
                    subtitleMiddle="CO"
                    subtitleBottom="VER"
                    name="BUTTER" />
            </Wrapper>


            <div>
                <Row>
                    <Col>
                        <p>Category</p>
                        <p>Web Design</p>
                        <p>Brand Identity</p>
                        <p>Interaction Design</p>
                        <p>UI Design</p>
                    </Col>
                    <Col>
                        <p>Role</p>
                        <p>Developer</p>
                    </Col>
                    <Col>
                        <p>Date</p>
                        <p>January 2019 – April 2019</p>
                    </Col>
                </Row>
            </div>

            <Overview
            subtitle="A platform that curates thoughtful recommendations for locals and quality-oriented travelers who want to discover better places in an era of information overload."
                blurb="During the spring semester of 2019 I worked as a developer for Scout, Northeastern’s student-led design studio. Scout was engaged in the earliest stages of the project; our objective was to create a brand identity and responsive marketing site. The team helped our client build Butter (formerly Mend) from the bottom-up, defining target audience types, researching brand competitors, and developing the brand's personality. Butter served as my first-ever client project."
            />

         
                <PortfolioContainer>
                <h5>RESEARCH &#38; DISCOVERY</h5>
                <P>
                    Our team consisted of five members: one project lead, two designers, and two developers (including myself). For the first few weeks we spent time translating our client’s vision through a series of brainstorming exercises such as brand stars, personality levers, mood boards, the elevator pitch and more. Additionally, we also performed research into our client’s competitors and companies our client considered “brand adjacent,” like Airbnb and Away.
                </P>
                </PortfolioContainer>

                <GridPhotoThree
                src1={imagePath('./UserJourneys.jpg')}
                alt1="User Journey Explorations"
                caption1="User Journey Explorations"
                src2={imagePath('./moodBoards.jpg')}
                alt2="Mood Boards"
                caption2="Mood Boards"
                src3={imagePath('./PersonalityLevers.jpg')}
                alt3="Personality Levers"
                caption3="Personality Levers"
                />
                

            <PortfolioContainer>
                <h5>LOGO &#38; BRAND DEVELOPMENT</h5>
                <P>
                    In the early stages of brand development, the team created personas which allowed us to intentionally direct our work, develop empathy throughout our interface, and stay on track with intended users. This exercise gave both the team and our client a clear picture of the target user. Once we developed a more concrete understanding of Butter’s brand voice and target audience, the next step was to dive into color, type, and logo explorations.
                </P>
                        
                <Personas src={imagePath('./ButterPersonas.png')}></Personas>

                <P>
                    For colors, we chose a mix of warm and cool earth-toned neutrals to help convey Butter’s friendly and chic personality. We chose PT Serif as our header font for bold, clean look and humanistic terminals which give a sophisticated and playful feel. To convey Butter’s more functional and informative size we chose Muli, a minimalistic sans serif.
                </P>
                <Row>
                    <Col>
                        <img src={imagePath('./butter_colors.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./Butter_type.png')}></img>
                    </Col>
                </Row>
                <P>
                    Originally, the title of our client’s concept was Mend (short for recommend). In our initial logo sketches, we explored the ideas relating to travel, mark-making, and quotes. However, one month into the project, our client announced the need for a product name change
                </P>
                <P>
                    Working closely with our client, we explored new names for the company, product, and blog. Eventually, the client chose to continue the branding and product work with the name Butter (a catchy and obscure reference to a fictional elite restaurant). The final logo design combines our client’s desire for the use of organic shapes with a literal interpretation of butter.
                </P>
                <Row>
                    <Col>
                        <img src={imagePath('./logos_initial-05.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./ButterLogos-Full.png')}></img>
                    </Col>
                </Row>
            </PortfolioContainer>

            <PortfolioContainer>
                <h5>SITE ARCHITECTURE &#38; TECH STACK</h5>
                <P>
                    Design and development of the marketing site materialized concurrently; with design informing development. It was important to our client that the website be homepage-focused, so visitors could receive all the information they needed about the product without having to navigate to a different page. Another key aspect of the website was the ability to scale - our client wanted to be able to easily edit and add content to the site without having to rely on a developer.
                </P>
                <P>
                    Keeping this in mind, the dev team opted to use TakeShape, a headless CMS. Originally we planned to use JAM stack to create the static marketing site using the recommended stack - Takeshape with GraphQL and React.js front-end, hosted via Nelify. However, after speaking with Scout’s Technology Director and TakeShape’s CEO and CTO about the needs our project, we decided to use HTML, SCCS, and Javascript(E6) for our front-end stack in order to simplify our process.
                </P>
                <Row>
                    <img src={imagePath('./iaHomeFocusedv2_SS.jpg')}></img>
                </Row>
                <Row>
                    <img src={imagePath('./site_map_final.jpg')}></img>
                </Row>
            </PortfolioContainer>
            <PortfolioContainer>
                <h5>WIREFRAME EVOLUTION</h5>
                <P>
                    We created a few various paper wire-frame sketches that each highlighted different information. In the end, we chose to go with had a robust homepage with strong brand introduction and multiple call to actions.
                </P>
                <Row>
                    <Col>
                        <img src={imagePath('./verticalScroll1_SS.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./verticalScroll2_SS.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./horrScroll1_SS.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./horrScroll1_SS.jpg')}></img>
                    </Col>
                </Row>
                <img src={arrow}></img>

            </PortfolioContainer>

            <GridWrapper>
                <DesktopWireframe src={imagePath('./Butter_desktop_wireframe.png')}></DesktopWireframe>
                <TabletWireframe src={imagePath('./Butter_Tablet.png')}></TabletWireframe>
                <MobileWireframe src={imagePath('./Butter_Mobile.png')}></MobileWireframe>
            </GridWrapper>

            <div>
                <h5>STYLE TILES</h5>
                <Row>
                    <Col>
                        <img src={imagePath('./style_tile_1.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_2.jpg')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_3.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_4.png')}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={imagePath('./style_tile_5.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_6.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_7.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./style_tile_8.png')}></img>
                    </Col>
                </Row>
            </div>
            <div>
                <h5>FINAL PRODUCT</h5>
                <p>
                    We launched the fully-functional Butter marketing site at the end of April 2019. We also completed a design system (brand guidelines and assets) for our client in order for future expansion with the development of a mobile app.
                </p>
                <Row>
                    <img src={imagePath('./Butter_Screens_Nashville.png')}></img>
                </Row>
                <Row>
                    <Col>
                        <img src={imagePath('./About_Page.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./About_Page2.png')}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={imagePath('./Home_Page.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./HomePage041.png')}></img>
                    </Col>
                </Row>
                <a href="https://discoverbutter.co/">View the live site</a>
            </div>
            <div>
                <h5>BRAND BOOK</h5>
                <Row>
                    <img src={imagePath('./Butter_mockup.png')}></img>
                </Row>
                <Row>
                    <Col>
                        <img src={imagePath('./ButterBrandbook01.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./ButterBrandbook02.png')}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={imagePath('./ButterBrandbook03.png')}></img>
                    </Col>
                    <Col>
                        <img src={imagePath('./ButterBrandbook04.png')}></img>
                    </Col>
                </Row>
                <a href={butterBrandBook}>View Complete brand book</a>
            </div>
        </Layout>
    )
}
export default ButterPage
import React, { Profiler } from 'react'
import Layout from '../../components/layout'
import styled from 'styled-components'
import PortfolioContainer from '../../elements/PortfolioContainer'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import GridPhotoTwo from '../../components/GridPhotoTwo'
import GridPhotoThree from '../../components/GridPhotoThree'
import GridPhotoFour from '../../components/GridPhotoFour'
import CatRoleDate from '../../components/portfolio/CatRoleDate'
import P from '../../elements/P'
import A from '../../elements/A'
import * as arrow from '../../images/down-arrow.svg'
import * as butterBrandBook from '../../documents/portfolio/butterBrandBookSpreads.pdf'


const images = require.context('../../images/portfolio/Butter', true)
const imagePath = name => images(name, true)

const ImgSingle = styled.img`
    width: 47.375rem;
    margin: 5rem auto;
`;

const GridWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 5rem;
    margin-bottom: 10rem;
`;

const GridWrapperDos = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;

const Spread = styled.img`
  width: 562px;
  height: 190px;
  object-fit: contain;
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

const Arrow = styled.img`
    width: 150px;
    height: auto;
    display: block;
    margin: 5rem auto;
`;

const ImgLarge = styled.img`
    width: 1008px;
    height: 532px;
    display: block;
    margin: 5rem auto;
    object-fit: contain;
`;

const StyledLink = styled(A)`
    font-size: 48px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
`;


const ButterPage = () => {
    return (
        <Layout>

            <PortfolioHero
                subtitleTop="DIS"
                subtitleMiddle="CO"
                subtitleBottom="VER"
                name="BUTTER" 
                imagePath={imagePath('./NashvilleCoffee.png')}/>
          

           <CatRoleDate 
                categoryList={['Web Design', 'Brand Identity', 'Interaction Design', 'UI Design']}
                roleList={['Developer']}
                date="January 2019 &ndash; April 2019"
       />

   

            <Overview
            subtitle="A platform that curates thoughtful recommendations for locals and quality-oriented travelers who want to discover better places in an era of information overload."
                blurb="During the spring semester of 2019 I worked as a developer for Scout, Northeastern’s student-led design studio. Scout was engaged in the earliest stages of the project; our objective was to create a brand identity and responsive marketing site. The team helped our client build Butter (formerly Mend) from the bottom-up, defining target audience types, researching brand competitors, and developing the brand's personality. Butter served as my first-ever client project."
            />

            <GridWrapperDos>
                <SideTitle title="RESEARCH&nbsp;&amp; DISCOVERY"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Our team consisted of five members: one project lead, two designers, and two developers (including myself). For the first few weeks we spent time translating our client’s vision through a series of brainstorming exercises such as brand stars, personality levers, mood boards, the elevator pitch and more. Additionally, we also performed research into our client’s competitors and companies our client considered “brand adjacent,” like Airbnb and Away.
                </P>
                </PortfolioContainer>
            </GridWrapperDos>
    

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
                
                <GridWrapperDos>

                <SideTitle title="LOGO&nbsp;&amp; BRAND&nbsp;DEVELOPMENT"></SideTitle>

                <PortfolioContainer>
                    <P>
                        In the early stages of brand development, the team created personas which allowed us to intentionally direct our work, develop empathy throughout our interface, and stay on track with intended users. This exercise gave both the team and our client a clear picture of the target user. Once we developed a more concrete understanding of Butter’s brand voice and target audience, the next step was to dive into color, type, and logo explorations.
                </P>

                    <ImgSingle src={imagePath('./ButterPersonas.png')}></ImgSingle>

                    <P>
                        For colors, we chose a mix of warm and cool earth-toned neutrals to help convey Butter’s friendly and chic personality. We chose PT Serif as our header font for bold, clean look and humanistic terminals which give a sophisticated and playful feel. To convey Butter’s more functional and informative size we chose Muli, a minimalistic sans serif.
                </P>
                </PortfolioContainer>
                    
                </GridWrapperDos>

                <GridPhotoTwo 
                src1={imagePath('./butter_colors.jpg')}
                alt1=""
                src2={imagePath('./Butter_type.png')}
                alt2=""
                />

                <GridWrapperDos>
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <P>
                        Originally, the title of our client’s concept was Mend (short for recommend). In our initial logo sketches, we explored the ideas relating to travel, mark-making, and quotes. However, one month into the project, our client announced the need for a product name change
                </P>
                    <P>
                        Working closely with our client, we explored new names for the company, product, and blog. Eventually, the client chose to continue the branding and product work with the name Butter (a catchy and obscure reference to a fictional elite restaurant). The final logo design combines our client’s desire for the use of organic shapes with a literal interpretation of butter.
                </P>
                </PortfolioContainer>
                </GridWrapperDos>

            <GridPhotoTwo
                src1={imagePath('./logos_initial-05.jpg')}
                alt1=""
                caption1=""
                src2={imagePath('./ButterLogos-Full.png')}
                alt2=""
                caption2=""
            />

            <GridWrapperDos>
                <SideTitle title="SITE ARCHITECTURE &#38; TECH STACK"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Design and development of the marketing site materialized concurrently; with design informing development. It was important to our client that the website be homepage-focused, so visitors could receive all the information they needed about the product without having to navigate to a different page. Another key aspect of the website was the ability to scale - our client wanted to be able to easily edit and add content to the site without having to rely on a developer.
                </P>
                    <P>
                        Keeping this in mind, the dev team opted to use TakeShape, a headless CMS. Originally we planned to use JAM stack to create the static marketing site using the recommended stack - Takeshape with GraphQL and React.js front-end, hosted via Nelify. However, after speaking with Scout’s Technology Director and TakeShape’s CEO and CTO about the needs our project, we decided to use HTML, SCCS, and Javascript(E6) for our front-end stack in order to simplify our process.
                </P>
                    <ImgSingle src={imagePath('./iaHomeFocusedv2_SS.jpg')}></ImgSingle>

                    <ImgSingle src={imagePath('./site_map_final.jpg')}></ImgSingle>
                </PortfolioContainer>
            </GridWrapperDos>
        
        <GridWrapperDos>
                <SideTitle title="WIREFRAME&nbsp;EVOLUTION"></SideTitle>

                <PortfolioContainer>
                    <P>
                        We created a few various paper wire-frame sketches that each highlighted different information. In the end, we chose to go with had a robust homepage with strong brand introduction and multiple call to actions.
                    </P>

                </PortfolioContainer>

        </GridWrapperDos>
        


            <GridPhotoFour 
                src1={imagePath('./verticalScroll1_SS.jpg')}
                alt1=""
                src2={imagePath('./verticalScroll2_SS.jpg')}
                alt2=""
                src3={imagePath('./horrScroll1_SS.jpg')}
                alt3=""
                src4={imagePath('./horrScroll1_SS.jpg')}
                alt4=""
            />
    
            <Arrow src={arrow}></Arrow>

            <GridWrapper>
                <DesktopWireframe src={imagePath('./Butter_desktop_wireframe.png')}></DesktopWireframe>
                <TabletWireframe src={imagePath('./Butter_Tablet.png')}></TabletWireframe>
                <MobileWireframe src={imagePath('./Butter_Mobile.png')}></MobileWireframe>
            </GridWrapper>

                <GridWrapperDos>
                <SideTitle title="STYLE TILES"></SideTitle>

                <PortfolioContainer>
                    <P>
                        Design deliverables consisting of fonts, colors and interface elements that communicate the essence of the visual brand.
                    </P>
                </PortfolioContainer>

                </GridWrapperDos>
            


            <GridPhotoFour
                src1={imagePath('./style_tile_1.jpg')}
                alt1=""
                src2={imagePath('./style_tile_2.jpg')}
                alt2=""
                src3={imagePath('./style_tile_3.png')}
                alt3=""
                src4={imagePath('./style_tile_4.png')}
                alt4=""
            />


            <GridPhotoFour
                src1={imagePath('./style_tile_5.png')}
                alt1=""
                src2={imagePath('./style_tile_6.png')}
                alt2=""
                src3={imagePath('./style_tile_7.png')}
                alt3=""
                src4={imagePath('./style_tile_8.png')}
                alt4=""
            />

            <GridWrapperDos>
                <SideTitle title="FINAL PRODUCT"></SideTitle>
                <PortfolioContainer>
                    <P>
                        We launched the fully-functional Butter marketing site at the end of April 2019. We also completed a design system (brand guidelines and assets) for our client in order for future expansion with the development of a mobile app.
                </P>
                </PortfolioContainer>

            </GridWrapperDos>
             
           
                    
                <ImgLarge src={imagePath('./Butter_Screens_Nashville.png')}></ImgLarge>
            
            <GridPhotoTwo
                src1={imagePath('./About_Page.png')}
                alt1=""
                src2={imagePath('./About_Page2.png')}
                alt2=""
            />

            <GridPhotoTwo
                src1={imagePath('./Home_Page.png')}
                alt1=""
                src2={imagePath('./HomePage041.png')}
                alt2=""
            />

            <GridWrapperDos>
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <StyledLink href="https://discoverbutter.co/">View the live site</StyledLink>
                </PortfolioContainer>
            </GridWrapperDos>

                

            <GridWrapperDos>
                <SideTitle title="BRAND BOOK"></SideTitle>
                <PortfolioContainer>
                    <P></P>
                </PortfolioContainer>

            </GridWrapperDos>
        
                
            <ImgLarge src={imagePath('./Butter_mockup.png')}></ImgLarge>

            <GridWrapperDos>
                <Spread src={imagePath('./ButterBrandbook01.png')}></Spread>
                <Spread src={imagePath('./ButterBrandbook02.png')}></Spread>
            </GridWrapperDos>

            <GridWrapperDos>
                <Spread src={imagePath('./ButterBrandbook03.png')}></Spread>
                <Spread src={imagePath('./ButterBrandbook04.png')}></Spread>
            </GridWrapperDos>

            <GridWrapperDos>
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <StyledLink href={butterBrandBook} target="_blank">View Complete brand book</StyledLink>
                </PortfolioContainer>
            </GridWrapperDos>
          
               
        </Layout>
    )
}
export default ButterPage
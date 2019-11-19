import React from 'react'
import Layout from '../../components/layout'
import styled from 'styled-components'
import Center from '../../elements/Center'
import PortfolioContainer from '../../elements/portfolio/PortfolioContainer'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import Overview from '../../components/portfolio/Overview'
import SideTitle from '../../components/SideTitle'
import Grid from '../../components/portfolio/Grid'
import Img from '../../components/Img'
import CatRoleDate from '../../components/portfolio/CatRoleDate'
import P from '../../elements/P'
import A from '../../elements/A'
import * as arrow from '../../images/down-arrow.svg'
import * as butterBrandBook from '../../documents/portfolio/butterBrandBookSpreads.pdf'


const images = require.context('../../images/portfolio/Butter', true)
const imagePath = name => images(name, true)


const Spread = styled.img`
  width: 562px;
  height: 190px;
  object-fit: contain;
  margin-bottom: 5rem;
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

            <Grid
            numCol="2"
            gapSize="0"
            marginTop="0"
            marginBottom="0"
            marginLeft="0"
            marginRight="0"
            >
                <SideTitle title="RESEARCH&nbsp;&amp; DISCOVERY"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Our team consisted of five members: one project lead, two designers, and two developers (including myself). For the first few weeks we spent time translating our client’s vision through a series of brainstorming exercises such as brand stars, personality levers, mood boards, the elevator pitch and more. Additionally, we also performed research into our client’s competitors and companies our client considered “brand adjacent,” like Airbnb and Away.
                </P>
                </PortfolioContainer>
            </Grid>


            <Grid
                numCol="3"
                gapSize="0"
                marginTop="4rem"
                marginBottom="4rem"
                marginLeft="4rem"
                marginRight="4rem"
            >
                <Img 
                    src={imagePath('./UserJourneys.jpg')}
                    alt="User Journey Explorations"
                    caption="User Journey Explorations"
                    width="21.875rem"
                    height="16.25rem"
                            />
                <Img
                    src={imagePath('./moodBoards.jpg')}
                    alt="Mood Boards"
                    caption="Mood Boards"
                    width="21.875rem"
                    height="16.25rem"
                />
                <Img
                    src={imagePath('./PersonalityLevers.jpg')}
                    alt="Personality Levers"
                    caption="Personality Levers"
                    width="21.875rem"
                    height="16.25rem"
                />
            </Grid>

            

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="LOGO&nbsp;&amp; BRAND&nbsp;DEVELOPMENT"></SideTitle>

                <PortfolioContainer>
                    <P>
                        In the early stages of brand development, the team created personas which allowed us to intentionally direct our work, develop empathy throughout our interface, and stay on track with intended users. This exercise gave both the team and our client a clear picture of the target user. Once we developed a more concrete understanding of Butter’s brand voice and target audience, the next step was to dive into color, type, and logo explorations.
                </P>

                   <Img
                        src={imagePath('./ButterPersonas.png')}
                        alt="Image of example personas we made"
                        caption=""
                        width="47.375rem"
                        height="37.375rem"
                   />

                    <P>
                        For colors, we chose a mix of warm and cool earth-toned neutrals to help convey Butter’s friendly and chic personality. We chose PT Serif as our header font for bold, clean look and humanistic terminals which give a sophisticated and playful feel. To convey Butter’s more functional and informative size we chose Muli, a minimalistic sans serif.
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
                    src={imagePath('./butter_colors.jpg')}
                    alt="Final color decisions are (from left to right): white, soft salmon pink, terracotta brown, dark blue-green, and light sage green."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
                <Img
                    src={imagePath('./Butter_type.png')}
                    alt="This image shows a type pairing for clients chosen fonts showing what the type would look like for the title, subtitle, and body text."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
            </Grid>
                

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <P>
                        Originally, the title of our client’s concept was Mend (short for recommend). In our initial logo sketches, we explored the ideas relating to travel, mark-making, and quotes. However, one month into the project, our client announced the need for a product name change
                </P>
                    <P>
                        Working closely with our client, we explored new names for the company, product, and blog. Eventually, the client chose to continue the branding and product work with the name Butter (a catchy and obscure reference to a fictional elite restaurant). The final logo design combines our client’s desire for the use of organic shapes with a literal interpretation of butter.
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
                    src={imagePath('./logos_initial-05.jpg')}
                    alt="Initial logos I created when the project was still named Mend."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
                <Img
                    src={imagePath('./ButterLogos-Full.png')}
                    alt="Finalized logo."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
            </Grid>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="SITE ARCHITECTURE &#38; TECH STACK"></SideTitle>
                <PortfolioContainer>

                    <P>
                        Design and development of the marketing site materialized concurrently; with design informing development. It was important to our client that the website be homepage-focused, so visitors could receive all the information they needed about the product without having to navigate to a different page. Another key aspect of the website was the ability to scale - our client wanted to be able to easily edit and add content to the site without having to rely on a developer.
                </P>
                    <P>
                        Keeping this in mind, the dev team opted to use TakeShape, a headless CMS. Originally we planned to use JAM stack to create the static marketing site using the recommended stack - Takeshape with GraphQL and React.js front-end, hosted via Nelify. However, after speaking with Scout’s Technology Director and TakeShape’s CEO and CTO about the needs our project, we decided to use HTML, SCCS, and Javascript(E6) for our front-end stack in order to simplify our process.
                </P>

                    <Img
                        src={imagePath('./iaHomeFocusedv2_SS.jpg')}
                        alt="Image of a homepaged focused site map I created."
                        caption=""
                        width="47.375rem"
                        height="37.375rem"
                    />

                    <Img
                        src={imagePath('./site_map_final.jpg')}
                        alt="Finalized site map."
                        caption=""
                        width="47.375rem"
                        height="37.375rem"
                    />
                    
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
                <SideTitle title="WIREFRAME&nbsp;EVOLUTION"></SideTitle>

                <PortfolioContainer>
                    <P>
                        We created a few various paper wire-frame sketches that each highlighted different information. In the end, we chose to go with had a robust homepage with strong brand introduction and multiple call to actions.
                    </P>

                </PortfolioContainer>
            </Grid>
            
            <Grid
                numCol="4"
                gapSize="0"
                marginTop="4rem"
                marginBottom="4rem"
                marginLeft="4rem"
                marginRight="4rem"
            >
                <Img
                    src={imagePath('./verticalScroll1_SS.jpg')}
                    alt="A desktop wireframe of the homepage showing a typical vertical scroll UX."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./verticalScroll2_SS.jpg')}
                    alt="A continuation of a desktop wireframe of the homepage showing a typical vertical scroll UX."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./horrScroll1_SS.jpg')}
                    alt="A desktop wireframe of the homepage showing a horrizontal scroll UX. Users would naviage through the homepage left to right like flipping through a page by scrolling up with their mouse or trackpad."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./horrScroll2_SS.jpg')}
                    alt="A continuation of a desktop wireframe of the homepage showing a horrizontal scroll UX. Users would naviage through the homepage left to right like flipping through a page by scrolling up with their mouse or trackpad."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
            </Grid>
    
            <Arrow src={arrow}></Arrow>

            <Grid
                numCol="3"
                gapSize="5rem"
                marginTop="0"
                marginBottom="10rem"
                marginLeft="0"
                marginRight="0"
            >
                <DesktopWireframe src={imagePath('./Butter_desktop_wireframe.png')}></DesktopWireframe>
                <TabletWireframe src={imagePath('./Butter_Tablet.png')}></TabletWireframe>
                <MobileWireframe src={imagePath('./Butter_Mobile.png')}></MobileWireframe>

            </Grid>

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="STYLE TILES"></SideTitle>

                <PortfolioContainer>
                    <P>
                        Design deliverables consisting of fonts, colors and interface elements that communicate the essence of the visual brand.
                    </P>
                </PortfolioContainer>
            
            </Grid>
        
            <Grid
                numCol="4"
                gapSize="0"
                marginTop="4rem"
                marginBottom="4rem"
                marginLeft="4rem"
                marginRight="4rem"
            >
                <Img
                    src={imagePath('./style_tile_1.jpg')}
                    alt="UI snapshot of a possible homepage direction. More illustration focused."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_2.jpg')}
                    alt="UI snapshot of a possible homepage direction. More illustration focused."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_3.png')}
                    alt="UI snapshot of a possible contact page direction. More illustration focused."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_4.png')}
                    alt="UI snapshot of a possible contact page direction. More illustration focused."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_5.png')}
                    alt="UI snapshot of a possible homepage direction. Mix of images inside of organic shapes."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_6.png')}
                    alt="UI snapshot of a possible homepage direction with a strict grid."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_7.png')}
                    alt="UI snapshot of a possible contact page direction. Mix of images inside of organic shapes."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
                <Img
                    src={imagePath('./style_tile_8.png')}
                    alt="UI snapshot of a possible contact page direction with defined shapes for text and image containers."
                    caption=""
                    width="16.125rem"
                    height="20.5rem"
                />
            </Grid>

          

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="FINAL PRODUCT"></SideTitle>
                <PortfolioContainer>
                    <P>
                        We launched the fully-functional Butter marketing site at the end of April 2019. We also completed a design system (brand guidelines and assets) for our client in order for future expansion with the development of a mobile app.
                </P>
                </PortfolioContainer>

            </Grid>
             

               <Center>
                    <Img
                        src={imagePath('./Butter_Screens_Nashville.png')}
                        alt="Screenshot from the about page on the live site."
                        caption=""
                        width="1008px"
                        height="532px"
                    />

               </Center>
   
    
    
            <Grid
                numCol="2"
                gapSize="0"
                marginTop="5rem"
                marginBottom="7rem"
                marginLeft="5rem"
                marginRight="5rem"
            >
                <Img
                    src={imagePath('./About_Page.png')}
                    alt="Screenshot from the about page on the live site."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
                <Img
                    src={imagePath('./About_Page2.png')}
                    alt="Another screenshot from the about page on the live site.."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
                <Img
                    src={imagePath('./Home_Page.png')}
                    alt="Screenshot from the home page on the live site."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
                <Img
                    src={imagePath('./HomePage041.png')}
                    alt="Another screenshot from the home page on the live site.."
                    caption=""
                    width="32.125rem"
                    height="19.25rem"
                />
            </Grid>

       

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <StyledLink href="https://discoverbutter.co/">View the live site</StyledLink>
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
                <SideTitle title="BRAND BOOK"></SideTitle>
                <PortfolioContainer>
                    <P></P>
                </PortfolioContainer>
            </Grid>


            <Center>
                <Img
                    src={imagePath('./Butter_mockup.png')}
                    alt="Mockup of the live site."
                    caption=""
                    width="63rem"
                    height="33.25rem"
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
                <Spread src={imagePath('./ButterBrandbook01.png')}></Spread>
                <Spread src={imagePath('./ButterBrandbook02.png')}></Spread>
                <Spread src={imagePath('./ButterBrandbook03.png')}></Spread>
                <Spread src={imagePath('./ButterBrandbook04.png')}></Spread>
            </Grid>
       

            <Grid
                numCol="2"
                gapSize="0"
                marginTop="0"
                marginBottom="0"
                marginLeft="0"
                marginRight="0"
            >
                <SideTitle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></SideTitle>
                <PortfolioContainer>
                    <StyledLink href={butterBrandBook} target="_blank">View Complete brand book</StyledLink>
                </PortfolioContainer>
            </Grid>
               
        </Layout>
    )
}
export default ButterPage
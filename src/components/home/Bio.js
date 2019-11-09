import React from "react"
import styled from 'styled-components'
import SectionTitle from '../home/SectionTitle'
import SideTitle from '../SideTitle'
import ColItem2 from '../../elements/ColItem2'
import ColItem1 from '../../elements/ColItem1'
import P from '../../elements/P'
import A from '../../elements/A'
import * as self from '../../images/bio/self.jpg'
import * as githubIcon from '../../images/social-icons/github.svg'
import * as igIcon from '../../images/social-icons/instagram.svg'
import * as linkedInIcon from '../../images/social-icons/linkedIn.svg'
import * as dribbleIcon from '../../images/social-icons/dribble.svg'
import * as resume from '../../documents/skylar_soehl_resume.pdf'
import Container from "../../elements/Container"

const SocialLinks = styled.ul`
  list-style: none;
`;

const StyledImage = styled.img`
  float:
  margin-left: 17rem;
  top: -200px;
  max-width:45%;
  height:auto;
`;

const Bio = () => {
    return (
        <Container>
            <SideTitle title="04" />

            <SectionTitle
            titleTop="WHO"
            titleMiddle="IS"
            titleBottom="SHE"
            smallTitle=""
            />
                
            <ColItem1>
                <StyledImage src={self} alt='This is a black and white (slighty out of focus) photo of myself I took on my phone. I am a woman with shoulder-length dark brown hair. I am very close to the camera with my phone covering half of my face.'>
                </StyledImage>
            </ColItem1>

            <SocialLinks>
                <li>
                    <a href="https://github.com/skylarsoehl" target="_blank" rel="noopener noreferrer">
                        <img  src={githubIcon} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ssoehl.design/" target="_blank" rel="noopener noreferrer">
                        <img  src={igIcon} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/skylarsoehl/" target="_blank" rel="noopener noreferrer">
                        <img  src={linkedInIcon} />
                    </a>
                </li>
                <li>
                    <a href="https://dribbble.com/skylarsoehl" target="_blank" rel="noopener noreferrer">
                        <img src={dribbleIcon} />
                    </a>
                </li>
            </SocialLinks>

            <ColItem2>
                <P>My interest in web design and coding began in middle school out of a desire to make my Tumblr blog as cool as the blogs of the platform’s anonymous web-coding gurus, whose HTML + CSS tutorials I followed obsessively. Today, I continue to immerse myself in my love for all things web through tackling projects that deal with interaction design and front-end development.</P>  

                <P>I was born on Long Island and proud to be raised in a woman-ran household. As a Latinx woman with immigrant heritage, I am fiercely passionate about diversity in tech, accessibility on the web, and hope to one day become an example for what women of color can accomplish in this industry.</P>

                <P>During my downtime I like to paint, read in the Boston Public Gardens, loiter in museums, explore craft breweries, go to concerts, surf (on the log), and listen to Fugazi’s Instrument on repeat</P>

                <A href={resume} target="_blank">Résumé</A>

                <A href="mailto:skysoehl@gmail.com" target="_blank">Hit my line</A>
            </ColItem2>

        </Container>
    )
}
export default Bio
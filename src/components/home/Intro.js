import React from "react"
import styled from 'styled-components'
import SideTitle from '../SideTitle'
import Container from '../../elements/Container'
import '../layout.scss';
import A from '../../elements/A'
import ColItem2 from '../../elements/ColItem2'

const IntroSection = styled.p`
    font-weight: 500;
    font-size: 60px;
    line-height: 77px;
    
`;

const Intro = () => {
    return (
        <Container>
            <SideTitle title="01" />

            <ColItem2>
                <IntroSection>
                    Welcome! I’m  <br></br> Skylar Soehl, a creative developer and visual designer based in Boston. I’m currently a <A href="https://www.khoury.northeastern.edu" target="_blank">Northeastern University</A> Student working as a software engineering co&#8209;op for <A href="https://www.truefit.com/Home" target="_blank">True Fit</A>.
                <br></br>In my spare time, I run all things design for <br></br><A href="https://www.instagram.com/nuwomenintech/">NU Women in Tech</A>, take on freelance projects, and develop personal initiatives.
                </IntroSection>
            </ColItem2>

        </Container>
    )
}
export default Intro
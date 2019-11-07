import React from "react"
import homeStyles from '../home/home.module.scss'
import '../layout.scss';
import A from '../../elements/A'
import P from '../../elements/P'

const Intro = () => {
    return (
        <div className={homeStyles.container}>
            <p className={homeStyles.gridCol1} id={homeStyles.numeral}>01</p>
            <p className={homeStyles.gridCol2} id={homeStyles.intro}>
                Welcome! I’m Skylar Soehl, a creative developer and visual designer based in Boston. I’m currently a <A href="https://www.khoury.northeastern.edu" target="_blank">Northeastern University</A> Student working as a software engineering co&#8209;op for <A href="https://www.truefit.com/Home" target="_blank">True Fit</A>.
                <br></br>In my spare time, I run all things design for <br></br><A href="https://www.instagram.com/nuwomenintech/">NU Women in Tech</A>, take on freelance projects, and develop personal initiatives.
            </p>
        </div>
    )
}
export default Intro
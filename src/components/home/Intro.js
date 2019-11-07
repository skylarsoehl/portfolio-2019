import React from "react"
import homeStyles from '../home/home.module.scss'
import '../layout.scss';

const Intro = () => {
    return (
        <div className={homeStyles.container}>
            <p className={homeStyles.gridCol1} id={homeStyles.numeral}>01</p>
            <p className={homeStyles.gridCol2} id={homeStyles.intro}>
                Welcome! I’m Skylar Soehl, a creative developer and visual designer based in Boston. I’m a current <a href="https://www.khoury.northeastern.edu" target="_blank">Northeastern University</a> Student working as a software engineering co&#8209;op for <a href="https://www.truefit.com/Home" target="_blank">True Fit</a>.
                <br></br>In my spare time, I run all things design for <br></br><a href="https://www.instagram.com/nuwomenintech/">NU Women in Tech</a>, take on freelance projects, and develop personal initiatives.
            </p>
        </div>
    )
}
export default Intro
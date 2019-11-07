import React from "react"
import homeStyles from '../home/home.module.scss'
import '../layout.scss';
import ColItem2 from '../../elements/ColItem2'
import ColItem1 from '../../elements/ColItem1'
import H2 from '../../elements/H2'
import A from '../../elements/A'



const Work = () => {
    return (
        <div className={homeStyles.container}>
            <ColItem1>
                <p className={homeStyles.numeral}>02</p>
            </ColItem1>
            
            <ColItem2>
                <H2 className={homeStyles.titleTopOffset}>SEL</H2>
            </ColItem2>

            <ColItem2>
                <H2 className={homeStyles.titleMiddleOffset}>ECT</H2>
            </ColItem2>

            <ColItem2>
                <H2>ED</H2><span className={homeStyles.titleSmall}>WORK</span>
            </ColItem2>
            

            <ColItem2>
                <ul className={homeStyles.caseLinkSection}>
                    <li><span className={homeStyles.portfolioIndex}>2.1</span><A href="/selected-works/Butter">Butter</A></li>
                    <li><span className={homeStyles.portfolioIndex}>2.2</span><A href="/selected-works/Nuwit">NUWIT</A></li>
                    <li><span className={homeStyles.portfolioIndex}>2.3</span><A href="/selected-works/Kakuro">Kakuro</A></li>
                    <li><span className={homeStyles.portfolioIndex}>2.4</span><A href="/selected-works/Tough">Tough</A></li>
                    <li><span className={homeStyles.portfolioIndex}>2.5</span><A href="/selected-works/Esfresco">Esfresco</A></li>
                    <li><span className={homeStyles.portfolioIndex}>2.6</span><A href="/selected-works/Etc">Etc</A></li>
                </ul>
            </ColItem2>
            
        </div>
    )
}
export default Work
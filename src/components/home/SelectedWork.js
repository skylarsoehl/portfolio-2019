import React from "react"
import {Link} from "gatsby"
import homeStyles from '../home/home.module.scss'
import '../layout.scss';
import A from '../../elements/A'
import H2 from '../../elements/H2'
import ColItem2 from '../../elements/ColItem2'


const Work = () => {
    return (
        <div className={homeStyles.container}>
            <p className={homeStyles.gridCol1} id={homeStyles.numeral}>02</p>
            <ColItem2>
                <H2>SEL</H2>
            </ColItem2>
            <H2>ECT</H2>
            <H2>ED</H2>
            <span>Work</span>

            <div>
                <ul>
                    <li><span>2.1</span><Link to="/selected-works/Butter">Butter</Link></li>
                    <li><span>2.2</span><Link to="/selected-works/Nuwit">NUWIT</Link></li>
                    <li><span>2.3</span><Link to="/selected-works/Kakuro">Kakuro</Link></li>
                    <li><span>2.4</span><Link to="/selected-works/Tough">Tough</Link></li>
                    <li><span>2.5</span><Link to="/selected-works/Esfresco">Esfresco</Link></li>
                    <li><span>2.6</span><Link to="/selected-works/Etc">Etc</Link></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Work
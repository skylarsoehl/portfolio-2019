import React from "react"
import {Link} from "gatsby"

const Work = () => {
    return (
        <div>
            <div>
                <span>02</span>
            </div>
            <div>
                <h2>SEL</h2>
                <h2>ECT</h2>
                <h2>ED</h2>
                <span>Work</span>
            </div>
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
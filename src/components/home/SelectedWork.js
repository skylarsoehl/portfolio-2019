import React from "react"
import {Link} from "gatsby"

const Work = () => {
    return (
        <div>
            <div>
                <span>01</span>
            </div>
            <div>
                <h2>SEL</h2>
                <h2>ECT</h2>
                <h2>ED</h2>
                <span>Work</span>
            </div>
            <div>
                <ul>
                    <li><span>2.1</span><Link to="/Butter">Butter</Link></li>
                    <li><span>2.2</span><Link to="/Kakuro">Kakuro</Link></li>
                    <li><span>2.3</span><Link to="/Esfresco">Esfresco</Link></li>
                    <li><span>2.4</span><Link to="/Tough">Tough</Link></li>
                    <li><span>2.5</span><Link to="/Etc">Etc</Link></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Work
import React from "react"
import Intro from "../components/home/Intro"
import Work from "../components/home/SelectedWork"
import Bio from "../components/home/Bio"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
    return (
        <div>
            <h1>Skylar Soehl</h1>
            <Intro />
            <Work />
            <Bio />
        </div>
    )
}
export default IndexPage
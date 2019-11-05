import React from "react"
import Intro from "../components/home/Intro"
import Work from "../components/home/SelectedWork"
import Bio from "../components/home/Bio"
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtPhoto from "../components/home/ArtPhoto";

const IndexPage = () => {
    return (
        <div>
            <h1>Skylar Soehl</h1>
            <Intro />
            <Work />
            <ArtPhoto />
            <Bio />
        </div>
    )
}
export default IndexPage
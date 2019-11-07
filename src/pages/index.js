import React from "react"
import Layout from '../components/layout'
import Intro from "../components/home/Intro"
import Work from "../components/home/SelectedWork"
import Bio from "../components/home/Bio"
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtPhoto from "../components/home/ArtPhoto";
import '../components/layout.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <Work />
            <ArtPhoto />
            <Bio />
        </Layout>
    )
}
export default IndexPage
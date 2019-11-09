import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import Intro from "../components/home/Intro"
import Work from "../components/home/SelectedWork"
import Bio from "../components/home/Bio"
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtPhoto from "../components/home/ArtPhoto";
import '../components/layout.scss';
import WebFont from 'webfontloader';

WebFont.load({
    typekit: {
        id: 'ujc5bkl'
    }
});


const Space = styled.div`
    margin-bottom: 15rem;
`;

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <Space></Space>
            <Work />
            <Space></Space>
            <ArtPhoto />
            <Space></Space>
            <Bio />
        </Layout>
    )
}
export default IndexPage
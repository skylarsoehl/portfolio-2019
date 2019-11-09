import React from "react"
import SideTitle from '../SideTitle'
import SectionTitle from '../home/SectionTitle'
import ColItem2 from '../../elements/ColItem2'
import P from '../../elements/P'
import Container from "../../elements/Container"


const ArtPhoto = () => {
    return (
        <Container>
            <SideTitle title="03" />

            <SectionTitle
            titleTop="FEA"
            titleMiddle="TUR"
            titleBottom="ED"
            smallTitle="MEDIA"
            />
            
            <ColItem2>
            <P>COMING SOON</P>
            </ColItem2>
        </Container>
    )
}
export default ArtPhoto
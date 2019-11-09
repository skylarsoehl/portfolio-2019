import React from "react"
import homeStyles from '.././home/home.module.scss'
import ColItem2 from '../../elements/ColItem2'
import ColItem1 from '../../elements/ColItem1'
import SectionTitle from '../home/SectionTitle'


const ArtPhoto = () => {
    return (
        <div className={homeStyles.container}>
            <ColItem1>
                <p className={homeStyles.numeral}>03</p>
            </ColItem1 >

            <SectionTitle
            titleTop="FEA"
            titleMiddle="TUR"
            titleBottom="ED"
            smallTitle="MEDIA"
            />
            

            <div>
                <p>************************</p>
                <p>Carosuel goes here.</p>
                <p>************************</p>
            
                </div>
        </div>
    )
}
export default ArtPhoto
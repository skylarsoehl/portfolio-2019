import React from "react"
import homeStyles from '.././home/home.module.scss'
import ColItem2 from '../../elements/ColItem2'
import ColItem1 from '../../elements/ColItem1'
import H2 from '../../elements/H2'


const ArtPhoto = () => {
    return (
        <div className={homeStyles.container}>
            <ColItem1>
                <p className={homeStyles.numeral}>03</p>
            </ColItem1 >

            <ColItem2>
                <H2 className={homeStyles.titleTopOffset}>FEA</H2>
            </ColItem2>

            <ColItem2>
                <H2 className={homeStyles.titleMiddleOffset}>TUR</H2>
            </ColItem2>

            <ColItem2>
                <H2>ED</H2><span className={homeStyles.titleSmall}>MEDIA</span>
            </ColItem2>

            <div>
                <p>************************</p>
                <p>Carosuel goes here.</p>
                <p>************************</p>
            
                </div>
        </div>
    )
}
export default ArtPhoto
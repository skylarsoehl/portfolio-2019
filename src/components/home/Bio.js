import React from "react"
import * as self from '../../images/bio/self.jpg'

const Bio = () => {
    return (
        <div>
            <div>
                <span>04</span>
            </div>
            <div>
                <h2>WHO</h2>
                <h2>IS</h2>
                <h2>SHE</h2>
            </div>
                
            <div>
                <img src={self} alt='This is a black and white (slighty out of focus) photo of myself I took on my phone. I am a woman with shoulder-length dark brown hair. I am very close to the camera with my phone covering half of my face.'></img>
            </div>

            <div>
                <p>My interest in web design and coding began in middle school out of a desire to make my Tumblr blog as cool as the blogs of the platform’s anonymous web-coding gurus, whose HTML + CSS tutorials I followed obsessively. Today, I continue to immerse myself in my love for all things web through tackling projects that deal with interaction design and front-end development.</p>

                <p>I was born on Long Island and proud to be raised in a woman-ran household. As a Latinx woman with immigrant heritage, I am fiercely passionate about diversity in tech, accessibility on the web, and hope to one day become an example for what women of color can accomplish in this industry.</p>

                <p>During my downtime I like to paint, read in the Boston Public Gardens, loiter in museums, explore craft breweries, go to concerts, surf (on the log), and listen to Fugazi’s Instrument on repeat</p>
            </div>

            <div>
                
            </div>

        </div>
    )
}
export default Bio
import Header from "../layout/Header"
import LandingHero from "../landings/LandingHero";
import LandingCode from "../landings/LandingCode";
import LandingFeatures from "../landings/Landingfeatures";
function Landing(){
    return (
        <div className="landing-page">
            <Header loginstats={false}/>
            <div className="landing-contient">
                <LandingHero/>
                <LandingCode/>
                <LandingFeatures/>

            </div>
        </div>
    )
}

export default Landing;
import {landingData} from "../labs/LandingData"
import "./css/landingcode.css"
function LandingCode(){
    return(
        <div className="landcode-con">
          <pre className="landcode-block">
         <code>{landingData.codeSnippet}</code>
          </pre>
        </div>
    )
}

export default LandingCode
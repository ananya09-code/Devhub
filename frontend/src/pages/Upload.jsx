
import UploadFrom from "../uploads/UploadFrom"
import Header from "../layout/Header"
function Upload(){
    return (
       <div className="upload-page">
        <Header loginstats={true}/>
        <div className="upload-continer">
            <UploadFrom/>
        </div>
       </div>
    )
}
export default Upload 
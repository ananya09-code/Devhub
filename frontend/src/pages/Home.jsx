
import Header from "../layout/Header.jsx"
import Sidebar from "../layout/Sidebar.jsx"
import Postcontiner from "../layout/Postcontiner.jsx"
import {data} from "../labs/datatest.js"
import './css/home.css'
function Home() {
    return (
           <div className="Home">
                <Header loginstats={true}/>
                <div className="body">
                    <Sidebar />
                    <div className="content">
                        <Postcontiner posts={data} />
                    </div>
                </div>
            </div>
    );      
}
export default Home;
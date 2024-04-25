import React,{Component} from "react";
import Sidebar from '../Siderbar/sidebar'
import TopHeader from '../TopContainer/topContainer'
import MiddleDeatils from '../MainContainer/MainContainer'
import MiddleRight from "../middlerightDetails/sidebarRight";
import './home.css'

class Home extends Component{
    render(){
        return(
            <div className="homepage-card-conainer">
                <Sidebar/>
                <div className="middle-deatils-container">
                <TopHeader/>
                <div className="middle-deatils-container-two-tag">
                    <MiddleDeatils/>
                    <MiddleRight/>
                </div>
                </div>
            </div>
        )
    }
}

export default Home
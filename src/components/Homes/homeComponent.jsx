import "./home.css"
import {home} from './homeData'
import HomeDetail from "../HomeDetails/homeDetail"

const HomeComponent =()=>{



return(
    <div className="container">
    {
      home
      .map((item,i)=>(
         <HomeDetail key={i} {...item}/>
      ))
    }
  </div>
)


}


export default HomeComponent
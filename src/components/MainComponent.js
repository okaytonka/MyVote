import React, { Component,Link } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import   './css/userprofile.css'
import SendMessage from './button/SendMessage.js'
import Settings from './button/Settings.js'
import  './css/fontfamily.css'
import  './css/profileimages.css'
import  './css/maincomponent.css'
import NavbarComponent from '../components/NavbarComponent';
import PhotoStream from './PhotoStream';
import { Image } from "@zzwing/react-image";
import { Card } from "@material-ui/core";
import Axios from 'axios';

import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
const REACT_APP_SERVER_URL=process.env.REACT_APP_SERVER_URL;

  class MainComponent extends Component {
      
    constructor(props) {
        super(props);
      
        this.state={
    
            loginData:[],
            responses:[]
          };
      }


componentDidMount(){

    console.log("REUDXMAIN",this.props.loginData.content.content[0].name)
    this.PhotoViewer();
}

PhotoViewer(){
    const response = Axios.get(REACT_APP_SERVER_URL+`photo/GetFriendsPhoto/`
     )
		.then(res => {

console.log(res.data);           
         this.setState(  {responses:res.data})
    
        })
}


    render() {
      
return(
  
    <div style={{width:"100%",height:"100em"}}>
<NavbarComponent/>
<div className="wrapper" style={{width:"100%",height:"100em",marginTop:0}}>
    <div style={{width:470,marginTop:250,marginLeft:"30%",display:"inline-block"}}>

    {

this.state.responses.map((mydata,index) =>
   // console.log("RESPONSEOLUŞTURUCUMAP",mydata),
<div class="containerm">
<div class="row">
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.photo1} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.photo2} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.photo3} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
</div>

</div>

)
}

  
    </div>
    
    <div className="boxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>


    </div>
)

      
    }
}

function mapStateToProps(state)
{
	return{
		loginData:state.mainReducer.byIds
	}
}

export default connect(mapStateToProps, {addUser})(MainComponent);


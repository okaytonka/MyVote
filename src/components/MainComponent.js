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
import { Card } from '@material-ui/core';


import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
  class MainComponent extends Component {
      
    constructor(props) {
        super(props);
      
        this.state={
    
            loginData:[]
          };
      }
componentDidMount(){

    console.log("REUDXMAIN",this.props.loginData.content.content[0].name)

}
    render() {
      
return(
  
    <div style={{width:"100%",height:"100em"}}>
<NavbarComponent/>
<div className="wrapper" style={{width:"100%",height:"100em",marginTop:0}}>
    <div style={{width:470,marginTop:250,marginLeft:"30%",display:"inline-block"}}>
    <PhotoStream/>
    <PhotoStream/>
    <PhotoStream/>
    <PhotoStream/>
    <PhotoStream/>
    <PhotoStream/>
    <PhotoStream/>

  
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


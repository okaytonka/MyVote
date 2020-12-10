import React, { Component,Link } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../components/css/userproperties.css"
import NavbarComponent from './NavbarComponent';
import Axios from 'axios';

import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
  class UserProperties extends Component {
      
    constructor(props) {
        super(props);
        this.state={
    
            loginData:[]
          };
      }
      handleChange =({target}) =>{
        this.setState({[target.name]:target.value});


    
    }

      SaveSettings(){
          const updateData=
          {
            name:this.state.name,
            password:this.state.password,
            about:this.state.about,
            school:this.state.school,
            country:this.state.country

          }
              console.log("SAVE SETTİNG",updateData)
          
        const response = Axios.put(`http://localhost:3000/users/`+this.props.loginData.content.content[0].id,updateData
         )
            .then(res => {
    
    console.log(res.data);           
             this.setState(  {responses:res.data})
        
            })

      }
      componentDidMount(){

        console.log("REUDXPROPS",this.props.loginData.content.content[0].id)
    
    }
    render() {
      
return(

<div className="wrapper" style={{width:"100%",height:"100%",marginTop:0}}>
    <div style={{width:670,marginTop:70,marginLeft:"20%",display:"inline-block"}}>

    <div className="container rounded bg-white mt-5 mb-5" >
  <div style={{background:"black"}}><NavbarComponent/></div>  
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"></img>
                    <span className="font-weight-bold">Okay Tonka</span><span className="text-black-50">okaytonka@gmail.com</span><span>Türkiye</span>
                    </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-right">Profilini Düzenle</h6>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Ad</label>
                    <input name="name"  type="text" className="form-control" placeholder="Ad" onChange={this.handleChange} /></div>
                    <div className="col-md-6"><label className="labels">Soyad</label>
                    <input type="text" className="form-control" placeholder="Tonka"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Şifre</label>
                    <input name="password" type="text" className="form-control" placeholder="Şifre" onChange={this.handleChange} /></div>
                    <div  className="col-md-12"><label className="labels">Hakkımda</label>
                    <input name="about" type="text" className="form-control" placeholder="Hakkımda" onChange={this.handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Okul</label>
                    <input name="school"  type="text" className="form-control" placeholder="Okul" onChange={this.handleChange}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Ülke</label>
                    <input name="country" type="text" className="form-control" placeholder="Ülke" onChange={this.handleChange} /></div>
                </div>
                <div className="mt-5 text-center"><button onClick={()=>this.SaveSettings()} className="btn btn-primary profile-button" type="button">Değişiklikleri Kaydet</button></div>
            </div>
        </div>

    </div>
</div>

  
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






)

      
    }
}


function mapStateToProps(state)
{
	return{
		loginData:state.mainReducer.byIds
	}
}

export default connect(mapStateToProps, {addUser})(UserProperties);

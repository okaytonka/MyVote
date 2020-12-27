import React, { Component,Link } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../components/css/userproperties.css"
import NavbarComponent from './NavbarComponent';
import Axios from 'axios';

import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
import ProfileImageUpload from './button/ProfileImageUpload';
import { Button,Modal } from "react-bootstrap";

const REACT_APP_SERVER_URL=process.env.REACT_APP_SERVER_URL;

  class UserProperties extends Component {
      
    constructor(props) {
        super(props);
        this.state={
                name:'',
                email:'',
                password:'',
                about:'',
                school:'',
                country:'',
                visibleModal:false,
                loginData:[],
                photo:""
          };
      }
      handleChange =({target}) =>{
        this.setState({[target.name]:target.value});


    
    }
    changeVisible=()=>{
        this.setState({visibleModal:!this.state.visibleModal});
      }
      submitImages=  ()=> {
        console.log("PHOTOSSS",this.props.photos)
        console.log("loginData",this.props.loginData)
      
        const photo = {
            photo:this.props.photos.content.content[0].data_url,
 
          };
          Axios.put(REACT_APP_SERVER_URL+`user/UpdateUserPhoto/`+this.props.loginData.content.content[0].id,  photo )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        };
      SaveSettings(){
          const updateData=
          {
            name:this.state.name,
            password:this.state.password,
            about:this.state.about,
            school:this.state.school,
            country:this.state.country,
            email:this.props.loginData.content.content[0].email

          }
          
        const response = Axios.put(REACT_APP_SERVER_URL+`user/UpdateUser/`+this.props.loginData.content.content[0].id,updateData
         )
            .then(res => {
    
                this.componentDidMount();
        
            })

      }
      componentDidMount(){
        const responseLogin = Axios.get(REACT_APP_SERVER_URL+`user/GetProfile/`+this.props.loginData.content.content[0].id)
		.then(res => {
		  console.log(res);
		  console.log(res.data);
		  if(res.data.length >0 )
		  {
            this.setState({
                name:res.data[0].name,
                email:res.data[0].email,
                password:res.data[0].password,
                about:res.data[0].about,
                school:res.data[0].school,
                country:res.data[0].country,
                photo:res.data[0].photo
            })
            
            }
		  else
		  {
			  console.log("GİRİŞ REDDEDİLDİ")
		  }
		})
    
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
                <img className="rounded-circle mt-5" src={this.state.photo} onClick={() => this.changeVisible()} width="90"></img>
<span className="font-weight-bold">{this.state.name}</span><span className="text-black-50">{this.state.email}</span><span>{this.state.country}</span>
                    </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-right">Profilini Düzenle</h6>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Ad</label>
                    <input name="name"  type="text" className="form-control" placeholder="Ad Soyad" onChange={this.handleChange} value={this.state.name} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Şifre</label>
                    <input name="password" type="text" className="form-control" placeholder="Şifre" onChange={this.handleChange} /></div>
                    <div  className="col-md-12"><label className="labels">Hakkımda</label>
                    <input name="about" type="text" className="form-control" placeholder="Hakkımda" onChange={this.handleChange} value={this.state.about}  /></div>
                    <div className="col-md-12"><label className="labels">Okul</label>
                    <input name="school"  type="text" className="form-control" placeholder="Okul" onChange={this.handleChange} value={this.state.school} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Ülke</label>
                    <input name="country" type="text" className="form-control" placeholder="Ülke" onChange={this.handleChange } value={this.state.country}  /></div>
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

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.state.visibleModal}
      onHide= {()=>this.changeVisible()}
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <ProfileImageUpload/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>this.changeVisible()}>Kapat</Button>
        <Button onClick={()=>this.submitImages()}>Kaydet</Button>

      </Modal.Footer>
    </Modal>
</div>






)

      
    }
}


function mapStateToProps(state)
{
	return{
        loginData:state.mainReducer.byIds,
        photos:state.mainReducer.photos

	}
}

export default connect(mapStateToProps, {addUser})(UserProperties);

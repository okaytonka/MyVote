import React, { Component,Link } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import   './css/userprofile.css'
import SendMessage from './button/SendMessage.js'
import Settings from './button/Settings.js'
import  './css/fontfamily.css'
import  './css/profileimages.css'
import NavbarComponent from './NavbarComponent';
import Axios from 'axios';

import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
const REACT_APP_SERVER_URL=process.env.REACT_APP_SERVER_URL;

class UserProfile extends Component {
      
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            about:'',
            school:'',
            country:'',
            responses:[]
          };
        
      }
componentDidMount(){
    this.PhotoViewer();
    console.log("USEPROFİLEREDUX",this.props.loginData.content.content[0].name)

    const responseLogin = Axios.get(REACT_APP_SERVER_URL+`user/GetProfile/`+this.props.loginData.content.content[0].id )
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
        })
        
        }
      else
      {
          console.log("GİRİŞ REDDEDİLDİ")
      }
    })


}



PhotoViewer(){
    const response = Axios.get(`http://localhost:3000/photos/`,
    {params:{userId:1}} )
		.then(res => {

console.log(res.data);           
         this.setState(  {responses:res.data})
    
        })
}


    render() {
      
return(
  
    <div>
<NavbarComponent/>

<div className="wrapper" style={{width:"100%",height:"100em",marginTop:0}}>
    <div style={{width:"100%",marginTop:100,marginLeft:"0%",display:"inline-block"}}>
    <div style={{width:"100%",height:"200px",background:"blue",float:"left"}}>

<img className="rounded" style={{height:"200px",width:"100%"}} src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>


</div>

<div className="bg-light" style={{width:"100%",height:"150px",background:"",
float:"left",boxShadow:"5px 5px 4px 8px #EDF2F4"}}>

  <div className="profile-header-img" style={{marginLeft:"50px",marginTop:"-50px",
  height:"200px",width:"220px",display:"block",backgroundColor:"black"}}>
<div class="card" style={{backgroundColor:"white"}}>
  <div class="user text-center" >
      <div class="profile"> <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"></img> </div>
  </div>
  <div class="mt-5 text-center" >
<h4 class="mb-0">{this.state.name}</h4> <span class="text-muted d-block mb-2">{this.state.country}</span> <button class="btn btn-primary btn-sm follow">Takip Et</button>
      <div class="d-flex justify-content-between align-items-center mt-4 px-4" >
          <div class="stats">
              <h6 class="mb-0">Takipçi Sayısı</h6> <span>8,797</span>
          </div>
          <div class="stats">
              <h6 class="mb-0">Gönderi Sayısı</h6> <span>142</span>
          </div>
          <div class="stats">
              <h6 class="mb-0">Alınan Oy</h6> <span>129</span>
          </div>
      </div>
      <div className="card bg-light " style={{maxWidth: "100%",margin:"0px",
display:"inline-block",border:"0px"}}>
<div className="card-body" style={{maxWidth: "auto",margin:"0px",display:"inline-block",border:"0px",fontFamily:"'Work Sans'"}}>
<h5 className="card-title">Hakkımda</h5>
<p className="card-text">{this.state.about}</p>
</div>
<div style={{maxWidth: "auto",margin:"0px",display:"inline-block",border:"0px"}}><SendMessage/></div>
<div style={{maxWidth: "auto",margin:"0px",display:"inline-block",border:"0px"}}><Settings/></div>

</div>
  </div>
</div>           
      </div>






</div>
<div className="bg-light" style={{marginTop:"0",marginLeft:"21%",
background:"",display:"block",width:"",height:"100%",float:"left"}}>
<div class="containerm">


</div>
{

this.state.responses.map((mydata,index) =>
   // console.log("RESPONSEOLUŞTURUCUMAP",mydata),
<div class="containerm">
<div class="row">
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.listPhoto.photo1} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.listPhoto.photo2} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
  <div class="col-md-4">
      <div class="image" style={{width:250,height:250}}> <img src={mydata.listPhoto.photo3} alt=""/> <i class="fa fa-search fa-3x"></i> </div>
  </div>
</div>

</div>

)
}


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

export default connect(mapStateToProps, {addUser})(UserProfile);


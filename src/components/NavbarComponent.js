import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBCardImage } from "mdbreact";
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import okay from '../images/okay.jpg'
import MainComponent from "./MainComponent";
import RegisterComponent from './RegisterComponent'
import UserProperties from "./UserProperties";
import ImageUpload from '../components/button/ImageUpload'
import { Button,Modal } from "react-bootstrap";
import {connect} from 'react-redux';
import {addUser} from '../redux/actions';
import Axios from 'axios';
import SearchBar from "./button/SearchBar";
const REACT_APP_SERVER_URL=process.env.REACT_APP_SERVER_URL;

class NavbarComponent extends Component {
  state={
    visibleModal:false,
    visibleNavbar:false
  }

changeVisible=()=>{
  this.setState({visibleModal:!this.state.visibleModal});
}

componentDidMount(){
if(this.props.loginData.content)
{
  this.setState({visibleNavbar:true})
  console.log("NAVBAAARRR",this.props.loginData.content.content[0].id)

}
}


 submitImages=  ()=> {
  console.log("PHOTOSSS",this.props.photos)
  console.log("loginData",this.props.loginData)

  const photos = {
   userId:this.props.loginData.content.content[0].id,
   date: new Date(),
      photo1:this.props.photos.content.content[0].data_url,
      photo2:this.props.photos.content.content[1].data_url,
      photo3:this.props.photos.content.content[2].data_url,
    
    };
    Axios.post(REACT_APP_SERVER_URL+`photo`,  photos )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };


render() {




    return (

      <MDBNavbar color="white" dark="true"  expand="md" fixed="top" transparent="false" style={{display:this.state.visibleNavbar?(""):("none")}}>
        <MDBNavbarBrand href="/Home">
          <strong className="white-text">MyVote</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/Home">Anasayfa</MDBNavLink>
              
            </MDBNavItem>
            <MDBNavItem>
            <Button variant="primary" onClick={() => this.changeVisible()}>
+      </Button>

              </MDBNavItem>
              <div style={{width:"70%",height:"80%"}}>
              <SearchBar/>

              </div>

            {/* <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>

          
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <MDBCardImage src={this.props.loginData.content.content[0].photo} style={{height:"50px",width:"50px",borderRadius:"50%"}} />
                </MDBDropdownToggle>

                <MDBDropdownMenu className="dropdown-default" right="false">

                <MDBNavLink to="/Profile" style={{color:"black"}}>Profilim</MDBNavLink>
                <MDBNavLink to="/Settings" style={{color:"black"}}>Ayarlar</MDBNavLink>
                <MDBNavLink to="/Logout" style={{color:"black"}}>Çıkış Yap</MDBNavLink>
   

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>


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
       <ImageUpload/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>this.changeVisible()}>Kapat</Button>
        <Button onClick={()=>this.submitImages()}>Kaydet</Button>

      </Modal.Footer>
    </Modal>


        
      </MDBNavbar>
     

    
    );
  }
}

function mapStateToProps(state)
{
	return{
    loginData:state.mainReducer.byIds,
    photos:state.mainReducer.photos
	}
}

export default connect(mapStateToProps, {addUser})(NavbarComponent);

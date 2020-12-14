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
import {addUser} from '../redux/actions'
class NavbarComponent extends Component {
  state={
    visibleModal:false,
    visibleNavbar:false
  }

changeVisible=()=>{
  this.setState({visibleModal:!this.state.visibleModal});
}

componentDidMount(){
  console.log("NAVBAAARRR",this.props.loginData.content)
if(this.props.loginData.content)
{
  this.setState({visibleNavbar:true})
}
}
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
                <MDBCardImage src={okay} style={{height:"50px",width:"50px",borderRadius:"50%"}} />
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
        <Button onClick={()=>this.changeVisible()}>Close</Button>
      </Modal.Footer>
    </Modal>


        
      </MDBNavbar>
     

    
    );
  }
}

function mapStateToProps(state)
{
	return{
		loginData:state.mainReducer.byIds
	}
}

export default connect(mapStateToProps, {addUser})(NavbarComponent);

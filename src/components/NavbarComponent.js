import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBCardImage } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import okay from '../images/okay.jpg'

class NavbarComponent extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {


    return (
      

<Router>

      <MDBNavbar color="white" dark="true"  expand="md" fixed="top" transparent="false">
        <MDBNavbarBrand>
          <strong className="white-text">MyVote</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Anasayfa</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Ara</MDBNavLink>
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

                  <MDBDropdownItem href="#!">Ayarlar</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Çıkış</MDBDropdownItem>
   

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>

    
    );
  }
}

export default NavbarComponent;
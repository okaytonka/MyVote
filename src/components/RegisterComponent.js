import React, { Component,Link } from 'react'
import   './css/register.css'
import   'react-bootstrap';
import Axios from 'axios';

import {connect} from 'react-redux';
import {addUser} from '../redux/actions'
  class RegisterForm extends Component {
      
    constructor(props) {
        super(props);
      this.state={
		name:'',
		mail:'',
		password:'',

		loginData:[]
	  };
        
      }

ToggleForm(toggleData)
{
    const container = document.getElementById('container');
    console.log(toggleData)
    toggleData ===("add")? (container.classList.add("right-panel-active")):(container.classList.remove("right-panel-active"))
}

handleChange =({target}) =>{
	this.setState({[target.name]:target.value});

}
submitRegister =()=> {
const user = {
	name: this.state.name,
	email:this.state.email,
	password:this.state.password
  };
  Axios.post(`http://localhost:3000/users/`,  user )
	.then(res => {
	  console.log(res);
	  console.log(res.data);
	})
}

submitLogin =()=> {
	console.log("LOGOGG",this.state.email,this.state.password)
	const responseLogin = Axios.get(`http://localhost:3000/users/`,{params:{email:this.state.email,password:this.state.password}} )
		.then(res => {
		  console.log(res);
		  console.log(res.data);
		  if(res.data.length >0 )
		  {
			  console.log("GİRİŞ BAŞARILI")
			  this.addToRedux(res.data);
			  this.props.history.push({
				pathname: '/Home'
			  });		  }
		  else
		  {
			  console.log("GİRİŞ REDDEDİLDİ")
		  }
		})
	}

	addToRedux =(data)=>{
		this.props.addUser({content:data});
		console.log("REUDX",this.props.loginData.content.content[0].name)
	}

    render() {

return(
    <div  id="bodyregister">
        	<head><script src="https://use.fontawesome.com/de1c5216aa.js"></script></head>

        <h2>Kaydol veya Giriş Yap</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<div id="registerform">
			<h1>Hesap Oluştur</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>veya kayıt için e-postanızı kullanın</span>
			<input name="name" type="name" placeholder="İsim" onChange={this.handleChange}  />
			<input name="email" type="email" placeholder="Email" onChange={this.handleChange}  />
			<input name="password" type="password" placeholder="Şifre" onChange={this.handleChange}  />
			<button onClick={this.submitRegister.bind()}>Kaydol</button>

		</div>

	</div>
	<div className="form-container sign-in-container">
	<div id="registerform">
			<h1>Giriş Yap</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>veya hesabınını kullan</span>
			<input name="email"  type="email" placeholder="Email" onChange={this.handleChange} />
			<input name="password"  type="password" placeholder="Şifre" onChange={this.handleChange} />
			<a href="#">Şifreni mi unuttun?</a>
			<button onClick={this.submitLogin.bind()} >Giriş Yap</button>
		</div>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Tekrar Hoşgeldiniz!</h1>
				<p>Kişisel bilgilerinizle giriş yapın</p>
				<button onClick={this.ToggleForm.bind(this,"remove")}  className="ghost" id="signIn">Giriş Yap</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Merhaba, Dostum!</h1>
				<p>Kişisel bilgilerinizi girin ve bize katılın</p>
				<button onClick={this.ToggleForm.bind(this,"add")} className="ghost" id="signUp">Kaydol</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>


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

export default connect(mapStateToProps, {addUser})(RegisterForm);
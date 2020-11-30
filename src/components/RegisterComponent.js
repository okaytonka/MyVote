import React, { Component,Link } from 'react'
import   './css/register.css'
import   'react-bootstrap';

  class RegisterForm extends Component {
      
    constructor(props) {
        super(props);
      
        
      }

ToggleForm(toggleData)
{
    const container = document.getElementById('container');
    console.log(toggleData)
    toggleData ===("add")? (container.classList.add("right-panel-active")):(container.classList.remove("right-panel-active"))



}

    render() {

return(
    <div  id="bodyregister">
        	<head><script src="https://use.fontawesome.com/de1c5216aa.js"></script></head>

        <h2>Kaydol veya Giriş Yap</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Hesap Oluştur</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>veya kayıt için e-postanızı kullanın</span>
			<input type="text" placeholder="İsim" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Şifre" />
			<button>Kaydol</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Giriş Yap</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>veya hesabınını kullan</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Şifre" />
			<a href="#">Şifreni mi unuttun?</a>
			<button>Giriş Yap</button>
		</form>
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
export default RegisterForm;
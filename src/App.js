import './App.css';
import UserProfile from './components/UserProfile';
import RegisterComponent from './components/RegisterComponent';
import UserProperties from './components/UserProperties';
import MainComponent from './components/MainComponent';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';

function App() {
  return (


    <Router>
 
 <NavbarComponent/>

 <Switch>
 <Route exact path='/' component={RegisterComponent} />

            <Route exact path='/Home' component={MainComponent} />
            <Route path='/Settings' component={UserProperties} />
            <Route path='/Profile' component={UserProfile} />
        </Switch>
  </Router>
  );
}

export default App;

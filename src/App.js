import React from 'react';
import './App.css';
import ProfilePage from './components/profile/ProfilePage'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonPage from './components/button/ButtonPage';
import ThemePage from './components/theme/ThemePage';
import FormPage from './components/form/FormPage';
import CitiesPage from './components/cities/CitiesPage'
import { FaBeer, FaSurprise, FaSmileBeam } from 'react-icons/fa';
import { WiSolarEclipse, WiCloud } from 'react-icons/wi'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      firstName: "",
      lastName: ""
    };
  }

  componentDidMount() {
    // guaranteed that this gets called when app is rendered for the first time  
    const color = localStorage.getItem('backgroundColor');
    this.setState({backgroundColor: color ? color : '#03dbfc'});
  }

  handleColorChange = (color) => {
    this.setState({backgroundColor: color});
    localStorage.setItem('backgroundColor', color);
  }

  handleUserSubmit = ({ firstName, lastName }) => {
    this.setState({firstName, lastName});
  }

  render() {
    const { backgroundColor, firstName, lastName } = this.state;

    return (
      <Router>
        <div className="entire-app" style={{backgroundColor: backgroundColor}}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/theme">Theme</Link>
              </li>
              <li>
                <Link to="/cities">Cities</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              { firstName === "" && lastName === "" ? 
                  <div>Hello Stranger <FaSurprise /></div> 
                  : 
                  <div>Welcome back {firstName + " " + lastName} <FaSmileBeam /></div>}
                  <FaBeer className='beer' />
                  <WiSolarEclipse />
                  <WiCloud />
            </Route>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/buttons" component={ButtonPage} />
            <Route exact path="/theme" component={(props) => <ThemePage {...props} onColorChange={this.handleColorChange}/>}  />
            <Route exact path="/form" component={(props) => <FormPage {...props} onUserSubmit={this.handleUserSubmit} />} /> 
            <Route exact path="/cities" component={(props) => <CitiesPage />} />                             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

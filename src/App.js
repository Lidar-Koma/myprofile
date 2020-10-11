import React from 'react';
import profileImage from './img/lidar.jpg';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <HeaderComponent />
      <h1>My Profile</h1>
      <h2>Auther: lidar koma</h2>
      <img src={profileImage} alt="profile" />
      <Router>
                {<HeaderComponent  />}
                <div className="c">
                <Switch>
                <Route path = "/myprofile/home" exact render={(props) => (
                  <HomeComponent{...props} isSlide={true} options={{title: 'Home Page'}}/>
               )}
            />
            <Route path = "/home1" exact render={(props) => (
              <HomeComponent{...props} isSlide={true} options={{title: 'Home Page'}}/>
           )}
        />
              
                {/*<Route path = "/update-employee/:firstName" render={(props) => (
                   <UpdateEmployeeComponent{...props} isSlide={true} />
                )}
                />*/}
            
            
                </Switch>
                </div>
                <FooterComponent />
                
                </Router>
                
    </div>
  );
}

export default App;

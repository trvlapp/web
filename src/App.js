import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch ,Route, Redirect } from "react-router-dom";
import store from './store/index';
import Landing from './containers/landing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser,
    faComment,
    faComments,
    faHeart,
    faMapMarkedAlt,
    faImages,
    faPlus,
    faPlane
} from '@fortawesome/free-solid-svg-icons'

// Font Awesome
library.add(faUser, faComment, faComments, faHeart, faMapMarkedAlt, faImages, faPlus, faPlane);

class App extends Component {
  render() {
      return (
          <HashRouter basename="/">
              <Switch>
                  <Route exact path="/" component={Landing}/>
              </Switch>
          </HashRouter>
      );
  }
}

export default App;

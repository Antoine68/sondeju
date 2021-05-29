import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './styles/App.css';

import Account from "./pages/Account";
import Home from "./pages/Home";
import Test from "./pages/Test";
import CreateSurvey from "./pages/CreateSurvey";
import Connection from "./pages/Connection"
import Register from "./pages/Register"

import store from './store/index'
import { Provider } from 'react-redux'
import Survey from './pages/Survey';


class App extends React.Component {
 
  render()  {
    return  (
      <Provider store={store}>
        <BrowserRouter>
            <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/tableau-de-jp-baur" component={Test} />
              <Route path="/compte" component={Account} />
              <Route path="/connexion" component={Connection} />
              <Route path="/inscription" component={Register} />
              <Route path="/creer-sondage" component={CreateSurvey} />
              <Route path="/sondage/:id" component={Survey} />
            </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
 
}
 
export default App;
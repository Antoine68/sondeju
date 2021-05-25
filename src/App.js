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

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/tableau-de-jp-baur" component={Test} />
            <Route path="/compte" component={Account} />
            <Route path="/inscription" component={Connection} />
            <Route path="/creer-sondage" component={CreateSurvey} />
          </Fragment>
      </BrowserRouter>
    );
  }
 
}
 
export default App;
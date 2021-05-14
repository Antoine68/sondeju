import React, { Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './styles/App.css';

import Account from "./pages/Account";
import Home from "./pages/Home";
import Test from "./pages/Test";
import CreateSurvey from "./pages/CreateSurvey";

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/tableau-de-jp-baur" component={Test} />
            <Route path="/compte" component={Account} />
            <Route path="/creer-sondage" component={CreateSurvey} />
          </Fragment>
      </BrowserRouter>
    );
  }
 
}
 
export default App;
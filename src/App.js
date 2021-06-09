import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './styles/App.css';

import Account from "./pages/Account";
import Home from "./pages/Home";
import CreateSurvey from "./pages/CreateSurvey";
import Connection from "./pages/Connection"
import Register from "./pages/Register"

import store from './store/index'
import { Provider } from 'react-redux'
import SurveyPage from './pages/SurveyPage';
import RequireAuth from './middleware/RequireAuth';
import RandomSurvey from './pages/RandomSurvey';
import ResponseSurvey from './pages/ResponseSurvey';
import Tutoriel from './pages/Tutoriel';


class App extends React.Component {
 
  render()  {
    return  (
      <Provider store={store}>
        <BrowserRouter>
            <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/compte" component={RequireAuth(Account)} />
              <Route path="/connexion" component={Connection} />
              <Route path="/inscription" component={Register} />
              <Route exact path="/creer-sondage" component={RequireAuth(CreateSurvey)} />
              <Route path="/sondage/:id" component={SurveyPage} />
              <Route path="/sondage-aleatoire" component={RandomSurvey} />
              <Route path="/reponse/:id" component={ResponseSurvey} />
              <Route path="/tutoriel" component={Tutoriel} />
            </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
 
}
 
export default App;
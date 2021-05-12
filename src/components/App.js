import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/App.css';

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/tableau-de-jp-baur" component={Test} />
          </div>
      </BrowserRouter>
    );
  }
 
}

class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/tableau-de-jp-baur">page surprise</Link>
      </div>
    );
  }
}
 
class Test  extends React.Component {
  render() {
    return (
      <div>
        <h2>Bienvenue sur le tableau de JP Baur</h2>
        <Link to="/">retour</Link>
      </div>
    );
  }
}
 
export default App;
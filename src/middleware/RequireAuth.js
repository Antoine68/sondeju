import { connect } from "react-redux";
import React from 'react'
import { Redirect } from "react-router";

export default function(ComposedComponent) {

  class RequireAuth extends React.Component {  

    render() {
        if(this.props.user.connected){
            return <ComposedComponent {...this.props}/>
        } else {
            return <Redirect  to={{pathname:"/connexion", state: {previousPage: this.props.match.path}}}/>
        }
    }

  }
  const user = (state) => ({
    user: state.user
  });
  
  return connect(user,null)(RequireAuth);

}
import './../styles/NewsFeed.css';


import React from "react";

export default class Content extends React.Component {
  render()  {
    return (
        <div class="container mw-100 m-0 p-0 mt-3">
            <div class="row mw-100 m-0 p-0">
              <div class="col-lg-2"></div>
              <div class="col-lg-8 card">
                {this.props.children}
              </div>
            </div>
            <div class="row">
            </div>
        </div>
    );
  }
}
import 'react-dropdown/style.css';
import React, { Fragment } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class Layout extends React.Component {
  render()  {
    return (
    <Fragment>
      <div class="index2 shadow-lg mb-1">
        <Header></Header>
      </div>
      <div class="index1">
        <Content>
          {this.props.children}
        </Content>
      </div>
      <Footer></Footer>
    </Fragment>
    );
  }
}
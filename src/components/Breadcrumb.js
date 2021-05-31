import './../styles/NewsFeed.css';

import React from "react";
import { Link } from 'react-router-dom';

export default class Breadcrumb extends React.Component {
  render()  {
    let {links, actual} = this.props;
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
                {
                    links.map((link, index) => {
                        return (
                            <li key={index} class="breadcrumb-item">
                                <Link to={link.url} class="blue-color font-weight-normal">{link.name}</Link>
                            </li>
                        );
                    })
                }
                <li class="breadcrumb-item active" aria-current="page">{actual}</li>
            </ol>
        </nav>
        
    );
  }
}
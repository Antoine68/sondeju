import './../styles/NewsFeed.css';

import React from "react";
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';

export default class SkeletonCard extends React.Component {
  render()  {
    return (
        <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center" style={{minHeight:"400px"}}>
                <div class="card-header bg-white card-survey-category">
                    <div style={{width:"60%", height:"25px", margin:"0 auto", backgroundColor:"#f2f2f2"}}></div>
                </div>
                <div class="card-body">
                    <Skeleton active paragraph={{rows: 6}}/>
                    <div className="consult-btn-container">
                        <Skeleton.Button active shape={"round"} />
                    </div>
                </div>
                <div class="card-footer text-muted bg-white">
                    <div style={{width:"40%", height:"20px", margin:"0 auto", backgroundColor:"#f2f2f2"}}></div>
                </div>
            </div>
        </div>
        
    );
  }
}
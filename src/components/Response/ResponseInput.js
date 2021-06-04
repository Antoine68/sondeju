import React from "react";
import './../../styles/Response.css';

export default class ResponseInput extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.response.questionResponses,
    });
  }


    
    render()  {
      return (
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          {
            this.state.data.map((response) => {
              if (response.value === ""){
                return(<div></div>)
              }
              return (
                <div class="bg-list p-2 mt-1 mr-2 rounded">{response.value}</div>
              );
            })
          }
        </div>
      );
    }
  }
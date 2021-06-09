import React from "react";
import Chart from "react-google-charts";

export default class ResponseRadio extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {
      data: [
        ['response', 'number']
      ]
    }
  }

  componentDidMount() {
    let responseData = []
    let isThere = 0 
    this.props.response.questionResponses.map((response) => {
      isThere = 0
      responseData.map((data) => {
        if (response.options[0] !== undefined){
          if (response.options[0].value == data[0]){
            isThere = 1
            data[1] += 1
          }
        }
      })
      if (response.options[0] !== undefined){
        if(isThere === 0){
          responseData.push([response.options[0].value,1])
        }
      }
    })
    this.setState({ data: [...this.state.data, ...responseData ] })
  }
    
  render()  {
    return (
      <div>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
          options={{
            sliceVisibilityThreshold: 0.2, // 20%
          }}
          />
      </div>
    );
  }
}
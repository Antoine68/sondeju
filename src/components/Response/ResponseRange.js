import React from "react";
import Chart from "react-google-charts";

export default class ResponseRange extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {
      data: [
        ['', '']
      ]
    }
  }

  componentDidMount() {
    let responseData = []
    for (let i = this.props.response.range.min; i <= this.props.response.range.max; i++) {
      responseData.push([i,0])
    }
    let isThere = 0 
    this.props.response.questionResponses.map((response) => {
      isThere = 0
      responseData.map((data) => {
        if (response.rangeValue !== undefined){
          if (response.rangeValue == data[0]){
            isThere = 1
            data[1] += 1
          }
        }
      })
      if (response.rangeValue !== undefined){
        if(isThere === 0){
          responseData.push([response.rangeValue,1])
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
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
          options={{
            legend: { position: 'none' },
            sliceVisibilityThreshold :1
          }}
          />
      </div>
    );
  }
}
import React from "react";
import Chart from "react-google-charts";

export default class ResponseCheckbox extends React.Component {
    
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
    this.props.response.options.forEach(element => {
      responseData.push([element.value,0])
    });
    let isThere = 0 
    this.props.response.questionResponses.map((response) => {
      isThere = 0
      responseData.map((data) => {
        if (response.options[0] !== undefined){
          response.options.map((option) => {
            if (option.value == data[0]){
              isThere = 1
              data[1] += 1
            }
          })
        }
      })
      if (response.options[0] !== undefined){
        if(isThere === 0){
          response.options.map((option) => {
            responseData.push([option.value,1])
          })
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
            sliceVisibilityThreshold: 0, // 20%
          }}
          />
      </div>
    );
  }
}
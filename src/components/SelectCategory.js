
import React from "react";
import axios from "axios";
import { Select } from 'antd';
const { Option } = Select;

export default class SelectCategory extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories : []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/categories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories: categories });
            })
    }
    

  render()  {
    return (
        <Select className="select-category" onChange={(value) => this.props.handleChange(value)} defaultValue={this.props.defaultValue}>
                <Option value={null}>{this.props.firstValueName}</Option>
                {
                  this.state.categories.map((category, index) => {
                    return (
                      <Option key={index} value={category._id}>{category.name}</Option>
                    );
                  })
                }
        </Select>
    );
  }
}
import React from 'react'

const withData = WrappedComponent => {
  class WithData extends React.Component {
  state= {
    data: null
  }

  componentDidMount() {
    const fetchData = async () => {
      const res = await fetch(this.props.dataSource);
      const dataArray = await res.json();
      this.setState({data: dataArray[0]})
    };

    fetchData();
  }

    render() {
      return(<WrappedComponent data={this.state.data}></WrappedComponent>)
    }
    
  }
  return WithData
}

export default withData
import React from 'react';
import DirectoryContainer from "./components/directoryContainer";
import API from "./utils/API";
import Header from "./components/header";

class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.employees.length > 0 &&
        <DirectoryContainer employees ={this.state.employees} />}
      </div>
    )
  }
}

export default App;

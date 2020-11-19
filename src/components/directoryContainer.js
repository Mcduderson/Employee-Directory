import React, { Component } from "react";
import Header from "./header";
import SearchBar from "./searchbar";
import Table from "./table";
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        result: [{}],
        filterResults: [{}],
        order: "descend"
    };

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
            .then(data => console.log(data))
            .then(res => this.setState({ result: res.data.results }))
            
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <>
            <Header />
            <SearchBar
                value={this.state.search}
                handleInputChange={this.handleInputChange}
            />
            <Table />
            </>
        );
    }
}

export default DirectoryContainer;
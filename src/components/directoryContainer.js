import React, { Component } from "react";
import ListHeader from "./listHeader"


class DirectoryContainer extends Component {
    state = {
        search: "",
        filterResults: [],
        order: "descend"
    };

    componentDidMount() {
        if (this.state.filterResults.length < 1) {
            this.setState({ filterResults: this.props.employees })
        }
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });

        this.setState({
            filterResults: filteredList

        });
    }


    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.search}
                        name="searchTerm"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
                {this.state.filterResults.length > 0 &&
                    <ListHeader empList={this.state.filterResults} />
                }
            </div>
        );
    }
}

export default DirectoryContainer;
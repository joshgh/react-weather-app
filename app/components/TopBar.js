var React = require('react');
var SearchForm = require('./SearchForm.js');

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        }

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(val) {
        this.props.onSubmit(val);
    }

    render() {
        return (
            <div className="top-bar">
                <h1>{this.props.title}</h1>
                <SearchForm onSubmit={this.handleSearchSubmit}/>
            </div>
        );
    }
}

module.exports = TopBar;
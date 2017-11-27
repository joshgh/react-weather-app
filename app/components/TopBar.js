var React = require('react');
var SearchForm = require('./SearchForm.js');

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <h1>{this.props.title}</h1>
                <SearchForm />
            </div>
        );
    }
}

module.exports = TopBar;
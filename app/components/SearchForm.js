var React = require('react');

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;

        this.setState(function() {
            return {
                city: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        var city = this.state.city;
        return (
            <form action="/forecast">
                <input onChange={this.handleChange} />
                <button type="submit">
                    Search
                </button>
            </form>
        );
    }
}

module.exports = SearchForm;
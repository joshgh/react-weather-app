var React = require('react');

class Results extends React.Component {

    render() {
        return (
            <div>
                {this.props.city && <p>{this.props.city}</p>}
            results
            </div>
        )
    }
}

module.exports = Results;
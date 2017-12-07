var React = require('react');
var TopBar = require('./TopBar.js');
var Results = require('./Results.js');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            citySubmitted: ''
        }

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(city) {
        this.setState(function(){
            return {
                citySubmitted: city
            }
        });
    }


    render() {
        return (
            <div>
                <TopBar onSubmit={this.handleSearchSubmit} title="Clever Title" />
                <Results city={this.state.citySubmitted}>
                    <p>Rendered</p>
                </Results>
            </div>
        );
    }
}

module.exports = App;
var React = require('react');
var TopBar = require('./TopBar.js');

class App extends React.Component {
    render() {
        return (
            <div>
                <TopBar title="Clever Title" />
                <p>Rendered</p>
            </div>
        );
    }
}

module.exports = App;
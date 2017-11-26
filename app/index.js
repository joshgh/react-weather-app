var React = require('react');
var ReactDOM = require('react-dom');

function App () {
    return (
        <p>Rendered!</p>
    );
};

ReactDOM.render(
    <App />, document.getElementById('app')
);
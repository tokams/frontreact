var React = require("react");
var ReactDOM = require("react-dom");

var Wrapper = React.createClass({
	render: function() {
		return(
			<div>Fucka faen</div>
		);
	}
});

ReactDOM.render(
	<Wrapper />,
	document.getElementById("container")
);
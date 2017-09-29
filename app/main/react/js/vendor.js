import "reactRoot/polyfills.js"
import "reactRoot/Components.js"
import "mainReact/css/main.css"
import "anotherappReact/css/test.css"

require("react");
require("react-dom");

if (process.env.NODE_ENV === "development"){
	require('react-error-overlay');
}

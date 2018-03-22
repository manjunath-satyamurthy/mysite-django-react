import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { TableHeaders, TableRow, InfoTable } from "reactRoot/Components";


class Credits extends Component {
  render() {
  	let header = <TableHeaders header={[{"head": "Credits", "colspan":"2"}]} className="main-table-header" key="header"/>;
  	let body = []
  	body.push(
  		<TableRow body={[{"data": "Inspiration", "colSpan": "1"}, {"data": "dhilipsiva.com", "colSpan": "1"}]} key="email" />,
  		<TableRow body={[{"data": "Time and Resources", "colSpan": "1"}, {"data": "Tesa Scribos GmbH", "colSpan": "1"}]} key="phone" />,
  		<TableRow body={[{"data": "Technologies", "colSpan": "1"}, {"data": "python/Django, React JS", "colSpan": "1"}]} key="body" />
  	)

    return (
    	<div className="padded-div">
    		<InfoTable theaders={header} tbody={body} />
    	</div>
    )
  }}

ReactDOM.render((
  <Credits />
), document.getElementById('credits-react-root'))
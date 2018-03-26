import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { TableRow, InfoTable } from "reactRoot/Components";


class ContactMe extends Component {
  render() {
  	let header = null;
  	let body = []
  	body.push(
  		<TableRow body={[{"data": "Email", "colSpan": "1"}, {"data": "pass2rahul@gmail.com", "colSpan": "1"}]} key="email" />,
  		<TableRow body={[{"data": "Phone No.", "colSpan": "1"}, {"data": "+49-176-5899-7500", "colSpan": "1"}]} key="phone" />

  	)

    return (
    	<div className="credit-contact-table">
    		<InfoTable theaders={header} tbody={body} />
    	</div>
    )
  }
}

ReactDOM.render((
  <div>
    <div className="background contact-background"></div>
    <h1 className="page-heading">Contact</h1>
    <ContactMe />
  </div>
), document.getElementById('contactme-react-root'))
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage, TableHeaders, TableRow, InfoTable } from "reactRoot/Components";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: LocalStorage.shouldEducationLoad(),
			education: LocalStorage.education()
		};
	}
	render() {
		if (this.state.shouldPageLoad) {
			fetch(window.location.origin+"/get_education/", {
				method: "GET"
			})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
				})
				.then(json => {
					localStorage.education = json;
					localStorage.shouldEducationLoad = false;
					this.setState({
						education: LocalStorage.education(),
						shouldPageLoad: LocalStorage.shouldEducationLoad()
					});
				});
		}

		let tables = [];
		let education = this.state.education;
		let key = 0;
		for (let i in education) {
			let body = [];
			let header = <TableHeaders
					header={[{ head: education[i].school_name, colspan: 2 }]}
					key={education[i].school_name}
				/>
			body.push(
				<TableRow
					body={[
						{ data: "Duration", colspan: 1 },
						{ data: education[i].duration, colspan: 1 }
					]}
					key={education[i].duration}
				/>
			);
			body.push(
				<TableRow
					body={[
						{ data: "Location", colspan: 1 },
						{ data: education[i].location, colspan: 1 }
					]}
					key={education[i].location}
				/>
			);
			body.push(
				<TableRow
					body={[
						{ data: "Stream", colspan: 1 },
						{ data: education[i].stream, colspan: 1 }
					]}
					key={education[i].stream}
				/>
			);
			body.push(
				<TableRow
					body={[
						{ data: "Description", colspan: 1 },
						{ data: education[i].description, colspan: 1 }
					]}
					key={education[i].description}
				/>
			);

			tables.push(<InfoTable theaders={header} tbody={body} key={key}/>)
			key = key + 1
		}

		if (!this.state.shouldPageLoad) {
			return (
				<div>
					<div className="background education-background"></div>
					<h1 className="page-heading">Education</h1>
					<div className="table-container">{tables}</div>
				</div>
			);
		} else {
			return <p>Loading ...</p>;
		}
	}
}


ReactDOM.render((
  <Education />
), document.getElementById('education-react-root'))
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage, TableHeaders, TableRow, InfoTable } from "reactRoot/Components";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: LocalStorage.shouldProjectLoad(),
			project: LocalStorage.project()
		};
	}
	render() {
		if (this.state.shouldPageLoad) {
			fetch(window.location.origin+"/get_projects/", {
				method: "GET"
			})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
				})
				.then(json => {
					localStorage.project = json;
					localStorage.shouldProjectLoad = false;
					this.setState({
						project: LocalStorage.project(),
						shouldPageLoad: LocalStorage.shouldProjectLoad()
					});
				});
		}


		let tables = [];
		let project = this.state.project;
		let key = 0;

		for (let i in project) {
			let projectLink = (
				<a target="_blank" rel="noopener noreferrer" href={project[i].github_link}>
					{project[i].name}
				</a>
			);


			let body = [];
			let header = <TableHeaders
					header={[{ head: projectLink, colspan: 2 }]}
					key={project[i].name}
				/>

			body.push(
				<TableRow
					body={[
						{ data: "description", colspan: 1 },
						{ data: project[i].description, colspan: 1 }
					]}
					key={project[i].description}
				/>
			);

			tables.push(<InfoTable theaders={header} tbody={body} key={key}/>)
			key = key + 1
		}

		if (!this.state.shouldPageLoad) {
			return (
				<div>
					<div className="background projects-background"></div>
					<h1 className="page-heading">Projects</h1>
					<div className="table-container">{tables}</div>
				</div>
			);
		} else {
			return <p>Loading ...</p>;
		}
	}
}

ReactDOM.render((
  <Projects />
), document.getElementById('projects-react-root'))
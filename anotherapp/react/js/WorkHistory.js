import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage, TableHeaders, TableRow, InfoTable } from "reactRoot/Components";

class WorkHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: LocalStorage.shouldWorkHistoryLoad(),
			workHistory: LocalStorage.workHistory()
		};
	}
	render() {
		if (this.state.shouldPageLoad) {
			fetch(window.location.origin+"/get_work_history/", {
				method: "GET"
			})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
				})
				.then(json => {
					localStorage.workHistory = json;
					localStorage.shouldWorkHistoryLoad = false;
					this.setState({
						workHistory: LocalStorage.workHistory(),
						shouldPageLoad: LocalStorage.shouldWorkHistoryLoad()
					});
				});
		}

		let tables = [];
		let workHistory = this.state.workHistory;
		let key = 0

		for (let i in workHistory) {
			let companyLink = (
				<a target="_blank" rel="noopener noreferrer" href={workHistory[i].URL}>
					{workHistory[i].Company}
				</a>
			);

			let body = [];
			let header =<TableHeaders
					header={[{ head: companyLink, colspan: 2 }]}
					key={workHistory[i].Company}
				/>
			body.push(
				<TableRow
					body={[
						{ data: "Role", colspan: 1 },
						{ data: workHistory[i].Role, colspan: 1 }
					]}
					key={workHistory[i].Role}
				/>
			);
			body.push(
				<TableRow
					body={[
						{ data: "Duration", colspan: 1 },
						{ data: workHistory[i].Duration, colspan: 1 }
					]}
					key={workHistory[i].Duration}
				/>
			);
			body.push(
				<TableRow
					body={[
						{ data: "Description", colspan: 1 },
						{ data: workHistory[i].Description, colspan: 1 }
					]}
					key={workHistory[i].Description}
				/>
			);

			tables.push(<InfoTable theaders={header} tbody={body} key={key} />)
			key = key + 1
		}

		if (!this.state.shouldPageLoad) {
			return (
				<div>
					<div className="background work-history-background"></div>
					<h1 className="page-heading">Work History</h1>
					<div className="table-container">{tables}</div>
				</div>
			);
		} else {
			return <p>Loading ...</p>;
		}
	}
}

ReactDOM.render((
  <WorkHistory />
), document.getElementById('workhistory-react-root'))
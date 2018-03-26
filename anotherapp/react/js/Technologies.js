import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage, TableHeaders, TableRow, InfoTable } from "reactRoot/Components";

class Technologies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: LocalStorage.shouldTechnologiesLoad(),
			technologies: LocalStorage.technologies()
		};
	}

	render() {
		if (this.state.shouldPageLoad) {
			fetch(window.location.origin+"/get_technologies/", {
				method: "GET"
			})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
				})
				.then(json => {
					localStorage.technologies = json;
					localStorage.shouldTechnologiesLoad = false;
					this.setState({
						technologies: LocalStorage.technologies(),
						shouldPageLoad: LocalStorage.shouldTechnologiesLoad()
					});
				});
		}

		let technologies = this.state.technologies;
		let tables = [];
		let key = 0;
		for (let category in technologies) {
			let header = <TableHeaders
					header={[{ head: category, colspan: 2 }]}
					key={category}
				/>
			let body = [];
			for (let expertise in technologies[category]) {
				let particulars = technologies[category][expertise].join(", ");
				body.push(
					<TableRow
						body={[
							{ data: expertise, colspan: 1 },
							{ data: particulars, colspan: 1 }
						]}
						key={particulars}
					/>
				);
			}

			tables.push(<InfoTable theaders={header} tbody={body} key={key}/>)
			key = key + 1
		}

		if (!this.state.shouldPageLoad) {
			return (
				<div>
				<div className="background technologies-background"></div>
				<h1 className="page-heading">Technologies</h1>
				<div className="table-container">{tables}</div>
				</div>
			);
		} else {
			return <p>Loading ...</p>;
		}
	}
}

ReactDOM.render((
  <Technologies />
), document.getElementById('technologies-react-root'))
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
		this.sortJson = this.sortJson.bind(this);
	}

	sortJson(json){
		let soratableJson = []
		for (let category in json){
			soratableJson.push([category, json[category] ])
		}

		let sortedJson = soratableJson.sort(function(a, b){
			return JSON.stringify(b[1]).length - JSON.stringify(a[1]).length
		})

		return sortedJson;
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
					let sortedJSON = this.sortJson(JSON.parse(json));
					localStorage.technologies = JSON.stringify(sortedJSON);
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
		for (let i in technologies) {
			let category = technologies[i][0];
			let expertises = technologies[i][1];
			let header = <TableHeaders
					header={[{ head: category, colspan: 2 }]}
					key={category}
				/>
			let body = [];
			for (let expertise in expertises) {
				let particulars = expertises[expertise].join(", ");
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
				<div className="table-container technologies-table-container">{tables}</div>
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
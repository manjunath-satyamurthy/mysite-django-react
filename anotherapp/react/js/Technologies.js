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
		let header = (
			<TableHeaders
				header={[{ head: "Technologies", colspan: 2 }]}
				className="main-table-header"
			/>
		);
		let body = [];
		console.log(this.state.shouldPageLoad)
		if (this.state.shouldPageLoad) {
			fetch("http://"+window.location.hostname+"/get_technologies/", {
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
		for (let category in technologies) {
			body.push(
				<TableHeaders
					header={[{ head: category, colspan: 2 }]}
					key={category}
				/>
			);
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
		}

		if (!this.state.shouldPageLoad) {
			return (
				<div className="padded-div">
					<InfoTable theaders={header} tbody={body} />
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
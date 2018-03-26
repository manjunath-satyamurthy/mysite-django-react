import React, { Component } from "react";


class LocalStorage {

  static localStorageExpiry = () => {
    var now = new Date().getTime()
    var setupTime = localStorage.getItem('setupTime');
    console.log(now, setupTime)
    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
    } else {
        if(now-setupTime > 120*1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
    }
  };

  static isLoggedIn = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.isLoggedIn
      ? JSON.parse(localStorage.isLoggedIn)
      : false;
  };
  static username = () => {
    return localStorage.username
      ? localStorage.username
      : null;
  };
  static shouldHomepageLoad = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.shouldHomepageLoad
      ? JSON.parse(localStorage.shouldHomepageLoad)
      : true;
  };
  static profileImageURL = () => {
    return localStorage.profileImageURL
      ? localStorage.profileImageURL
      : null;
  };
  static description = () => {
    return localStorage.description
      ? localStorage.description
      : null;
  };
  static shouldTechnologiesLoad = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.shouldTechnologiesLoad
      ? JSON.parse(localStorage.shouldTechnologiesLoad)
      : true;
  };
  static technologies = () => {
    return localStorage.technologies
      ? JSON.parse(localStorage.technologies)
      : null;
  };
  static shouldWorkHistoryLoad = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.shouldWorkHistoryLoad
      ? JSON.parse(localStorage.shouldWorkHistoryLoad)
      : true;
  };
  static workHistory = () => {
    return localStorage.workHistory
      ? JSON.parse(localStorage.workHistory)
      : null;
  };
  static education = () => {
    return localStorage.education
      ? JSON.parse(localStorage.education)
      : null;
  };
  static shouldEducationLoad = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.shouldEducationLoad
      ? JSON.parse(localStorage.shouldEducationLoad)
      : true;
  };
  static shouldProjectLoad = () => {
    LocalStorage.localStorageExpiry();
    return localStorage.shouldProjectLoad
      ? JSON.parse(localStorage.shouldProjectLoad)
      : true;
  };
  static project = () => {
    return localStorage.project
      ? JSON.parse(localStorage.project)
      : null;
  };

}


class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: LocalStorage.isLoggedIn()
    };
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    fetch(window.location.origin+"/logout", {
      credentials: "include"
    }).then(res => {
      if (res.ok) {
        localStorage.clear();
        this.setState({
          isLoggedIn: LocalStorage.isLoggedIn()
        });
      }
    });
  }

  render() {
    let edit = null;
    let save = null;
    let logout = null;

    if (this.state.isLoggedIn) {
      logout = (
        <input
          className="themed-btn right-float"
          id="logout-btn"
          type="button"
          value="Logout"
          onClick={this.onLogoutClick}
        />
      );
      if (!this.props.isEdited) {
        edit = (
          <input
            className="themed-btn right-float"
            id="edit-btn"
            type="button"
            value="Edit"
            onClick={this.props.onEditClick}
          />
        );
      }
      if (this.props.isEdited) {
        save = (
          <input
            className="themed-btn right-float"
            id="save-btn"
            type="button"
            value="Save"
            onClick={this.props.onSaveClick}
          />
        );
      }
    }
    return (
      <div className="control-buttons">
        {logout} {edit} {save}
        <br/>
      </div>
    );
  }
}


const TableHeaders = props => {
	let heads = [];
	props.header.forEach(row => {
		heads.push(
			<th key={row.head} colSpan={row.colspan} className={props.className}>
				{row.head}
			</th>
		);
	});
	return (
		<tr>
			{heads}
		</tr>
	);
};

const TableRow = props => {
	let rows = [];
	props.body.forEach(row => {
		rows.push(
			<td key={row.data} colSpan={row.colspan}>
				{row.data}
			</td>
		);
	});
	return (
		<tr>
			{rows}
		</tr>
	);
};

const InfoTable = props => {
	return (
    <div className="single-table-container">
			<table className="info-table">
				<thead>
					{props.theaders}
				</thead>
				<tbody>
					{props.tbody}
				</tbody>
			</table>
    </div>
	);
};

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.name === this.props.showModalName
		};
		this.closeButtonClicked = this.closeButtonClicked.bind(this);
	}

	componentDidMount(){
		console.log("mounted")
	}

	componentWillUnmount(){
		console.log("unmounted")
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.name === nextProps.showModalName) {
			this.setState({
				showModal: true
			});
		} else {
			this.setState({
				showModal: false
			});
		}
	}

	closeButtonClicked = e => {
		this.setState({
			showModal: false
		});
	};

	render() {
		if (this.state.showModal) {
			return (
				<div id={this.props.id} className={this.props.className}>
					<span className="close" onClick={this.closeButtonClicked}>
						<i className="fa fa-times" style={{ color: "white" }}></i>
					</span>
					<div className="modal-content">
						{this.props.modalContent}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}


export { TableHeaders };
export { TableRow };
export { InfoTable };
export { Modal };
export { ControlButtons };
export { LocalStorage };

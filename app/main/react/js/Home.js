import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage, ControlButtons } from "reactRoot/Components";
import FacebookIcon from "mainDjango/images/facebook.png"
import GithubIcon from "mainDjango/images/github.png"
import GooglePlusIcon from "mainDjango/images/google-plus.gif"
import LinkedInIcon from "mainDjango/images/linked-in.png"
import TwitterIcon from "mainDjango/images/twitter.png"
import StackOverflowIcon from "mainDjango/images/stackoverflow.svg"


class ProfilePhoto extends Component {
  render() {
    let image = (
      <img alt="" src={this.props.profileImgURL} id={this.props.photoType} />
    );
    let uploadProfilePhoto = null;
    if (this.props.isLoggedIn & this.props.isEdited) {
      uploadProfilePhoto = (
        <div className="editable-photo">
          <input
            type="file"
            className="themed-btn"
            id="upload-btn"
            onChange={this.props.onChange}
          />
        </div>
      );
    }

    return (
      <div>
        {image} {uploadProfilePhoto}
      </div>
    );
  }
}

class MainHeading extends Component {
  render() {
    return (
      <h1
        className={this.props.headingType}
        id={this.props.id ? this.props.id : ""}
      >
        {this.props.content}
      </h1>
    );
  }
}

class TextDescription extends Component {
  render() {
    let description = null;
    if (this.props.isLoggedIn & this.props.isEdited) {
      description = (
        <textarea
          id="description-input"
          rows="15"
          onChang={this.props.onChange}
          defaultValue={this.props.text}
        />
      );
    } else {
      description = (
        <p className={this.props.descriptionType}>
          {this.props.text}
        </p>
      );
    }

    return description;
  }
}

class ProfileLinks extends Component {
  render() {
    return (
      <table className="profile-links">
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/manjunath-satyamurthy"
              >
                <img alt="" width="40" src={GithubIcon} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/3536784/manjunath-satyamurthy"
              >
                <img alt="" width="40" src={StackOverflowIcon} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/manjunathsatyamurthy"
              >
                <img alt="" width="40" src={FacebookIcon} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://plus.google.com/+ManjunathSatyamurthy"
              >
                <img alt="" width="40" src={GooglePlusIcon} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manjunath-satyamurthy-a4408575/"
              >
                <img alt="" width="40" src={LinkedInIcon} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ManjunathSatya"
              >
                <img alt="" width="40" src={TwitterIcon} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: LocalStorage.isLoggedIn(),
      isEdited: false,
      profileImageURL: LocalStorage.profileImageURL(),
      uploadFile: null,
      updateDescription: null,
      description: LocalStorage.description(),
      shouldPageLoad: LocalStorage.shouldHomepageLoad()
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onProfileImageChange = this.onProfileImageChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onEditClick(e) {
    this.setState({
      isEdited: !this.state.isEdited
    });
  }

  onSaveClick(e) {
    let data = new FormData();
    if (this.state.updateDescription) {
      data.append(
        "data",
        JSON.stringify({
          description: this.state.updateDescription
        })
      );
    }
    if (this.state.uploadFile) {
      data.append("photo", this.state.uploadFile);
    }

    fetch("http://localhost:8000/update_home_page/", {
      method: "POST",
      credentials: "include",
      body: data,
      headers: {
        Accept: "multipart/form-data"
      }
    }).then(res => {
      if (res.ok) {
        localStorage.shouldHomepageLoad = true;
        this.setState({
          isEdited: !this.state.isEdited,
          uploadFile: null,
          updateDescription: null,
          shouldPageLoad: LocalStorage.shouldHomepageLoad()
        });
      }
    });
  }

  onProfileImageChange(e) {
    this.setState({
      uploadFile: e.currentTarget["files"][0]
    });
  }

  onDescriptionChange(e) {
    this.setState({
      updateDescription: e.currentTarget.value
    });
  }

  render() {
    if (this.state.shouldPageLoad) {
      fetch("http://localhost:8000/get_home_page/", {
        method: "GET"
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(json => {
          localStorage.description = json.description;
          localStorage.profileImageURL =
            "http://127.0.0.1:8000" + json.profile_photo_url;
          localStorage.shouldHomepageLoad = false;
          this.setState({
            description: LocalStorage.description(),
            profileImageURL: LocalStorage.profileImageURL(),
            shouldPageLoad: LocalStorage.shouldHomepageLoad()
          });
        });
    }

    if (!this.state.shouldPageLoad) {
      return (
        <div className="padded-div">
          <ControlButtons
            isLoggedIn={this.state.isLoggedIn}
            isEdited={this.state.isEdited}
            onEditClick={this.onEditClick}
            onSaveClick={this.onSaveClick}
          />
          <ProfilePhoto
            profileImgURL={this.state.profileImageURL}
            photoType="profile-photo"
            isLoggedIn={this.state.isLoggedIn}
            isEdited={this.state.isEdited}
            onChange={this.onProfileImageChange}
          />
          <MainHeading
            headingType="center"
            id="manjunath-satyamurthy"
            content="Manjunath Satyamurthy"
          />
          <TextDescription
            descriptionType="welcome-text"
            text={this.state.description}
            isLoggedIn={this.state.isLoggedIn}
            isEdited={this.state.isEdited}
            onChange={this.onDescriptionChange}
          />
          <ProfileLinks />
        </div>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

ReactDOM.render((
  <Home />
), document.getElementById('home-react-root'))

export default Home;
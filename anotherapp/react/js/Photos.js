import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Modal } from "reactRoot/Components";



class TaggedPhotos extends Component {
	onClick = () => {
		this.props.setModalName(this.props.url);
	};
	render() {
		return (
			<div className="photo-preview" onClick={this.onClick}>
				<img src={this.props.url} alt="Failed to load" />
				<h3>
					<span>
						{this.props.comment}
					</span>
				</h3>
			</div>
		);
	}
}


class PhotosOverview extends Component {
	onClick = () => {
		this.props.onClick(this.props.tag)
	}
	render() {
		return (
			<div className="photo-preview" onClick={this.onClick}>
				<img src={this.props.url} alt="Failed to load" />
				<h3>
					<span>
						{this.props.tag}
					</span>
				</h3>
			</div>
		);
	}
}


class PhotoModal extends Component {
	componentWillMount(){
		console.log("mounted PhotoModal")
		document.addEventListener("keydown", this.onKeyDown, false);
	}

	componentWillUnmount(){
		console.log("unmounted PhotoModal")
		document.removeEventListener("keydown", this.onKeyDown, false);
	}

	onLeftClick = () => {
		this.props.setModalName(this.props.previousPhoto);
	};

	onRightClick = () => {
		this.props.setModalName(this.props.nextPhoto);
	};

	onKeyDown = (e) => {
		if (e.keyCode === 37){
			this.props.setModalName(this.props.previousPhoto);
		}
		else if (e.keyCode === 39){
			this.props.setModalName(this.props.nextPhoto);
		}
		else if (e.keyCode === 27){
			this.props.setModalName(null);
		}
 	}

	render() {
		return (
			<div>
				<p className="left-arrow" onClick={this.onLeftClick}>
					<i className="fa fa-chevron-left" style={{color: 'white'}}></i>
				</p>
					<img src={this.props.currentPhoto} alt="Failed to Load" key={this.props.currentPhoto+this.props.nextPhoto} />
				<p className="right-arrow" onClick={this.onRightClick}>
					<i className="fa fa-chevron-right" style={{color: 'white'}}></i>
				</p>
			</div>
		);
	}
}


class Photos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: true,
			images: null,
			showModalName: null,
			currentTag: null
		};
		this.setModalName = this.setModalName.bind(this);
		this.onTagClick = this.onTagClick.bind(this);
		this.goBack = this.goBack.bind(this);

	};

	goBack = () => {
		this.setState({
			currentTag: null
		})
	}

	onTagClick = tag => {
		this.setState({
			currentTag: tag
		})

	};

	setModalName = url => {
		this.setState({
			showModalName: url
		});
	};


	render() {
		if (this.state.shouldPageLoad) {
			fetch(window.location.origin+"/get_photos", {
				method: "GET"
			})
				.then(res => {
					return res.json();
				})
				.then(json => {
					this.setState({
						images: json,
						shouldPageLoad: false
					});
				});
		}
		let imagesGroupedByTag = {}
		let previewImages = []
		let imageData = this.state.images;

		for (let i in imageData) {
			i = parseInt(i, 10);

			if (!(imageData[i].tag in imagesGroupedByTag)){
				imagesGroupedByTag[imageData[i].tag] = {}
				imagesGroupedByTag[imageData[i].tag]["images"] = []

				previewImages.push(
					<PhotosOverview
						url={imageData[i].image_url}
						tag={imageData[i].tag}
						key={imageData[i].image_url}
						onClick={this.onTagClick}
					/>
				)
			}

			imagesGroupedByTag[imageData[i].tag]["images"].push(
				<TaggedPhotos
					url={imageData[i].image_url}
					tag={imageData[i].tag}
					key={imageData[i].image_url}
					comment={imageData[i].comment}
					setModalName={this.setModalName}
				/>
			)
		}

		for (let tag in imagesGroupedByTag){
			let i = 0;
			let photoModals = [];
			let images = imagesGroupedByTag[tag].images;
			for (let index in images){
				let url = images[index].props.url;
				let comment = images[index].props.comment;

				let previousPhoto = "",
					nextPhoto = "",
					currentPhoto = "";
				let lastIndex = images.length - 1;


				currentPhoto = url;
				if (i === 0) {
					previousPhoto = images[lastIndex].props.url;
				} else {
					previousPhoto = images[i - 1].props.url;
				}
				if (i === lastIndex) {
					nextPhoto = images[0].props.url;
				} else {
					nextPhoto = images[i + 1].props.url;
				}
				let photoModal = (
					<PhotoModal
						currentPhoto={currentPhoto}
						nextPhoto={nextPhoto}
						previousPhoto={previousPhoto}
						setModalName={this.setModalName}
					/>
				);	

				photoModals.push(
					<Modal
						className="modal"
						modalContent={photoModal}
						key={currentPhoto}
						name={currentPhoto}
						showModalName={this.state.showModalName}
					/>
				);

				i = i + 1
			imagesGroupedByTag[tag]["modals"] = photoModals
			}
		}



		if (!this.shouldPageLoad) {

			if (!this.state.currentTag){
				return (
					<div>
						<div className="background photos-background"></div>
						<h1 className="page-heading">Photos</h1>
						<div className="photo-overview">
							<div>
								{previewImages}
							</div>
						</div>
					</div>
				);
			} else {
				return (
					<div>
						<button className="photo-back" onClick={this.goBack}>
							<i className="fa fa-caret-left" 
								style={{"fontWeight":"bold", 
								"fontSize":"8em", color:"white"}}>
							</i>
						</button>
						<div className="background photos-background"></div>
						<h1 className="page-heading">{this.state.currentTag}</h1>
						<div className="photo-overview">
							<div>
								{imagesGroupedByTag[this.state.currentTag]["images"]}
							</div>
							{imagesGroupedByTag[this.state.currentTag]["modals"]}
						</div>
					</div>
				)
			}

		}
	}
}

ReactDOM.render((
  <Photos />
), document.getElementById('photos-react-root'))
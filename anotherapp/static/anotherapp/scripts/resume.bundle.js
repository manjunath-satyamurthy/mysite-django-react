webpackJsonp([3],{96:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),l=n.n(r),s=n(5),u=n.n(s),d=n(6),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onEditClick=function(e){n.setState({isEdited:!n.state.isEdited})},n.onSaveClick=function(e){if(n.state.uploadFile){var t=new FormData;t.append("resume",n.state.uploadFile),fetch(window.location.origin+"/update_resume/",{method:"POST",credentials:"include",body:t,headers:{Accept:"multipart/form-data"}}).then(function(e){e.ok&&n.setState({isEdited:!n.state.isEdited,uploadFile:null,shouldPageLoad:!0})})}},n.onChange=function(e){n.setState({uploadFile:e.currentTarget.files[0]})},n.state={isLoggedIn:d.a.isLoggedIn(),shouldPageLoad:!0,isEdited:!1,uploadFile:null,resumeURL:null},n.onEditClick=n.onEditClick.bind(n),n.onSaveClick=n.onSaveClick.bind(n),n.onChange=n.onChange.bind(n),n}return a(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.state.isEdited?null:l.a.createElement("object",{data:this.state.resumeURL,type:"application/pdf",height:"100%",width:"100%"},"Alternative Text"),n=null;this.state.isLoggedIn&this.state.isEdited&&(n=l.a.createElement("div",{className:"editable-photo"},l.a.createElement("input",{type:"file",className:"themed-btn",id:"upload-btn",onChange:this.onChange}))),this.state.shouldPageLoad&&fetch(window.location.origin+"/get_resume/",{method:"GET",credentials:"include"}).then(function(e){if(e.ok)return e.json()}).then(function(t){e.setState({resumeURL:t.url,shouldPageLoad:!1})});var i=null;return this.state.isLoggedIn&&(i=l.a.createElement(d.b,{isLoggedIn:this.state.isLoggedIn,isEdited:this.state.isEdited,onEditClick:this.onEditClick,onSaveClick:this.onSaveClick})),this.state.resumeURL?l.a.createElement("div",null,i,t,n):l.a.createElement("p",null,"Loading ...")}}]),t}(r.Component);u.a.render(l.a.createElement(h,null),document.getElementById("resume-react-root"))}},[96]);
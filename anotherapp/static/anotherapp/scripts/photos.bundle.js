webpackJsonp([5],{94:function(e,t,o){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(4),s=o.n(l),i=o(5),c=o.n(i),u=o(6),p=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),m=function(e){function t(){var e,o,r,l;a(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return o=r=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onClick=function(){r.props.setModalName(r.props.url)},l=o,n(r,l)}return r(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"photo-preview",onClick:this.onClick},s.a.createElement("img",{src:this.props.url,alt:"Failed to load"}),s.a.createElement("h3",null,s.a.createElement("span",null,this.props.tag)))}}]),t}(l.Component),h=function(e){function t(){var e,o,r,l;a(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return o=r=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onClick=function(){r.props.onClick(r.props.tag)},l=o,n(r,l)}return r(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"photo-preview",onClick:this.onClick},s.a.createElement("img",{src:this.props.url,alt:"Failed to load"}),s.a.createElement("h3",null,s.a.createElement("span",null,this.props.tag)))}}]),t}(l.Component),d=function(e){function t(){var e,o,r,l;a(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return o=r=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onLeftClick=function(){r.props.setModalName(r.props.previousPhoto)},r.onRightClick=function(){r.props.setModalName(r.props.nextPhoto)},r.onKeyDown=function(e){37===e.keyCode?r.props.setModalName(r.props.previousPhoto):39===e.keyCode?r.props.setModalName(r.props.nextPhoto):27===e.keyCode&&r.props.setModalName(null)},l=o,n(r,l)}return r(t,e),p(t,[{key:"componentWillMount",value:function(){console.log("mounted PhotoModal"),document.addEventListener("keydown",this.onKeyDown,!1)}},{key:"componentWillUnmount",value:function(){console.log("unmounted PhotoModal"),document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{className:"left-arrow",onClick:this.onLeftClick},s.a.createElement("i",{className:"fa fa-chevron-left",style:{color:"white"}})),s.a.createElement("img",{src:this.props.currentPhoto,alt:"Failed to Load",key:this.props.currentPhoto+this.props.nextPhoto}),s.a.createElement("p",{className:"right-arrow",onClick:this.onRightClick},s.a.createElement("i",{className:"fa fa-chevron-right",style:{color:"white"}})))}}]),t}(l.Component),f=function(e){function t(e){a(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.goBack=function(){o.setState({currentTag:null})},o.onTagClick=function(e){o.setState({currentTag:e})},o.setModalName=function(e){o.setState({showModalName:e})},o.state={shouldPageLoad:!0,images:null,showModalName:null,currentTag:null},o.setModalName=o.setModalName.bind(o),o.onTagClick=o.onTagClick.bind(o),o.goBack=o.goBack.bind(o),o}return r(t,e),p(t,[{key:"render",value:function(){var e=this;this.state.shouldPageLoad&&fetch(window.location.origin+"/get_photos",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({images:t,shouldPageLoad:!1})});var t={},o=[],a=this.state.images;for(var n in a)n=parseInt(n,10),a[n].tag in t||(t[a[n].tag]={},t[a[n].tag].images=[],o.push(s.a.createElement(h,{url:a[n].image_url,tag:a[n].tag,key:a[n].image_url,onClick:this.onTagClick}))),t[a[n].tag].images.push(s.a.createElement(m,{url:a[n].image_url,tag:a[n].tag,key:a[n].image_url,comment:a[n].comment,setModalName:this.setModalName}));for(var r in t){var l=0,i=[],c=t[r].images;for(var p in c){var f=c[p].props.url,g=(c[p].props.comment,""),v="",y="",k=c.length-1;y=f,g=0===l?c[k].props.url:c[l-1].props.url,v=l===k?c[0].props.url:c[l+1].props.url;var E=s.a.createElement(d,{currentPhoto:y,nextPhoto:v,previousPhoto:g,setModalName:this.setModalName});i.push(s.a.createElement(u.f,{className:"modal",modalContent:E,key:y,name:y,showModalName:this.state.showModalName})),l+=1,t[r].modals=i}}if(!this.shouldPageLoad)return this.state.currentTag?s.a.createElement("div",null,s.a.createElement("button",{className:"photo-back",onClick:this.goBack},s.a.createElement("i",{className:"fa fa-caret-left",style:{fontWeight:"bold",fontSize:"8em",color:"white"}})),s.a.createElement("div",{className:"background photos-background"}),s.a.createElement("h1",{className:"page-heading"},this.state.currentTag),s.a.createElement("div",{className:"photo-overview"},s.a.createElement("div",null,t[this.state.currentTag].images),t[this.state.currentTag].modals)):s.a.createElement("div",null,s.a.createElement("div",{className:"background photos-background"}),s.a.createElement("h1",{className:"page-heading"},"Photos"),s.a.createElement("div",{className:"photo-overview"},s.a.createElement("div",null,o)))}}]),t}(l.Component);c.a.render(s.a.createElement(f,null),document.getElementById("photos-react-root"))}},[94]);
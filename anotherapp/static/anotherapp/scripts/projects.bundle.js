webpackJsonp([4],{95:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=o(4),l=o.n(c),i=o(5),s=o.n(i),u=o(6),p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={shouldPageLoad:u.a.shouldProjectLoad(),project:u.a.project()},o}return a(t,e),p(t,[{key:"render",value:function(){var e=this;this.state.shouldPageLoad&&fetch(window.location.origin+"/get_projects/",{method:"GET"}).then(function(e){if(e.ok)return e.json()}).then(function(t){localStorage.project=t,localStorage.shouldProjectLoad=!1,e.setState({project:u.a.project(),shouldPageLoad:u.a.shouldProjectLoad()})});var t=[],o=this.state.project,n=0;for(var r in o){var a=l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o[r].github_link},o[r].name),c=[],i=l.a.createElement(u.c,{header:[{head:a,colspan:2}],key:o[r].name});c.push(l.a.createElement(u.d,{body:[{data:"description",colspan:1},{data:o[r].description,colspan:1}],key:o[r].description})),t.push(l.a.createElement(u.e,{theaders:i,tbody:c,key:n})),n+=1}return this.state.shouldPageLoad?l.a.createElement("p",null,"Loading ..."):l.a.createElement("div",null,l.a.createElement("div",{className:"background projects-background"}),l.a.createElement("h1",{className:"page-heading"},"Projects"),l.a.createElement("div",{className:"table-container"},t))}}]),t}(c.Component);s.a.render(l.a.createElement(d,null),document.getElementById("projects-react-root"))}},[95]);
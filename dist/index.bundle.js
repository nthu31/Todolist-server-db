!function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],p=0,d=[];p<c.length;p++)i=c[p],r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([89,1]),n()}({47:function(e,t,n){var o=n(48);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},48:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".categList {\n    height: 100%;\n    overflow-x: hidden;\n    position: fixed;\n    top: 0;\n    left: 0;\n    font-family: 'Baloo Bhai', cursive;\n    transition: width 0.5s;\n}\n\n.categList.hide {\n    width: 0px;\n}\n\n.categList.appear {\n    width: 450px;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding-left: 1rem;\n    color: black;\n    border: solid black;\n    border-left: 0;\n    border-right: 0;\n    padding: 8px 8px;\n    font-size: 1.5rem;\n}\n\n.footer:hover {\n    cursor: pointer;\n    background-color: black;\n    color: white;\n}\n\n.createInput {\n    margin: 0 !important;\n    padding-left: 1rem;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    position: relative;\n    font-size: 1.5rem;\n}\n\n.inputArea {\n    border: solid black 3px;\n    border-radius: 8px;\n}\n\n.createCatButton {\n    background: black;\n    color: white;\n    border: solid black 0px;\n    border-radius: 5px;\n    padding: 4px 7px 4px 7px;\n    outline: inherit;\n}\n\n@media (max-width: 950px) {\n    .categList.appear {\n        width: 250px;\n    }\n}\n",""])},50:function(e,t,n){var o=n(51);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},51:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".navb {\n    margin-bottom: 1rem;\n}\n\n.togglerItem {\n    color: black !important;\n}\n\n.nav-link:hover {\n    cursor: pointer;\n}\n\n.searchBar {\n    border: solid rgb(210, 210, 210) 1px;\n    border-radius: 5px;\n    display: inline-block;\n}\n\n.search {\n    justify-content: flex-end;\n    margin-top: 0px;\n}\n\n.togg:hover {\n    cursor: pointer;\n}\n\n.btnn {\n    border-color: white !important;\n    outline: none !important;\n    border: 0 !important;\n}\n\n.btnn:hover {\n    color: gray !important;\n    background-color: white !important;\n}\n\n@media (max-width: 950px) {\n    .search {\n        margin-top: 10px;\n    }\n}\n\n@media (max-width: 400px) {\n    .search {\n        margin-top: 10px;\n    }\n}\n",""])},77:function(e,t,n){var o=n(78);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},78:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".item {\n    margin: 0 !important;\n    padding-left: 1rem;\n    position: relative;\n    font-size: 1.5rem;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    transition-property: color;\n    transition-duration: 1s;\n}\n\n.item:hover {\n    cursor: pointer;\n    background-color: black;\n    color: white;\n}\n",""])},79:function(e,t,n){var o=n(80);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},80:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".todo {\n    color: black;\n    margin: 1.5rem 10%;\n    font-family: 'Baloo Bhai', cursive;\n    background-color: white;\n    padding: 7px;\n    border-radius: 5px;\n    overflow-y: hidden;\n}\n\n.todo:hover {\n    color: white;\n    background-color: rgba(0,0,0,0);\n}\n\n.text_line {\n    text-decoration: line-through;\n}\n\n.detailOpen {\n    height: auto;\n    display: block;\n}\n\n.detailHide {\n    height: 0;\n    display: none;\n}\n\n.doneButton {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    border-radius: 5px;\n    background-color: white;\n}\n\n.doneButton:hover {\n    background-color: rgba(0, 0, 0, 0);\n    color: white;\n}\n\n\n\n.check {\n    margin-right: 10px;\n}\n",""])},81:function(e,t,n){var o=n(82);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},82:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".editArea {\n    height: 100%;\n    background: url('images/bg-1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    transition: margin-left 0.5s;\n}\n\n.editArea.moveLeft {\n    margin-left: 0;\n}\n\n.editArea.moveRight {\n    margin-left: 450px;\n}\n\n.editMasking {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.sideBtn {\n    width: 200px;\n    margin: 1rem;\n    padding: 5px 0px;\n    background-color: rgba(0, 0, 0, 1);\n    color: white;\n    font-family: 'Baloo Bhai', cursive;\n    font-size: 1.5rem;\n    border-width: 0;\n    border-radius: 5px;\n    transition: all 0.3s;\n}\n\n.sideBtn:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 1);\n    color: black;\n}\n\n.editFooter {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 1rem;\n    background-color: rgba(0, 0, 0, 1);\n    padding-top: 6px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    color: white;\n    font-family: 'Baloo Bhai', cursive;\n    font-size: 1.5rem;\n    border-width: 0;\n    border-radius: 5px;\n    transition: all 0.3s;\n}\n\n.editFooter:hover {\n    background-color: rgba(255, 255, 255, 1);\n    color: black;\n}\n\n.todoPop {\n    color: black;\n    margin: 1.5rem 10%;\n    font-family: 'Baloo Bhai', cursive;\n    background-color: white;\n    padding: 7px;\n    border-radius: 5px;\n}\n\n.addTodoInput {\n    border: solid gray 2px;\n    border-radius: 10px;\n}\n\n.addD {\n    margin-top: 10px;\n}\n\n.confirm-add {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    border-radius: 5px;\n}\n\n.confirm-add:hover {\n    background-color: black;\n    color: white;\n}\n\n.delete {\n    position: absolute;\n    bottom: 0;\n    margin: 1rem;\n    background-color: rgba(0, 0, 0, 1);\n    color: white;\n    font-family: 'Baloo Bhai', cursive;\n    font-size: 1.5rem;\n    border-width: 0;\n    border-radius: 5px;\n    padding-top: 6px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    transition: all 0.3s;\n}\n\n.delete:hover {\n    background-color: rgba(255, 255, 255, 1);\n    color: black;\n}\n\n@media (max-width: 950px) {\n    .editArea.moveRight {\n        margin-left: 250px;\n    }\n}\n\n@media (max-width: 430px) {\n    .sidebarBtn {\n        width: 100px;\n        margin: 5px;\n        font-size: 10px;\n    }\n}\n",""])},83:function(e,t,n){var o=n(84);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},84:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".main-container {\n    height: 100%;\n}\n\n.fa-folder-open {\n    position: relative;\n    top: 3px;\n}\n\n.todo-2 {\n    font-size: 1.5rem;\n    position: relative;\n    border-radius: 5px;\n}\n\n.title {\n    margin-left: 1rem;\n}\n\n.title:hover {\n    cursor: pointer;\n}\n\n.fa-clipboard-list {\n    margin-right: 1rem;\n    position: relative;\n    top: 1px;\n}\n\n.deadline {\n    margin-right: 1rem;\n}\n\n.important-icon {\n    margin-right: 1rem;\n    position: relative;\n    top: 1px;\n}\n\n.important-icon:hover {\n    cursor: pointer;\n}\n\n.colorY {\n    color: rgb(255, 217, 0);\n}\n\n.detail {\n    margin-left: 3rem;\n    font-size: 1rem;\n    padding: 3px;\n    position: relative;\n}\n",""])},87:function(e,t,n){var o=n(88);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},88:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap);",""]),t.push([e.i,"* {\n    box-sizing: border-box;\n}\n\nhtml, body, #root {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n",""])},89:function(e,t,n){"use strict";n.r(t);var o=n(14),r=n.n(o),a=n(1),i=n.n(a),c=n(9),l=(n(47),n(90)),s=n(91),u=n(92),p=n(93),d=n(94),f=n(95),h=n(96),m=(n(50),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}());var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={collapse:!1},n.toggle=n.toggle.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),m(t,[{key:"render",value:function(){return i.a.createElement(l.a,{color:"faded",light:!0,className:"navb"},i.a.createElement(s.a,{className:"togg",onClick:this.toggle}),i.a.createElement("div",{className:"search d-flex"},i.a.createElement("input",{className:"searchBar"}),i.a.createElement(u.a,{outline:!0,className:"btnn"},i.a.createElement("i",{className:"fas fa-search"}))),i.a.createElement(p.a,{isOpen:this.state.collapse,navbar:!0},i.a.createElement(d.a,{navbar:!0},i.a.createElement(f.a,null,i.a.createElement(h.a,null,"Family")),i.a.createElement(f.a,null,i.a.createElement(h.a,null,"Friend")))))}},{key:"toggle",value:function(){this.setState(function(e,t){return{collapse:!e.collapse}})}}]),t}(),b=n(10),v=n.n(b),y="http://todolist-server-db-dev.ap-northeast-1.elasticbeanstalk.com/api";var k=function(e){return function(t,n){(function(e){var t=y+"/lists?category="+e;return console.log("Making GET request to: "+t),v.a.get(t).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e).then(function(n){t(function(e,t){return{type:"@END_GET_CATEGORY",category:e,posts:t}}(e,n))}).catch(function(e){console.log(e)})}},O=function(){return function(e,t){var n;(n=y+"/keys",console.log("Making GET request to: "+n),v.a.get(n).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})).then(function(t){e(function(e){return{type:"@END_GET_CATEGORY_KEYS",keys:e}}(t))}).catch(function(e){console.log(e)})}},E=function(e){return function(t,n){(function(e){var t=y+"/posts/category/"+e;return console.log("Making POST request to: "+t),v.a.post(t).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e).then(function(n){t(function(e){return{type:"@END_CREATE_CATEGORY",name:e}}(e))}).catch(function(e){console.log(e)})}},x=function(e,t){return function(n,o){(function(e,t){var n=y+"/posts/important";return console.log("Making POST request to: "+n),v.a.post(n,{category:e,id:t}).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e,t).then(function(e){n(function(e){return{type:"@END_TOGGLE_IMPORTANT",id:e}}(t))}).catch(function(e){console.log(e)})}},w=function(e,t){return function(n,o){(function(e,t){var n=y+"/posts/check";return console.log("Making POST request to: "+n),v.a.post(n,{category:e,id:t}).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e,t).then(function(e){n(function(e){return{type:"@END_CHECK_TODO",id:e}}(t))}).catch(function(e){console.log(e)})}},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return function(i,c){(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=y+"/posts/todo";return console.log("Making POST request to: "+i),v.a.post(i,{category:e,title:t,description:n,deadline:o,remark:r,important:a}).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e,t,n,o,r,a).then(function(e){i(function(e){return{type:"@END_ADD_TODO",post:e}}(e))}).catch(function(e){console.log(e)})}},_=function(e,t){return function(n,o){(function(e,t){var n=y+"/posts/delete";return console.log("Making POST request to: "+n),v.a.post(n,{category:e,id:t}).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e,t).then(function(e){n(function(e){return{type:"@END_DELETE_TODO",id:e}}(t))}).catch(function(e){console.log(e)})}},T=function(e){return function(t,n){(function(e){var t=y+"/posts/deleteCategory/"+e;return console.log("Making POST request to: "+t),v.a.post(t).then(function(e){if(200!=e.status)throw new Error("Unexpected response code: "+e.status);return e.data})})(e).then(function(e){t(k("All")),t(O())}).catch(function(e){console.log(e)})}},j=(n(77),n(97)),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var A=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),D(t,[{key:"render",value:function(){return i.a.createElement(j.a,{className:"item",onClick:this.handleClick},i.a.createElement("i",{className:"far fa-folder-open"}),"  ",this.props.name)}},{key:"handleClick",value:function(){this.props.dispatch(k(this.props.name))}}]),t}(),I=Object(c.b)(function(e){return N({},e.categoryReducer)})(A),B=n(98),P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var R=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={popUpVisible:!1,tooltipOpen:!1},n.handleCreateClick=n.handleCreateClick.bind(n),n.handleOutsideClick=n.handleOutsideClick.bind(n),n.handleCreateCategory=n.handleCreateCategory.bind(n),n.toggle=n.toggle.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),S(t,[{key:"render",value:function(){var e=this,t=this.props.sideBarOpen;return i.a.createElement("div",{className:"categList "+(t?"appear":"hide")},i.a.createElement(g,null),this.props.keys.map(function(e){return i.a.createElement(I,{name:e,key:e})}),i.a.createElement("div",{ref:function(t){e.node=t},id:"tooltip-target"},this.state.popUpVisible&&i.a.createElement("div",null,i.a.createElement(j.a,{className:"createInput"},i.a.createElement("i",{className:"far fa-folder-open"}),"  ",i.a.createElement("form",{onSubmit:this.handleCreateCategory},i.a.createElement("input",{className:"inputArea",name:"input"}),i.a.createElement("button",{className:"createCatButton"},"+"))),i.a.createElement(B.a,{placement:"bottom",isOpen:this.state.tooltipOpen,target:"tooltip-target",toggle:this.toggle},"Input can't be empty!"))),i.a.createElement("div",{className:"footer",id:"footer",onClick:this.handleCreateClick},i.a.createElement("i",{className:"fas fa-plus"}),"  CREATE LIST"))}},{key:"componentWillMount",value:function(){this.props.dispatch(O()),this.props.dispatch(k("All"))}},{key:"handleCreateClick",value:function(){this.state.popUpVisible?document.removeEventListener("click",this.handleOutsideClick):document.addEventListener("click",this.handleOutsideClick),this.setState(function(e,t){return{popUpVisible:!e.popUpVisible}})}},{key:"handleOutsideClick",value:function(e){this.node.contains(e.target)||this.handleCreateClick()}},{key:"handleCreateCategory",value:function(e){if(e.preventDefault(),e.target.input.value){var t=e.target.input.value.charAt(0).toUpperCase()+e.target.input.value.slice(1);this.props.dispatch(E(t)),this.handleCreateClick()}else{var n=this.setState.bind(this);this.setState({tooltipOpen:!0},function(){setTimeout(function(){n({tooltipOpen:!1})},1e3)})}}},{key:"toggle",value:function(){this.setState(function(e,t){e.tooltipOpen})}}]),t}(),M=Object(c.b)(function(e){return P({},e.categoryReducer)})(R),L=(n(79),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),G=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var U=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={detailOpen:!1},n.handleClick=n.handleClick.bind(n),n.handleImportantClick=n.handleImportantClick.bind(n),n.handleDoneClick=n.handleDoneClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),G(t,[{key:"render",value:function(){var e=this.state.detailOpen,t=this.props.Title,n=this.props.Deadline,o=this.props.Important;return i.a.createElement("div",{className:"todo "+(this.props.Done?"text_line":"")},i.a.createElement("div",{className:"todo-2 d-flex justify-content-between"},i.a.createElement("div",{className:"title",onClick:this.handleClick},i.a.createElement("i",{className:"fas fa-clipboard-list"}),t),i.a.createElement("div",null,i.a.createElement("span",{className:"deadline"},n),i.a.createElement("i",{className:"important-icon fas fa-star "+(o?"colorY":""),onClick:this.handleImportantClick}),i.a.createElement("input",{type:"checkbox",className:"check",name:"checkBox",value:this.props.Id}))),i.a.createElement("div",{className:"detail "+(e?"detailOpen":"detailHide")},i.a.createElement("div",null,"Description: ",this.props.Description),i.a.createElement("div",null,"Remark: ",this.props.Remark),i.a.createElement("button",{className:"doneButton",onClick:this.handleDoneClick},"Done")))}},{key:"handleClick",value:function(){this.setState(function(e,t){return{detailOpen:!e.detailOpen}})}},{key:"handleImportantClick",value:function(){var e=this.props.category,t=this.props.Id;this.props.dispatch(x(e,t))}},{key:"handleDoneClick",value:function(e){e.preventDefault();var t=this.props.category,n=this.props.Id;this.props.dispatch(w(t,n))}}]),t}(),z=Object(c.b)(function(e){return L({},e.categoryReducer)})(U),Y=(n(81),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var V=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={addTodoPopOut:!1,addToggleImp:!1},n.handleAddClick=n.handleAddClick.bind(n),n.handleAddImp=n.handleAddImp.bind(n),n.handleAddOutsideClick=n.handleAddOutsideClick.bind(n),n.handleAddTodo=n.handleAddTodo.bind(n),n.handleDelete=n.handleDelete.bind(n),n.handleCategoryDelete=n.handleCategoryDelete.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),q(t,[{key:"render",value:function(){var e=this,t=this.props.sideBarOpen,n=this.props.category,o=this.state.addToggleImp;return i.a.createElement("div",{className:"editArea "+(t?"moveRight":"moveLeft")},i.a.createElement("div",{className:"editMasking"},i.a.createElement("button",{className:"sideBtn",onClick:this.props.handleToggleSideBar},"☰  ",n),"All"!=this.props.category&&i.a.createElement("button",{className:"sideBtn",onClick:this.handleCategoryDelete},"CategoryDelete"),i.a.createElement("form",{onSubmit:this.handleDelete},"All"==this.props.category?console.log("All"):this.props.posts.map(function(e){return i.a.createElement(z,Y({key:""+e.Id},e))}),i.a.createElement("button",{className:"delete",type:"submit"},i.a.createElement("i",{className:"fas fa-trash-alt"}),"  Delete")),i.a.createElement("div",{ref:function(t){e.node=t},id:"add-target"},this.state.addTodoPopOut&&i.a.createElement("form",{className:"todoPop",onSubmit:this.handleAddTodo},i.a.createElement("div",{className:"todo-2 d-flex justify-content-between"},i.a.createElement("div",{className:"title"},i.a.createElement("i",{className:"fas fa-clipboard-list"}),"Title:  ",i.a.createElement("input",{className:"addTodoInput",name:"titleInput"})),i.a.createElement("div",null,i.a.createElement("span",{className:"deadline"},"Deadline:  ",i.a.createElement("input",{className:"addTodoInput",name:"deadlineInput"})),i.a.createElement("i",{className:"important-icon fas fa-star "+(o?"colorY":""),onClick:this.handleAddImp}))),i.a.createElement("div",{className:"detail"},i.a.createElement("div",{className:"addD"},"Description:  ",i.a.createElement("input",{className:"addTodoInput",name:"despInput"})),i.a.createElement("div",{className:"addD"},"Remark:  ",i.a.createElement("input",{className:"addTodoInput",name:"remarkInput"})),i.a.createElement("button",{className:"confirm-add",type:"submit"},"Confirm")))),i.a.createElement("button",{className:"editFooter",onClick:this.handleAddClick},i.a.createElement("i",{className:"fas fa-plus"}),"  Add")))}},{key:"handleAddClick",value:function(){this.state.addTodoPopOut?document.removeEventListener("click",this.handleAddOutsideClick):document.addEventListener("click",this.handleAddOutsideClick),this.setState(function(e,t){return{addTodoPopOut:!e.addTodoPopOut}})}},{key:"handleAddImp",value:function(){this.setState(function(e,t){return{addToggleImp:!e.addToggleImp}})}},{key:"handleAddOutsideClick",value:function(e){this.node.contains(e.target)||this.handleAddClick()}},{key:"handleAddTodo",value:function(e){e.preventDefault();var t=this.props.category,n=e.target.titleInput.value,o=e.target.despInput.value,r=e.target.deadlineInput.value,a=e.target.remarkInput.value,i=this.state.addToggleImp;this.props.dispatch(C(t,n,o,r,a,i)),this.handleAddClick()}},{key:"handleDelete",value:function(e){e.preventDefault();var t=this.props.category;if(e.target.checkBox)if(e.target.checkBox.length>1){for(var n=0;n<e.target.checkBox.length;n++)if(e.target.checkBox[n].checked){var o=e.target.checkBox[n].value;this.props.dispatch(_(t,o))}}else if(e.target.checkBox.checked){var r=e.target.checkBox.value;this.props.dispatch(_(t,r))}}},{key:"handleCategoryDelete",value:function(){console.log("Exe"),this.props.dispatch(T(this.props.category))}}]),t}(),F=Object(c.b)(function(e){return Y({},e.categoryReducer)})(V),H=n(13),K=n(38);function J(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var W={category:"All",posts:[],keys:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments[1];switch(t.type){case"@END_GET_CATEGORY":return{category:t.category.charAt(0).toUpperCase()+t.category.slice(1),posts:t.posts,keys:e.keys};case"@END_GET_CATEGORY_KEYS":return Object.assign({},e,{keys:t.keys});case"@END_TOGGLE_IMPORTANT":return Object.assign({},e,{posts:e.posts.map(function(e){return e.Id==t.id?Object.assign({},e,{Important:!e.Important}):e})});case"@END_CHECK_TODO":return Object.assign({},e,{posts:e.posts.map(function(e){return e.Id==t.id?Object.assign({},e,{Done:!0}):e})});case"@END_ADD_TODO":return Object.assign({},e,{posts:[].concat(J(e.posts),[t.post])});case"@END_DELETE_TODO":return Object.assign({},e,{posts:e.posts.filter(function(e){return e.Id!=t.id})});case"@END_CREATE_CATEGORY":return Object.assign({},e,{keys:[].concat(J(e.keys),[t.name])});default:return e}},Q=(n(83),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}());var Z=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sideBarOpen:!0},n.store=null,n.handleToggleSideBar=n.handleToggleSideBar.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),Q(t,[{key:"componentWillMount",value:function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d;this.store=Object(H.e)(Object(H.c)({categoryReducer:X}),e(Object(H.a)(K.a)))}},{key:"render",value:function(){return i.a.createElement(c.a,{store:this.store},i.a.createElement("div",{className:"main-container"},i.a.createElement(M,{sideBarOpen:this.state.sideBarOpen}),i.a.createElement(F,{handleToggleSideBar:this.handleToggleSideBar,sideBarOpen:this.state.sideBarOpen})))}},{key:"handleToggleSideBar",value:function(){this.setState(function(e,t){return{sideBarOpen:!e.sideBarOpen}})}}]),t}();n(85),n(87);window.onload=function(){r.a.render(i.a.createElement(Z,null),document.getElementById("root"))}}});
//# sourceMappingURL=index.bundle.js.map
webpackJsonp([0],[function(e,t,n){e.exports=n(1)},function(e,t,n){(function(e,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(10),i=r(o);e.render(t.createElement(i.default,null),document.getElementById("root"))}).call(t,n(2),n(2))},,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),a=n(11),l=function(){return i.default.createElement("div",null,i.default.createElement(a.Autocomplete,null))};t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Autocomplete=void 0;var o=n(12),i=r(o);t.Autocomplete=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(13),i=r(o);t.default=i.default},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c);n(15);var p=function(t){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.toggleVisible=function(){t.state.listVisible||t.setState({listVisible:!t.state.listVisible})},t.handleChange=function(e){t.setState(s({},t.state,e),t.searchResult)},t.searchResult=function(){var e=t.props,n=e.data,r=e.filterKey,o=null,i=t.state.keyword.trim().length?Object.keys(n).reduce(function(e,i){return n[i][r].toUpperCase().indexOf(t.state.keyword.trim().toUpperCase())>-1&&(e[i]=n[i],o=0),e},{}):t.props.data;t.setState({result:i,keyboardSelect:o})},t.setIndex=function(e){return function(n){t.setState({keyboardSelect:e})}},t.indexSelected=function(e){if(40!==e.keyCode&&38!==e.keyCode&&13!==e.keyCode)return!1;e.preventDefault();var n=(t.props.keys,t.state),r=n.result,o=n.keyboardSelect;if(13===e.keyCode&&null!==o&&o>-1&&Object.keys(r).length){var i=Object.keys(r)[o];t.setValue(i)}else{var a=Object.keys(r).length-1,l=null!==o?Number(o):-1,s=40===e.keyCode?l<a?l+=1:a:l>0?l-=1:0,u=t.resultList.clientHeight;if(u){var c=t.resultList.currentStyle||window.getComputedStyle(t.resultList),f=parseFloat(c.paddingTop)+parseFloat(c.paddingBottom),p=u-f,d=t.resultContent.clientHeight,h=!!(d>p);if(h){var m=t.resultItem.clientHeight;t.resultList.scrollTop=m*l}}t.setState({keyboardSelect:s})}},t.setValue=t.setValue.bind(t),t.state={listVisible:!1,keyword:"",result:{},keyboardSelect:null},t}return l(n,t),u(n,[{key:"componentWillMount",value:function(){this.searchResult()}},{key:"componentDidMount",value:function(){var e=this;this.props.autoFocus&&setTimeout(function(){e.input.focus()},300)}},{key:"componentWillReceiveProps",value:function(e){JSON.stringify(this.props.data)!==JSON.stringify(e.data)&&this.setState({result:e.data})}},{key:"setValue",value:function e(t){var n=this,r=this.props,o=r.data,e=r.setValue,i=r.filterKey,a=r.keys,l=this.state.result,s=a?l[t][a]:t;this.setState({keyword:e?o[t][i]:"",listVisible:!1},function(){n.searchResult(),n.props.onChange(s)})}},{key:"render",value:function(){var t=this,n=this.props,r=n.className,i=n.filterKey,a=n.placeholder,l=n.emptyText,s=this.state.result;return f.default.createElement("div",{className:e("rj_autocompleteContent",o({},r,"undefined"!=typeof r))},f.default.createElement("div",{className:"fl_center fw-900"},f.default.createElement("span",null,"⚲")),f.default.createElement("input",{onClick:this.toggleVisible,ref:function(e){t.input=e},autofocus:"autofocus",type:"text",value:this.state.keyword,onChange:function(e){return t.handleChange({keyword:e.target.value,listVisible:!!e.target.value.length})},onKeyDown:this.indexSelected,className:"rj_autocomplete",placeholder:a}),f.default.createElement("hr",null),f.default.createElement("hr",{className:"focus-border"}),f.default.createElement("div",{className:e("overlayCancel",{hidden:!this.state.listVisible}),onClick:function(){t.setState({listVisible:!1})}}),f.default.createElement("div",{ref:function(e){t.resultList=e},className:e("rj_list",{rj_list_hidden:!this.state.listVisible})},f.default.createElement("ul",{ref:function(e){t.resultContent=e}},Object.keys(s).length?Object.keys(s).map(function(n,r){return f.default.createElement("li",{key:"auto_"+n,ref:function(e){t.resultItem=e},className:e("result",{active:t.state.keyboardSelect===r}),onClick:function(){return t.setValue(n)},onMouseOver:t.setIndex(r)},s[n][i])}):f.default.createElement("li",null,l))))}}]),n}(c.Component);p.defaultProps={emptyText:"查無結果",placeholder:"請搜尋想找的項目",filterKey:"name",autoFocus:!1,setValue:!0,keys:null,data:o({test1:{name:"apple",fruit:"蘋果"},test2:{name:"banana",fruit:"香蕉"},test3:{name:"orange",fruit:"橘子"},test4:{name:"tomato",fruit:"番茄"},test5:{name:"strawberry",fruit:"草莓"},test6:{name:"wax apple",fruit:"蓮霧"},test7:{name:"blueberry",fruit:"藍莓"}},"test7",{name:"mango",fruit:"芒果"}),onChange:function(e){}},t.default=p}).call(t,n(14))},,function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.id,r,""]]);n(18)(r,{insertAt:"top",singleton:!1});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(17)(),t.push([e.id,".rj_autocompleteContent{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.rj_autocompleteContent input:focus{z-index:1001;outline:none}.rj_autocompleteContent input:focus+hr+hr.focus-border{-webkit-transform:scale(1);transform:scale(1)}.rj_autocompleteContent hr{position:absolute;width:100%;top:30px;left:0;border-top:1px solid #eee;transition:all .65s cubic-bezier(.23,1,.32,1)}.rj_autocompleteContent hr.focus-border{border-top:2px solid #1ea3aa;-webkit-transform:scale(0);transform:scale(0)}.rj_autocompleteContent .fl_center{-ms-flex-item-align:center;align-self:center;font-size:18px;width:30px}.rj_autocompleteContent .fl_center span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;text-align:center}.rj_autocompleteContent .rj_autocomplete{position:relative;z-index:1;font-size:18px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;border:none;padding:5px 0;font-weight:200;letter-spacing:1px;color:#666;cursor:pointer}.rj_autocompleteContent .rj_list{position:absolute;top:100%;z-index:1002;left:0;width:100%;padding:10px;background-color:#fff;box-shadow:2px 2px 10px #ccc;max-height:300px;overflow:scroll;opacity:1;visibility:visible;-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0);will-change:transform;transition:all .2s ease-out}.rj_autocompleteContent .rj_list.rj_list_hidden{-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0);opacity:0;visibility:hidden}.rj_autocompleteContent .rj_list ul{margin:0;padding:0}.rj_autocompleteContent .rj_list li{list-style:none;padding-left:10px;font-size:14px;color:#666;line-height:50px}.rj_autocompleteContent .rj_list li.result{cursor:pointer}.rj_autocompleteContent .rj_list li.result.active{background-color:#1ea3aa;color:#fff}.rj_autocompleteContent .overlayCancel{position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%}.hidden{display:none}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],l=o[2],s=o[3],u={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=v++;n=y||(y=l(t)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=d[l.id];s.refs--,i.push(s)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);
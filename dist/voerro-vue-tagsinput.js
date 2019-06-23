!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={props:{elementId:String,existingTags:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},typeahead:{type:Boolean,default:!1},typeaheadStyle:{type:String,default:"badges"},typeaheadActivationThreshold:{type:Number,default:1},typeaheadMaxResults:{type:Number,default:0},placeholder:{type:String,default:"Add a tag"},limit:{type:Number,default:0},onlyExistingTags:{type:Boolean,default:!1},deleteOnBackspace:{type:Boolean,default:!0},allowDuplicates:{type:Boolean,default:!1},validate:{type:Function,default:function(){return!0}},addTagsOnComma:{type:Boolean,default:!1},addTagsOnBlur:{type:Boolean,default:!1},wrapperClass:{type:String,default:"tags-input-wrapper-default"},sortSearchResults:{type:Boolean,default:!0}},data:function(){return{badgeId:0,tags:[],input:"",oldInput:"",hiddenInput:"",searchResults:[],searchSelection:0,selectedTag:-1}},created:function(){this.tagsFromValue(),this.$emit("initialized")},watch:{tags:function(){this.hiddenInput=this.tags.join(","),this.$emit("input",this.tags)},value:function(){this.tagsFromValue()}},methods:{escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},tagFromInput:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.searchResults.length&&this.searchSelection>=0&&!e)this.tagFromSearch(this.searchResults[this.searchSelection]),this.input="";else{var t=this.input.trim();if(!this.onlyExistingTags&&t.length&&this.validate(t)){this.input="";var n={key:"",value:t},a=!0,r=!1,i=void 0;try{for(var s,o=this.existingTags[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var u=s.value;if(n.value.toLowerCase()==u.value.toLowerCase()){n=Object.assign({},u);break}}}catch(e){r=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}this.addTag(n)}}},tagFromSearchOnClick:function(e){this.tagFromSearch(e),this.$refs.taginput.blur()},tagFromSearch:function(e){this.clearSearchResults(),this.input="",this.oldInput="",this.addTag(e)},addTag:function(e){if(this.limit>0&&this.tags.length>=this.limit)return!1;this.tagSelected(e)||this.tags.push(e),this.$emit("tag-added",e),this.$emit("tags-updated")},removeLastTag:function(){!this.input.length&&this.deleteOnBackspace&&this.removeTag(this.tags.length-1)},removeTag:function(e){var t=this.tags[e];this.tags.splice(e,1),this.$emit("tag-removed",t),this.$emit("tags-updated")},searchTag:function(){if(!0!==this.typeahead)return!1;if(this.oldInput!=this.input||!this.searchResults.length&&0==this.typeaheadActivationThreshold){this.searchResults=[],this.searchSelection=0;var e=this.input.trim();if(e.length&&e.length>=this.typeaheadActivationThreshold||0==this.typeaheadActivationThreshold){var t=!0,n=!1,a=void 0;try{for(var r,i=this.existingTags[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value,o=this.escapeRegExp(e.toLowerCase());s.value.toLowerCase().search(o)>-1&&!this.tagSelected(s)&&this.searchResults.push(s)}}catch(e){n=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}this.sortSearchResults&&this.searchResults.sort(function(e,t){return e.value<t.value?-1:e.value>t.value?1:0}),this.typeaheadMaxResults>0&&(this.searchResults=this.searchResults.slice(0,this.typeaheadMaxResults))}this.oldInput=this.input}},hideTypeahead:function(){var e=this;this.input.length||this.$nextTick(function(){e.clearSearchResults()})},nextSearchResult:function(){this.searchSelection+1<=this.searchResults.length-1&&this.searchSelection++},prevSearchResult:function(){this.searchSelection>0&&this.searchSelection--},clearSearchResults:function(){this.searchResults=[],this.searchSelection=0},clearTags:function(){this.tags.splice(0,this.tags.length)},tagsFromValue:function(){if(this.value&&this.value.length){if(!Array.isArray(this.value))return void console.error("Voerro Tags Input: the v-model value must be an array!");var e=this.value;if(this.tags==e)return;this.clearTags();var t=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;this.addTag(s)}}catch(e){n=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}}else{if(0==this.tags.length)return;this.clearTags()}},tagSelected:function(e){if(this.allowDuplicates)return!1;if(!e)return!1;var t=e.value.toLowerCase(),n=!0,a=!1,r=void 0;try{for(var i,s=this.tags[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;if(o.key==e.key&&o.value.toLowerCase()==t)return!0}}catch(e){a=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw r}}return!1},onKeyUp:function(e){this.$emit("keyup",e),this.searchTag()},onKeyDown:function(e){this.$emit("keydown",e),","==e.key&&this.addTagsOnComma&&(e.preventDefault(),this.tagFromInput(!0))},onFocus:function(e){this.$emit("focus",e),this.searchTag()},onBlur:function(e){this.$emit("blur",e),this.addTagsOnBlur&&this.tagFromInput(!0),this.hideTypeahead()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);window.VoerroTagsInput=a.a,t.default=a.a},function(e,t,n){"use strict";function a(e){n(3)}var r=n(0),i=n(9),s=n(8),o=a,u=s(r.a,i.a,!1,o,null,null);t.a=u.exports},function(e,t,n){var a=n(4);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(6)("bd105288",a,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".tags-input-root{position:relative}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=a(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=c[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(i(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",h.appendChild(e),e}function i(e){var t,n,a=document.querySelector("style["+y+'~="'+e.id+'"]');if(a){if(f)return g;a.parentNode.removeChild(a)}if(m){var i=p++;a=d||(d=r()),t=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=r(),t=o.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function s(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=S(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function o(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),v.ssrId&&e.setAttribute(y,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},h=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,g=function(){},v=null,y="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){f=n,v=r||{};var i=l(e,t);return a(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r],o=c[s.id];o.refs--,n.push(o)}t?(i=l(e,t),a(i)):i=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete c[o.id]}}}};var S=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],s=i[0],o=i[1],u=i[2],l=i[3],c={id:e+":"+r,css:o,media:u,sourceMap:l};a[s]?a[s].parts.push(c):n.push(a[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,a,r,i){var s,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=a),c){var h=l.functional,d=h?l.render:l.beforeCreate;h?(l._injectStyles=c,l.render=function(e,t){return c.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:o,options:l}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tags-input-root"},[n("div",{class:e.wrapperClass+" tags-input"},[e._l(e.tags,function(t,a){return n("span",{key:a,staticClass:"tags-input-badge tags-input-badge-pill tags-input-badge-selected-default"},[n("span",{domProps:{innerHTML:e._s(t.value)}}),e._v(" "),n("i",{staticClass:"tags-input-remove",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.removeTag(a)}}})])}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],ref:"taginput",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.input},on:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.preventDefault(),e.tagFromInput(!1)},function(t){if(!("button"in t)&&8!==t.keyCode)return null;e.removeLastTag(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;e.nextSearchResult(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;e.prevSearchResult(t)},e.onKeyDown],keyup:[e.onKeyUp,function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.clearSearchResults(t)}],focus:e.onFocus,blur:e.onBlur,value:e.tags,input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),e.elementId?n("input",{directives:[{name:"model",rawName:"v-model",value:e.hiddenInput,expression:"hiddenInput"}],attrs:{type:"hidden",name:e.elementId,id:e.elementId},domProps:{value:e.hiddenInput},on:{input:function(t){t.target.composing||(e.hiddenInput=t.target.value)}}}):e._e()],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searchResults.length,expression:"searchResults.length"}]},["badges"===e.typeaheadStyle?n("p",{class:"typeahead-"+e.typeaheadStyle},e._l(e.searchResults,function(t,a){return n("span",{key:a,staticClass:"tags-input-badge",class:{"tags-input-typeahead-item-default":a!=e.searchSelection,"tags-input-typeahead-item-highlighted-default":a==e.searchSelection},domProps:{innerHTML:e._s(t.value)},on:{mouseover:function(t){e.searchSelection=a},mousedown:function(n){n.preventDefault(),e.tagFromSearchOnClick(t)}}})})):"dropdown"===e.typeaheadStyle?n("ul",{class:"typeahead-"+e.typeaheadStyle},e._l(e.searchResults,function(t,a){return n("li",{key:a,class:{"tags-input-typeahead-item-default":a!=e.searchSelection,"tags-input-typeahead-item-highlighted-default":a==e.searchSelection},domProps:{innerHTML:e._s(t.text)},on:{mouseover:function(t){e.searchSelection=a},mousedown:function(n){n.preventDefault(),e.tagFromSearchOnClick(t)}}})})):e._e()])])},r=[],i={render:a,staticRenderFns:r};t.a=i}]);
//# sourceMappingURL=voerro-vue-tagsinput.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"113":function(A,e,t){"use strict";t.r(e);var r=t(1),n=t(19),o=t(105),a=t(112),i=t(0),c=void 0,s=void 0,u=function pageScrollTo(A){var e=A.scrollTop,t=A.duration,r=void 0===t?300:t,n=A.success,o=A.fail,a=A.complete;return new Promise(function(A,t){try{if(void 0===e)throw Error('"scrollTop" is required');var u=document.querySelector(".taro-tabbar__panel")||window;c||(c=u===window?function scrollFunc(A){if(void 0===A)return window.pageYOffset;window.scrollTo(0,A)}:function scrollFunc(A){if(void 0===A)return u.scrollTop;u.scrollTop=A});var l=c(),f=e-l,p=r/17,m=Object(i.f)(i.c,p);!function scroll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=l+f*m(e);if(c(t),e<p)s&&clearTimeout(s),s=setTimeout(function(){scroll(e+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};n&&n(r),a&&a(),A(r)}}()}catch(A){var h={"errMsg":"pageScrollTo:fail "+A.message};o&&o(h),a&&a(),t(h)}})},l=t(20);var f=t(106),p=t(109),m=t(2),h=t(102),d=t(107),g=t(108),b=t(28),y=t(29),v=t(37);t(92);t.d(e,"default",function(){return B});var w=function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}(),E=function get(A,e,t){null===A&&(A=Function.prototype);var r=Object.getOwnPropertyDescriptor(A,e);if(void 0===r){var n=Object.getPrototypeOf(A);return null===n?void 0:get(n,e,t)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(t):void 0};function _asyncToGenerator(A){return function(){var e=A.apply(this,arguments);return new Promise(function(A,t){return function step(r,n){try{var o=e[r](n),a=o.value}catch(A){return void t(A)}if(!o.done)return Promise.resolve(a).then(function(A){step("next",A)},function(A){step("throw",A)});A(a)}("next")})}}var B=function(A){function Index(A){var e=this;!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Index);var t=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(Index.__proto__||Object.getPrototypeOf(Index)).call(this,A));return t.config={"navigationBarTitleText":"中国表情包","enablePullDownRefresh":!0},t.fetchImages=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var A,r,a,i,c;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return A=t.$router.params.name,(r=Object(n.c)(A))&&(t.images=Object(b.a)(r),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0)),a=Object(b.c)("加载中",!!r),e.next=6,Object(o.a)({"url":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/source/_posts/"+A+".md","dataType":"text","responseType":"text"});case 6:i=e.sent,c=i.data,Object(n.d)({"key":A,"data":c}),t.images=Object(b.a)(c),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0),a();case 13:case"end":return e.stop()}},_callee,e)})),t.showMoreImages=function(A){var e=t.state,r=e.images,n=e.urls,o=t.images.splice(0,20),a=t.urls.splice(0,20);A?t.setState({"images":o,"urls":a,"isLoad":o.length<=20}):t.setState({"images":r.concat(o),"urls":n.concat(a)})},t.handlePreview=function(A){Object(a.a)({"urls":t.state.urls,"current":A})},t.randomImages=function(){var A=t.images.concat(t.state.images);t.images=A.sort(function(){return Math.random()>.5?-1:1}),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0),u({"scrollTop":0}),Object(l.d)({"title":"表情包已随机排序","icon":"none"})},t.state={"images":[],"urls":[],"isLoad":!1},t}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(Index,m["a"].Component),w(Index,[{"key":"componentDidMount","value":function componentDidMount(){var A=this.$router.params.title;A&&function setNavigationBarTitle(A){var e=Object(i.k)(A);if(!e.res){var t={"errMsg":"setNavigationBarTitle"+e.msg};return console.error(t.errMsg),Promise.reject(t)}var r=A.title,n=A.success,o=A.fail,a=A.complete,c={"errMsg":"setNavigationBarTitle:ok"};return r&&"string"==typeof r?(document.title!==r&&(document.title=r),"function"==typeof n&&n(c),"function"==typeof a&&a(c),Promise.resolve(c)):(c.errMsg=Object(i.e)({"name":"setNavigationBarTitle","para":"title","correct":"String","wrong":r}),console.error(c.errMsg),"function"==typeof o&&o(c),"function"==typeof a&&a(c),Promise.reject(c))}({"title":decodeURIComponent(A)}),this.fetchImages()}},{"key":"onPullDownRefresh","value":function(){var A=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.fetchImages();case 2:Object(f.a)();case 3:case"end":return A.stop()}},_callee2,this)}));return function onPullDownRefresh(){return A.apply(this,arguments)}}()},{"key":"onReachBottom","value":function onReachBottom(){this.images.length&&this.showMoreImages()}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":this.$router.params.title}}},{"key":"render","value":function render(){var A=this,e=this.state,t=e.images,n=void 0===t?[]:t,o=e.isLoad;if(!n.length){var a=o?r.k.createElement(v.a,null):r.k.createElement(h.a,null);return r.k.createElement(d.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},a)}var i=r.k.createElement(h.a,{"className":"list"},n.map(function(e){return r.k.createElement(y.a,{"key":e.src,"src":e.src,"name":e.name,"onClick":function onClick(){return A.handlePreview(e.src)}})}),r.k.createElement(g.a,{"className":"flat-btn random-btn","onClick":function onClick(){return A.randomImages()}},"≈"));return r.k.createElement(d.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},i)}},{"key":"componentDidShow","value":function componentDidShow(){E(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&E(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this),this._offReachBottom=Object(p.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0}),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){E(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&E(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom(),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Index}()},"28":function(A,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"b",function(){return a}),t.d(e,"a",function(){return i});var r=t(20),n=function getImageSrc(A,e){return"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/"+A+"/"+e},o=function smartLoading(A,e){return Object(r.b)({"title":A}),r.a},a=function parseTypes(A){var e=A&&A.match(/\|.*已收录.*\|/g);if(!e)return[];var t=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return e.map(function(A){var e=A.match(t);if(!e)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var r=e[1],o=r.replace(/^(\w)*/,"").replace(/BQB$/,""),a=e[2],i=Number(e[3]);return{"name":o,"link":"/pages/list/index?name="+r+"&title="+o,"imgSrc":n(r,a),"imgNum":i}}).filter(function(A){return!!A.imgNum}).sort(function(A,e){return e.imgNum-A.imgNum})},i=function parseImages(A){var e=A&&A.match(/\[.*?\]/g);if(!e)return[];var t=/.*master\/(.*)\/(.*)\]/;return e.map(function(A){var e=A.match(t);if(!e)return{"src":"","name":"未命名"};var r=e[1],o=e[2];return{"src":n(r,o),"name":o.replace(/\..*$/,"")}}).filter(function(A){return!!A.src})}},"29":function(A,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(1),n=t(2),o=t(102),a=t(103),i=t(104),c=t(30),s=t.n(c),u=(t(31),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var l=function(A){function BQBItem(){!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,BQBItem);var A=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(BQBItem.__proto__||Object.getPrototypeOf(BQBItem)).apply(this,arguments));return A.handleImageLoad=function(){A.setState({"isLoad":!0})},A.handleIamgeError=function(){A.setState({"isError":!0})},A}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(BQBItem,n["a"].Component),u(BQBItem,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(A){A.src!==this.props.src&&this.setState({"isLoad":!1,"isError":!1})}},{"key":"render","value":function render(){var A=this,e=this.props,t=e.num,n=e.src,c=e.name,u=e.onClick,l=this.state,f=l.isLoad,p=l.isError;return r.k.createElement(o.a,{"className":"bqb-item bqb-custom-class","onClick":u},r.k.createElement(a.a,{"className":"bqb-image "+(f?"":"hide"),"mode":"aspectFill","lazyLoad":!0,"src":p?s.a:n,"onLoad":function onLoad(){return A.handleImageLoad()},"onError":function onError(){return A.handleIamgeError()}}),f?null:r.k.createElement(o.a,{"className":"bqb-image bqb-loading"}),t&&r.k.createElement(i.a,{"className":"bqb-num"},t,"张"),r.k.createElement(i.a,{"className":"bqb-name"},c))}}]),BQBItem}();l.defaultProps={"onClick":function onClick(){}},l.externalClasses=["bqb-custom-class"]},"30":function(A,e){A.exports="data:image/jpeg;base64,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"},"31":function(A,e,t){},"37":function(A,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(1),n=t(2),o=t(104),a=(t(38),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var i=function(A){function ErrTips(){return function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ErrTips),function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(ErrTips.__proto__||Object.getPrototypeOf(ErrTips)).apply(this,arguments))}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(ErrTips,n["a"].Component),a(ErrTips,[{"key":"render","value":function render(){var A=this.props.text;return r.k.createElement(o.a,{"className":"err-tips"},A)}}]),ErrTips}();i.defaultProps={"text":"数据加载或解析失败，\n请稍后重试或等待版本更新"}},"38":function(A,e,t){},"92":function(A,e,t){}}]);
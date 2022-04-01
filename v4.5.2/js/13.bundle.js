(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1084:function(t,o,e){var r=e(61),n=e(1085);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);t.exports=n.locals||{}},1085:function(t,o,e){(o=e(54)(!1)).push([t.i,".text-label{display:inline-block}.text-label>.custom-label-value{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-weight:500}\n",""]),t.exports=o},1086:function(t,o){t.exports="<hr> <p>title: Text Label componentid: component-textlabel variantid: default guid: &quot;textlabel-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Text Label Component\nComponent: &quot;TextLabel&quot;\nSelector: &quot;&lt;TextLabel/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/TextLabel&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>TextLabel</code> and the selector is <code>&lt;TextLabel/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;TextLabel name=&quot;textname&quot; value=&quot;Some text value&quot; label=&quot;Some text label&quot; /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class can be passed here</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>Element label</td> </tr> <tr> <td>name?</td> <td><code>string</code></td> <td>element name</td> </tr> <tr> <td>value</td> <td><code>string</code></td> <td>The current value</td> </tr> </tbody></table> "},196:function(t,o,e){"use strict";e.r(o);var r=e(0),n=(e(1084),r.memo((function(t){return r.createElement("div",{className:"text-label"+(t.className?" "+t.className:""),id:t.id},t.label&&r.createElement("label",{className:"custom-label"},t.label),r.createElement("div",{className:"custom-label-value"},t.value))}))),i=e(650),a=e(450),l=e.n(a),s=e(1086);o.default=function(){return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(l.a,{innerHTML:!0},s))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here is the basic bootstrap one:"),r.createElement("div",{className:"result"},r.createElement(n,{value:"400,000 kr",label:"Current savings"})),r.createElement("p",null,"An example with passing ReactNode as the value (tooltip):"),r.createElement("div",{className:"result"},r.createElement(n,{value:r.createElement(r.Fragment,null,"400,000 kr",r.createElement(i.a,{className:"ml-1",position:"top-right"})),label:"Current savings"})))))}},646:function(t,o,e){var r=e(61),n=e(647);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);t.exports=n.locals||{}},647:function(t,o,e){(o=e(54)(!1)).push([t.i,'.tooltip-container{position:relative}.tooltip-container .tooltip-reference{position:relative;margin:auto;display:inline-block;z-index:0}.tooltip-container .tooltip-reference .default-content{height:25px;width:25px}.tooltip-container .tooltip-reference .default-content svg{width:100%;height:100%;pointer-events:none;vertical-align:top}.tooltip-container .tooltip-reference.cursor-pointer{cursor:pointer}.overlay-container .tooltip{position:relative}.overlay-container .tooltip>.tooltip-arrow{position:absolute;display:block;width:13px;overflow:hidden;background:transparent;pointer-events:none;height:0;opacity:0}.overlay-container .tooltip>.tooltip-arrow::before{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:15px;height:15px;margin:auto;content:"";pointer-events:auto}.overlay-container .tooltip>.tooltip-inner{padding:8px 10px;position:relative;max-width:300px;max-height:500px;overflow:auto;height:0;opacity:0}.overlay-container .tooltip>.tooltip-inner>.message-container{min-width:120px;padding:5px 10px 10px;text-align:center}.overlay-container .tooltip>.tooltip-inner>.message-container .title{font-weight:bold;margin-bottom:5px}.overlay-container .tooltip>.tooltip-inner>.message-container .message-list-item:not(:first-child){margin-top:10px}.overlay-container .tooltip>.tooltip-inner>.message-container .message{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.overlay-container .tooltip.default .tooltip-inner{background-color:#000;color:#fff}.overlay-container .tooltip.default .tooltip-arrow:before{background-color:#000}.overlay-container .tooltip.default .tooltip-arrow:after{border-color:transparent transparent #000 #000}.overlay-container .tooltip.light .tooltip-inner{background-color:#e9e9e9;color:#000}.overlay-container .tooltip.light .tooltip-arrow:before{background-color:#e9e9e9}.overlay-container .tooltip.light .tooltip-arrow:after{border-color:transparent transparent #e9e9e9 #e9e9e9}.overlay-container .tooltip.danger .tooltip-inner{background-color:#F03529;color:#fff}.overlay-container .tooltip.danger .tooltip-arrow:before{background-color:#F03529}.overlay-container .tooltip.danger .tooltip-arrow:after{border-color:transparent transparent #F03529 #F03529}.overlay-container .tooltip.warning .tooltip-inner{background-color:#FFC500;color:#fff}.overlay-container .tooltip.warning .tooltip-arrow:before{background-color:#FFC500}.overlay-container .tooltip.warning .tooltip-arrow:after{border-color:transparent transparent #FFC500 #FFC500}.overlay-container .tooltip.success .tooltip-inner{background-color:#60cd18;color:#fff}.overlay-container .tooltip.success .tooltip-arrow:before{background-color:#60cd18}.overlay-container .tooltip.success .tooltip-arrow:after{border-color:transparent transparent #60cd18 #60cd18}.overlay-container .tooltip.primary .tooltip-inner{background-color:#41B0EE;color:#fff}.overlay-container .tooltip.primary .tooltip-arrow:before{background-color:#41B0EE}.overlay-container .tooltip.primary .tooltip-arrow:after{border-color:transparent transparent #41B0EE #41B0EE}.overlay-container .tooltip.purple .tooltip-inner{background-color:#673AB6;color:#fff}.overlay-container .tooltip.purple .tooltip-arrow:before{background-color:#673AB6}.overlay-container .tooltip.purple .tooltip-arrow:after{border-color:transparent transparent #673AB6 #673AB6}.overlay-container .tooltip.show{opacity:1}.overlay-container.left>.tooltip>.tooltip-arrow,.overlay-container.right>.tooltip>.tooltip-arrow{top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.overlay-container.left-bottom>.tooltip>.tooltip-arrow,.overlay-container.right-bottom>.tooltip>.tooltip-arrow{bottom:5px}.overlay-container.left-top>.tooltip>.tooltip-arrow,.overlay-container.right-top>.tooltip>.tooltip-arrow{top:5px}.overlay-container.top>.tooltip>.tooltip-arrow,.overlay-container.bottom>.tooltip>.tooltip-arrow{left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.overlay-container.top-left>.tooltip>.tooltip-arrow,.overlay-container.bottom-left>.tooltip>.tooltip-arrow{left:5px}.overlay-container.top-right>.tooltip>.tooltip-arrow,.overlay-container.bottom-right>.tooltip>.tooltip-arrow{right:5px}.overlay-container.top,.overlay-container.top-left,.overlay-container.top-right{padding-bottom:4px}.overlay-container.top>.tooltip>.tooltip-arrow,.overlay-container.top-left>.tooltip>.tooltip-arrow,.overlay-container.top-right>.tooltip>.tooltip-arrow{bottom:-8px}.overlay-container.top>.tooltip>.tooltip-arrow::before,.overlay-container.top-left>.tooltip>.tooltip-arrow::before,.overlay-container.top-right>.tooltip>.tooltip-arrow::before{-webkit-transform:translateY(-6.53553px) rotate(45deg);-moz-transform:translateY(-6.53553px) rotate(45deg);-ms-transform:translateY(-6.53553px) rotate(45deg);-o-transform:translateY(-6.53553px) rotate(45deg);transform:translateY(-6.53553px) rotate(45deg)}.overlay-container.right,.overlay-container.right-top,.overlay-container.right-bottom{padding-left:4px}.overlay-container.right>.tooltip>.tooltip-arrow,.overlay-container.right-top>.tooltip>.tooltip-arrow,.overlay-container.right-bottom>.tooltip>.tooltip-arrow{left:-8px}.overlay-container.right>.tooltip>.tooltip-arrow::before,.overlay-container.right-top>.tooltip>.tooltip-arrow::before,.overlay-container.right-bottom>.tooltip>.tooltip-arrow::before{-webkit-transform:translateX(6.53553px) rotate(45deg);-moz-transform:translateX(6.53553px) rotate(45deg);-ms-transform:translateX(6.53553px) rotate(45deg);-o-transform:translateX(6.53553px) rotate(45deg);transform:translateX(6.53553px) rotate(45deg)}.overlay-container.bottom,.overlay-container.bottom-left,.overlay-container.bottom-right{padding-top:4px}.overlay-container.bottom>.tooltip>.tooltip-arrow,.overlay-container.bottom-left>.tooltip>.tooltip-arrow,.overlay-container.bottom-right>.tooltip>.tooltip-arrow{top:-8px}.overlay-container.bottom>.tooltip>.tooltip-arrow::before,.overlay-container.bottom-left>.tooltip>.tooltip-arrow::before,.overlay-container.bottom-right>.tooltip>.tooltip-arrow::before{-webkit-transform:translateY(6.53553px) rotate(45deg);-moz-transform:translateY(6.53553px) rotate(45deg);-ms-transform:translateY(6.53553px) rotate(45deg);-o-transform:translateY(6.53553px) rotate(45deg);transform:translateY(6.53553px) rotate(45deg)}.overlay-container.left,.overlay-container.left-top,.overlay-container.left-bottom{padding-right:4px}.overlay-container.left>.tooltip>.tooltip-arrow,.overlay-container.left-top>.tooltip>.tooltip-arrow,.overlay-container.left-bottom>.tooltip>.tooltip-arrow{right:-8px}.overlay-container.left>.tooltip>.tooltip-arrow::before,.overlay-container.left-top>.tooltip>.tooltip-arrow::before,.overlay-container.left-bottom>.tooltip>.tooltip-arrow::before{-webkit-transform:translateX(-6.53553px) rotate(45deg);-moz-transform:translateX(-6.53553px) rotate(45deg);-ms-transform:translateX(-6.53553px) rotate(45deg);-o-transform:translateX(-6.53553px) rotate(45deg);transform:translateX(-6.53553px) rotate(45deg)}.overlay-container.show>.tooltip>.tooltip-arrow{height:13px;opacity:1}.overlay-container.show>.tooltip>.tooltip-inner{height:auto;opacity:1}\n',""]),t.exports=o},648:function(t,o,e){var r=e(61),n=e(649);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);t.exports=n.locals||{}},649:function(t,o,e){(o=e(54)(!1)).push([t.i,".overlay-container{position:absolute;outline:none;z-index:1070;height:0;opacity:0;-webkit-transition:height 0ms, opacity 150ms ease-in-out;-o-transition:height 0ms, opacity 150ms ease-in-out;-moz-transition:height 0ms, opacity 150ms ease-in-out;transition:height 0ms, opacity 150ms ease-in-out}.overlay-container.show{height:auto;opacity:1}\n",""]),t.exports=o},650:function(t,o,e){"use strict";e.d(o,"a",(function(){return d}));var r=e(62),n=e(0),i=e.n(n),a=(e(646),e(114)),l=e(115),s={top:{x:"horizontal-center",y:"top"},right:{x:"right",y:"vertical-center"},bottom:{x:"horizontal-center",y:"bottom"},left:{x:"left",y:"vertical-center"},"top-left":{x:"side-left",y:"top"},"top-right":{x:"side-right",y:"top"},"bottom-left":{x:"side-left",y:"bottom"},"bottom-right":{x:"side-right",y:"bottom"},"left-top":{x:"left",y:"side-top"},"left-bottom":{x:"left",y:"side-bottom"},"right-top":{x:"right",y:"side-top"},"right-bottom":{x:"right",y:"side-bottom"}},c=function(){function t(t,o){this.defaultPositionsList=["top","left","right","bottom","bottom-left","bottom-right","left-bottom","left-top","right-bottom","right-top","top-left","top-right"],this.referenceElement=t,this.disableAutoPosition=o}return t.prototype.addOverlayContainer=function(t){t&&(this.overlayElement=t)},t.prototype.disableAutoPlacement=function(t){this.disableAutoPosition=t},t.prototype.getPosition=function(t){return Object(r.b)(this,void 0,void 0,(function(){var o=this;return Object(r.d)(this,(function(e){return[2,new Promise((function(e){o.disableAutoPosition?(o.getOverlayPositionCoord(t),o.currentPlacementWithCoord=o.getPlacement(t)):o.currentPlacementWithCoord=o.setPositionWithinViewport(t),e(o.currentPlacementWithCoord)}))]}))}))},t.prototype.setPositionWithinViewport=function(t){var o=this;if(this.isElementOverflow(t)){var e=Object(r.f)(this.defaultPositionsList);e.splice(e.indexOf(t),1);var n=null;return e.some((function(t){if(!o.isElementOverflow(t))return n=o.getPlacement(t),!0})),n}return this.getOverlayPositionCoord(t),this.getPlacement(t)},t.prototype.getNewStyle=function(){return this.currentPosition?{left:this.currentPosition.left+"px",top:this.currentPosition.top+"px"}:null},t.prototype.getOverlayPositionCoord=function(t){var o=this.overlayElement.getBoundingClientRect(),e=s[t];if(e){var r=this.getPointPosition(e.y),n=this.getPointPosition(e.x),i=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;this.currentPosition={top:r+a,left:n+i,bottom:r+o.height,right:n+o.width}}else this.currentPosition=null},t.prototype.getPointPosition=function(t){var o=this.referenceElement.getBoundingClientRect(),e=this.overlayElement.getBoundingClientRect(),r=0;switch(t){case"vertical-center":r=o.bottom-e.height/2-o.height/2;break;case"horizontal-center":r=o.left-e.width/2+o.width/2;break;case"side-top":r=o.bottom-o.height;break;case"side-bottom":r=o.bottom-e.height;break;case"side-left":r=o.left;break;case"side-right":r=o.right-e.width;break;case"bottom":r=o.bottom;break;case"left":r=o.left-e.width;break;case"right":r=o.right;break;default:r=o.top-e.height}return r},t.prototype.isElementOverflow=function(t){return this.getOverlayPositionCoord(t),!this.currentPosition||this.currentPosition.left<0||this.currentPosition.top<0||this.currentPosition.right>window.innerWidth||this.currentPosition.bottom>window.innerHeight},t.prototype.getPlacement=function(t){return{coord:this.getNewStyle(),position:t}},t}(),p=(e(648),i.a.forwardRef((function(t,o){var e=i.a.useRef(null),n=i.a.useState(null),a=n[0],s=n[1],p=i.a.useState(null),u=p[0],d=p[1],m=i.a.useState(!1),f=m[0],h=m[1];function g(o){var n;return Object(r.b)(this,void 0,void 0,(function(){var i,a;return Object(r.d)(this,(function(r){return i=o.target,t.show&&i.contains(t.overlayReference())&&(((a=t.overlayReference().getBoundingClientRect()).bottom<0||a.right<0||a.left>window.innerWidth||a.top>window.innerHeight)&&(null===(n=null==e?void 0:e.current)||void 0===n||n.blur()),u.getPosition(t.position||"top").then((function(t){s(t)}))),[2]}))}))}function v(o){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(r){return u.getPosition(t.position||"top").then((function(t){s(t),!o&&e.current.focus()})),[2]}))}))}return i.a.useImperativeHandle(o,(function(){return Object(r.a)(Object(r.a)({},null==o?void 0:o.current),{focus:function(){return e.current.focus()},blur:function(){return e.current.blur()}})})),i.a.useEffect((function(){u&&u.disableAutoPlacement(t.disableAutoPosition)}),[t.disableAutoPosition]),i.a.useEffect((function(){d((function(){var o=new c(t.overlayReference(),t.disableAutoPosition);return o.addOverlayContainer(e.current),o}))}),[t.overlayReference]),i.a.useEffect((function(){t.show?(v(),window.addEventListener("scroll",g,!0)):(e.current.blur(),window.removeEventListener("scroll",g,!0))}),[t.show]),i.a.useEffect((function(){u&&!f&&(v(!0),h(!0))}),[u]),Object(l.createPortal)(i.a.createElement("div",{className:"overlay-container"+(t.show?" show":"")+" "+(a?a.position:t.position||"top"),ref:e,tabIndex:-1,onBlur:t.show?t.onBlur:null,"aria-hidden":!t.show,style:a?a.coord:{}},t.children),document.body)}))),u=n.createElement("svg",{name:"info-circle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{d:"M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"})),d=function(t){function o(o){var e=t.call(this,o)||this;return e.containerRef=n.createRef(),e.contentRef=n.createRef(),e.forceShow=function(){!e.state.visible&&e.onTooltipToggle(null,!0)},e.onTooltipContentBlur=function(t){var o,r,n=t.relatedTarget||document.activeElement,i=e.containerRef.current.contains(n);e.state.visible&&!i?e.onTooltipToggle(t,!1):"focus"===e.props.trigger&&i&&(null===(r=null===(o=e.contentRef)||void 0===o?void 0:o.current)||void 0===r||r.focus())},e.onHover=function(t,o){(e.props.triggerOnHover||"hover"===e.props.trigger)&&e.onTooltipToggle(t,o)},e.onClickEvent=function(t){(!e.props.trigger&&!e.props.triggerOnHover||"click"===e.props.trigger)&&e.onTooltipToggle(t)},e.onMouseEnterEvent=function(t){return e.onHover(t,!0)},e.onMouseLeaveEvent=function(t){return e.onHover(t,!1)},e.onTouchStartEvent=function(t){return e.onHover(t,!0)},e.onTouchEndEvent=function(t){return e.onHover(t,!1)},e.onFocusEvent=function(t){return"focus"===e.props.trigger&&e.onTooltipToggle(t,!0)},e.onTooltipToggle=function(t,o){var r=void 0!==o?o:!e.state.visible;e.setState({visible:r},(function(){e.props.onVisibleChange&&e.props.onVisibleChange(t,r),e.props.onClick&&e.props.onClick(t)}))},e.state={visible:!1,referenceId:Object(a.randomId)("tooltip-ref")},e.forceDismiss=e.forceDismiss.bind(e),e}return Object(r.c)(o,t),o.prototype.componentDidUpdate=function(){(this.props.message||this.props.messageGroup||this.props.onClick||this.props.title||this.props.customSvg||this.props.triggerOnHover||this.props.width)&&console.warn("message, messageGroup, onClick, title, customSvg, triggerOnHover, and width attributes will be deprecated soon.")},o.prototype.forceDismiss=function(t){console.log("forceDismiss is deprecating. Tooltip will be hidden if it lost focus")},o.prototype.render=function(){var t=this;return n.createElement("div",{className:"tooltip-container"+(this.props.className?" "+this.props.className:""),id:this.props.id},n.createElement("div",{id:this.state.referenceId,ref:this.containerRef,className:"tooltip-reference"+("click"===this.props.trigger?" cursor":""),tabIndex:-1,onClick:this.onClickEvent,onMouseEnter:this.onMouseEnterEvent,onMouseLeave:this.onMouseLeaveEvent,onTouchStart:this.onTouchStartEvent,onTouchEnd:this.onTouchEndEvent,onFocus:this.onFocusEvent},this.props.children||n.createElement("div",{className:"default-content"},this.props.customSvg?this.props.customSvg:u)),n.createElement(m,Object(r.a)({},this.props,{ref:this.contentRef,onContentBlur:this.onTooltipContentBlur,show:this.state.visible,tooltipReference:function(){return t.containerRef.current}})))},o}(n.Component),m=n.forwardRef((function(t,o){return n.createElement(p,{ref:o,show:t.show,onBlur:t.onContentBlur,position:t.position,disableAutoPosition:t.disableAutoPosition,overlayReference:t.tooltipReference},n.createElement("div",{className:"tooltip "+(t.theme||"default")+" "+(t.show?"show":""),role:"tooltip"},n.createElement("div",{className:"tooltip-arrow"}),n.createElement("div",{className:"tooltip-inner"},t.content?t.content:t.messageGroup?n.createElement(h,Object(r.a)({},t)):n.createElement(f,Object(r.a)({},t)))))})),f=function(t){return n.createElement("div",{className:"message-container",style:{width:(t.width||120)+"px"}},t.title&&n.createElement("div",{className:"title"},t.title),n.createElement("div",{className:"message"},t.message||"Tooltip is empty. Please pass a message."))},h=function(t){return n.createElement("div",{className:"message-container",style:{width:(t.width||120)+"px"}},t.messageGroup.map((function(t,o){return n.createElement("div",{key:o,className:"message-list-item"},t.title&&n.createElement("div",{className:"title"},t.title),t.message&&n.createElement("div",{className:"message"},t.message))})))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1058:function(e,t,r){var o=r(61),s=r(1059);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);e.exports=s.locals||{}},1059:function(e,t,r){(t=r(54)(!1)).push([e.i,".custom-progress{width:100%;display:block;position:relative;text-align:center;background-color:#dedede;overflow:hidden;min-height:6px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.custom-progress .custom-progress-text{position:absolute;font-size:12px;font-weight:500;line-height:19px;text-align:center;top:0px;bottom:0;left:0;width:100%;color:black;will-change:color;-webkit-transition:color 200ms;-o-transition:color 200ms;-moz-transition:color 200ms;transition:color 200ms}.custom-progress .custom-progress-text.white{color:white}.custom-progress .custom-progress-bar{overflow:hidden;position:relative;background-color:#60cd18;min-height:6px}.custom-progress .custom-progress-bar.show-progress{height:18px}\n",""]),e.exports=t},1060:function(e,t){e.exports="<hr> <p>title: Progressbar componentid: component-progressbar variantid: default guid: &quot;progressbar-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Progress Bar Component\nComponent: &quot;ProgressBar&quot;\nSelector: &quot;&lt;ProgressBar/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/ProgressBar&quot;\nType: UI Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component supports customization and configurations. The component name is <code>ProgressBar</code> and the selector is <code>&lt;ProgressBar /&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;ProgressBar value=&quot;{this.state.progress}&quot; /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>showProgress?</td> <td><code>boolean</code></td> <td>Show progress percentage value in text</td> </tr> <tr> <td>value</td> <td><code>number</code></td> <td>The value of the progress bar</td> </tr> </tbody></table> "},191:function(e,t,r){"use strict";r.r(t);var o=r(62),s=r(0),a=(r(1058),function(e){return s.createElement("div",{className:"custom-progress"+(e.className?" "+e.className:""),id:e.id},s.createElement("div",{className:"custom-progress-bar"+(e.showProgress?" show-progress":""),style:{width:e.value+"%"}}),e.showProgress&&s.createElement("div",{className:"custom-progress-text"+(e.value>49?" white":"")},e.value+"%"))}),n=r(450),i=r.n(n),c=r(1060),l=function(e){function t(t){var r=e.call(this,t)||this;return r.state={progress:1},r}return Object(o.c)(t,e),t.prototype.simulateProgress=function(){var e=this;this.timerRef&&clearInterval(this.timerRef),this.setState({progress:0},(function(){e.timerRef=setInterval((function(){e.state.progress<100?e.setState({progress:e.state.progress+1}):clearInterval(e.timerRef)}),100)}))},t.prototype.componentDidMount=function(){this.simulateProgress()},t.prototype.componentWillUnmount=function(){this.timerRef&&clearInterval(this.timerRef)},t.prototype.render=function(){return s.createElement("div",{className:"route-template container"},s.createElement("div",{className:"info-holder"},s.createElement("div",{className:"info"},s.createElement("div",{className:"md-file"},s.createElement(i.a,{innerHTML:!0},c))),s.createElement("div",{className:"info"},s.createElement("h2",null,"Output"),s.createElement("p",null,"Here are sample outputs"),s.createElement("div",{className:"result"},s.createElement(a,{value:this.state.progress})),s.createElement("p",null,"Progress bar with percentage"),s.createElement("div",{className:"result"},s.createElement(a,{value:this.state.progress,showProgress:!0})))))},t}(s.Component);t.default=l}}]);
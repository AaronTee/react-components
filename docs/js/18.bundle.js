(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1029:function(t,e){t.exports='<hr>\n<p>title: Loader\ncomponentid: component-loader\nvariantid: default\nguid: &quot;loader-guid-default-component-react&quot;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Loader Component\nComponent: &quot;Loader&quot;\nSelector: &quot;&lt;Loader/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Loader&quot;\nType: UI Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component supports customization and configurations. The component name is <code>Loader</code> and the selector is <code>&lt;Loader/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Loader toggle=&quot;{true}&quot; /&gt;</code></pre>\n<h2 id="usage-with-button">Usage with button</h2>\n<pre><code class="language-html"> &lt;Button label=&quot;Test Label&quot; onClick={() =&gt; { alert(&#39;Button Clicked&#39;) }}&gt;\n      &lt;Loader toggle={true} fullscreen={false} /&gt;\n&lt;/Button&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Element class</td>\n</tr>\n<tr>\n<td>fullscreen?</td>\n<td><code>boolean</code></td>\n<td>Show the loader in fullscreen</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>Element id</td>\n</tr>\n<tr>\n<td>size?</td>\n<td><code>Size</code></td>\n<td>Define the size of the loader<sup>1</sup>. (default: md)</td>\n</tr>\n<tr>\n<td>toggle</td>\n<td><code>boolean</code></td>\n<td>Toggle</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li>Supported sizes: <code>lg</code> , <code>md</code>, <code>sm</code></li>\n</ol>\n'},170:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(114),a=n(447),r=n(113),i=n(444).default,d=n(1029),s=o.createElement("svg",{id:"PIKTO_REGULAR",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},o.createElement("title",null,"regular_black"),o.createElement("path",{d:"M149.1,165h-6V132.3c0-18.8-14.2-34.8-32.5-36.8l-24,15.9a3,3,0,0,1-3.3,0L59.2,95.5C41,97.7,26.9,113.6,26.9,132.3V165h-6V132.3c0-22.5,16.7-40.9,38.8-42.9a3,3,0,0,1,1.9.5L85,105.3l23.2-15.4a3,3,0,0,1,1.9-.5c21.9,1.8,39,20.7,39,42.9Z"}),o.createElement("path",{d:"M85,86.4A31.7,31.7,0,0,1,53.4,54.8V36.6a31.6,31.6,0,1,1,63.3,0V54.8A31.7,31.7,0,0,1,85,86.4Zm0-75.5A25.7,25.7,0,0,0,59.4,36.6V54.8a25.6,25.6,0,0,0,51.3,0V36.6A25.7,25.7,0,0,0,85,10.9Z"})),c=function(t){return o.createElement("svg",{className:"bd-placeholder-img img-thumbnail",width:t.width||"100%",height:t.height,xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",role:"img"},o.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),o.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",textAnchor:"middle"},t.text))};e.default=function(){var t=o.useState("Text box group with loader"),e=t[0],n=t[1];return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(i,{innerHTML:!0},d))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here is a sample tiny example"),o.createElement("div",{className:"result"},o.createElement(c,{height:100,text:"Small"}),o.createElement(l.a,{toggle:!0,size:"sm"})),o.createElement("p",null,"Here is a sample default example"),o.createElement("div",{className:"result"},o.createElement(c,{height:150,text:"Medium"}),o.createElement(l.a,{toggle:!0})),o.createElement("p",null,"Here is a sample large example"),o.createElement("div",{className:"result"},o.createElement(c,{height:200,text:"Large"}),o.createElement(l.a,{toggle:!0,size:"lg"})),o.createElement("p",null,"Here is a sample in primary button"),o.createElement("div",{className:"result"},o.createElement(a.a,{title:"Click me",label:"Primary",onClick:function(){return null},theme:"primary"},o.createElement(l.a,{toggle:!0}))),o.createElement("p",null,"Here is a sample in primary button with icon left"),o.createElement("div",{className:"result"},o.createElement(a.a,{label:"Test Label",iconPosition:"left",icon:s,onClick:function(){return null}},o.createElement(l.a,{toggle:!0}))),o.createElement("p",null,"Here is a sample in secondary with icon right"),o.createElement("div",{className:"result"},o.createElement(a.a,{label:"Test Label",iconPosition:"right",theme:"secondary",icon:s,onClick:function(){return null}},o.createElement(l.a,{toggle:!0}))),o.createElement("p",null,"Here is a sample input field"),o.createElement("div",{className:"result"},o.createElement(r.a,{name:"text-box-1",value:e,onChange:function(t){return n(t.target.value)},rightIcon:o.createElement(l.a,{toggle:!0}),disabled:!0})))))}},447:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(0),l=(n(448),o.memo((function(t){var e=o.useState("btn"),n=e[0],l=e[1];return o.useEffect((function(){var e="btn";e+=t.size?" btn-"+t.size:"",e+=" btn-"+function(){switch(t.theme){case"secondary":return"outline-primary";case"alternative":return"secondary";case"primary":case"ghost-dark":case"ghost-light":case"anchor":case"danger":return t.theme;default:return"primary"}}(),t.icon&&(e+=t.iconPosition?" icon-"+t.iconPosition:" icon-left"),e+=t.className?" "+t.className:"",l(e)}),[t.theme,t.className,t.size,t.icon,t.iconPosition,t.size]),o.createElement("button",{id:t.id,name:t.name,type:t.type||"button",disabled:t.disabled,className:n,title:t.title,onClick:t.onClick},o.createElement("div",{className:"button-content"},"left"===t.iconPosition&&t.children,o.createElement("div",{className:"button-label"},t.label),t.icon&&o.createElement("div",{className:"svg-holder"},t.icon),("right"===t.iconPosition||!t.icon)&&t.children))})))},448:function(t,e,n){var o=n(449);"string"==typeof o&&(o=[[t.i,o,""]]);var l={insert:"head",singleton:!1};n(58)(o,l);o.locals&&(t.exports=o.locals)},449:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,"button.btn{position:relative;transition:color 200ms linear, background 200ms linear;padding-top:0;padding-bottom:0}button.btn .button-content{position:relative;padding-top:0;padding-bottom:0;display:flex;justify-content:center;align-items:center}button.btn .button-content>.button-label{display:inline-flex;align-items:center}button.btn .button-content>.svg-holder{display:inline-block;width:18px;height:18px;overflow:hidden;line-height:0}button.btn .button-content>.svg-holder svg{width:100%;height:100%;transition:fill 200ms linear}button.btn:not(.btn-lg):not(.btn-sm){min-width:120px;min-height:42px}button.btn.btn-sm{min-width:75px;min-height:33px}button.btn.btn-sm>.button-content>.svg-holder{width:15px;height:15px}button.btn.btn-lg{min-width:140px;min-height:60px}button.btn.btn-lg>.button-content>.svg-holder{width:20px;height:20px}button.btn.btn-anchor:not(:disabled){background:rgba(0,0,0,0);border:0;color:#007AC7}button.btn.btn-anchor:not(:disabled)>.button-content>.svg-holder svg{fill:#007AC7}button.btn.btn-anchor:not(:disabled):hover{background:rgba(0,0,0,0);color:#0092E1;text-decoration:underline}button.btn.btn-anchor:not(:disabled):hover>.button-content>.svg-holder svg{fill:#0092E1}button.btn.btn-anchor:not(:disabled):active{color:#007AC7}button.btn.btn-anchor:not(:disabled):active,button.btn.btn-anchor:not(:disabled):focus{background:rgba(0,0,0,0);text-decoration:underline}button.btn.btn-anchor:disabled>.button-content>.svg-holder svg{fill:#adadad}button.btn.btn-primary>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-light{background-color:transparent}button.btn.btn-ghost-light:not(:disabled){color:#fff;border-color:#fff}button.btn.btn-ghost-light:not(:disabled)>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-light:not(:disabled):hover,button.btn.btn-ghost-light:not(:disabled):active{color:#343434;background-color:#fff}button.btn.btn-ghost-light:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-ghost-light:not(:disabled):active>.button-content>.svg-holder svg{fill:#343434}button.btn.btn-ghost-light:disabled{border-color:rgba(255,255,255,0.35);color:rgba(255,255,255,0.35)}button.btn.btn-ghost-light:disabled>.button-content>.svg-holder svg{fill:rgba(255,255,255,0.35)}button.btn.btn-ghost-dark{background-color:transparent}button.btn.btn-ghost-dark:not(:disabled){color:#000;border-color:#000}button.btn.btn-ghost-dark:not(:disabled)>.button-content>.svg-holder svg{fill:#000}button.btn.btn-ghost-dark:not(:disabled):hover,button.btn.btn-ghost-dark:not(:disabled):active{color:#fff;background-color:#343434}button.btn.btn-ghost-dark:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-ghost-dark:not(:disabled):active>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-dark:disabled{border-color:rgba(0,0,0,0.35);color:rgba(0,0,0,0.35)}button.btn.btn-ghost-dark:disabled>.button-content>.svg-holder svg{fill:rgba(0,0,0,0.35)}button.btn.btn-outline-primary:not(:disabled)>.button-content>.svg-holder svg,button.btn.btn-secondary:not(:disabled)>.button-content>.svg-holder svg{fill:#007AC7}button.btn.btn-outline-primary:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-secondary:not(:disabled):hover>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-outline-primary:disabled>.button-content>.svg-holder svg,button.btn.btn-secondary:disabled>.button-content>.svg-holder svg{fill:#adadad}button.btn.btn-danger:not(:disabled)>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-danger:disabled>.button-content>.svg-holder svg{fill:#fff}button.btn.icon-left>.button-content{-ms-flex-direction:row-reverse;flex-direction:row-reverse}button.btn.icon-left>.button-content>.svg-holder{margin-right:5px}button.btn.icon-right>.button-content>.svg-holder{margin-left:5px}\n",""])}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{182:function(e,t,r){"use strict";r.r(t);var a=r(0),c=(r(929),a.memo((function(e){return a.createElement("div",{className:"custom-breadcrumb"+(e.className?" "+e.className:""),id:e.id},a.createElement("nav",{"aria-label":"breadcrumb"},a.createElement("ol",{className:"breadcrumb"},e.list.map((function(t,r){return a.createElement("li",{key:r,className:"breadcrumb-item"+(r===e.list.length-1?" active":""),onClick:function(t){return function(t,r){t!==e.list.length-1&&e.onClick&&e.onClick(t,r)}(r,t)}},t)})))))}))),n=r(452),o=r.n(n),l=r(931),i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},a.createElement("title",null,"regular_black"),a.createElement("path",{d:"M149.1,165h-6V132.3c0-18.8-14.2-34.8-32.5-36.8l-24,15.9a3,3,0,0,1-3.3,0L59.2,95.5C41,97.7,26.9,113.6,26.9,132.3V165h-6V132.3c0-22.5,16.7-40.9,38.8-42.9a3,3,0,0,1,1.9.5L85,105.3l23.2-15.4a3,3,0,0,1,1.9-.5c21.9,1.8,39,20.7,39,42.9Z"}),a.createElement("path",{d:"M85,86.4A31.7,31.7,0,0,1,53.4,54.8V36.6a31.6,31.6,0,1,1,63.3,0V54.8A31.7,31.7,0,0,1,85,86.4Zm0-75.5A25.7,25.7,0,0,0,59.4,36.6V54.8a25.6,25.6,0,0,0,51.3,0V36.6A25.7,25.7,0,0,0,85,10.9Z"})),d=["First","Second","Third"],m=[i,"Details"];t.default=function(){return a.createElement("div",{className:"route-template container"},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(o.a,{innerHTML:!0},l))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs"),a.createElement("div",{className:"result"},a.createElement(c,{list:d,onClick:function(e){return alert("Should navigate to "+d[e])}})),a.createElement("p",null,"Passing icons as a breadcrumb item"),a.createElement("div",{className:"result"},a.createElement(c,{list:m,onClick:function(e){return alert("Should navigate to "+e)}})))))}},929:function(e,t,r){var a=r(61),c=r(930);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var n={insert:"head",singleton:!1},o=(a(c,n),c.locals?c.locals:{});e.exports=o},930:function(e,t,r){(t=r(54)(!1)).push([e.i,".custom-breadcrumb ol.breadcrumb li.breadcrumb-item{font-size:1rem}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active){color:#41B0EE;cursor:pointer}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active)>svg{fill:#41B0EE;width:1rem;height:1rem}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover{color:#007AC7}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover>svg{fill:#007AC7}\n",""]),e.exports=t},931:function(e,t){e.exports="<hr> <p>title: Breadcrumb componentid: component-breadcrumb variantid: default guid: &quot;breadcrumb-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Breadcrumb Component\nComponent: &quot;Breadcrumb&quot;\nSelector: &quot;&lt;Breadcrumb/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Breadcrumb&quot;\nType: UI Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>Breadcrumb</code> and the selector is <code>&lt;Breadcrumb/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Breadcrumb list=&quot;{breadcrumbListObj}&quot; onClick=&quot;{clickHandler}&quot; /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Element class</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>list</td> <td>`Array&lt;string</td> <td>React.ReactNode&gt;`</td> </tr> <tr> <td>onClick?</td> <td><code>(i: number, e?: React.MouseEvent&lt;HTMLLIElement&gt;) =&gt; void</code></td> <td>Callback triggered when a breadcrumb is clicked</td> </tr> </tbody></table> "}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{182:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o(62),n=o(114),c=(o(861),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.createElement("path",{d:"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"}))),i=function(e){var t=r.useRef(e.list.map((function(){return r.createRef()}))),o=r.useState(Array(e.list.length).fill(0)),i=o[0],s=o[1],m=r.useState(null),l=m[0],p=m[1],u=r.useState("custom-accordion"),f=u[0],g=u[1],h=r.useState("custom-accordion"),v=h[0],w=h[1],x=r.useState([]),b=x[0],E=x[1];function y(o){var r,a,n=Array(e.list.length).fill(0);n[o]=i[o]?0:null===(a=null===(r=t.current[o])||void 0===r?void 0:r.current)||void 0===a?void 0:a.scrollHeight,s(n)}function k(e){l===e||null!==l&&y(l),y(e),p(l===e?null:e)}function C(e){var t=Number(e.currentTarget.getAttribute("data-id"));if("keydown"===e.type){var o=e.key;-1!==[" ","space","enter"].indexOf(o.toLowerCase())&&(k(t),e.preventDefault())}else k(t)}return r.useEffect((function(){var t;t=[],e.list.map((function(){return t.push(Object(n.randomId)("accordion-"))})),E(t)}),[e.list]),r.useEffect((function(){return t="custom-accordion",t+=e.className?" "+e.className:"",t+=e.alternative?" alternative-accordion":"",void g(t);var t}),[e.className,e.alternative]),r.useEffect((function(){return t="accordion-item",t+=" "+(e.iconPosition?e.iconPosition:"left"),t+=" "+(e.iconRotation?e.iconRotation:"deg-180"),t+=e.customIconExpanded?" transform":"",void w(t);var t}),[e.iconPosition,e.customIconExpanded,e.iconRotation]),r.useEffect((function(){return k(e.activeIndex)}),[e.activeIndex]),r.createElement("div",{className:f,id:e.id},e.list&&e.list.map((function(o,n){return r.createElement("div",{className:v+(l===n?" active":""),key:n,tabIndex:0,"data-id":n,id:b[n],onKeyDown:C,"aria-expanded":l===n,"aria-controls":"lbl-"+b[n],role:"button"},r.createElement("div",{className:"header-wrapper"+(o.subHeaderText?" with-sub-header":""),"data-id":n,onClick:C},e.customIcon||c,e.customIconExpanded?e.customIconExpanded:null,r.createElement("h4",{className:"accordion-header"},o.header),o.subHeaderText&&r.createElement("h6",{className:"accordion-sub-header"},o.subHeaderText)),r.createElement("div",{className:"content-wrapper","aria-labelledby":b[n],id:"lbl-"+b[n],role:"region"},o&&r.createElement(d,Object(a.a)({},o,{height:i[n],collapsableRef:t.current[n]}))))})))},d=function(e){var t;if(r.isValidElement(e.content))t=e.content;else if(e.content instanceof Array)t=e.content.map((function(e,t){return r.createElement("div",{className:"text-item",key:t},e.title&&r.createElement("div",{className:"accordion-title"},e.title),e.desc&&r.createElement("div",{className:"accordion-desc"},e.desc))}));else{var o=e.content;t=r.createElement("div",{className:"text-item"},o.title&&r.createElement("div",{className:"accordion-title"},o.title),o.desc&&r.createElement("div",{className:"accordion-desc"},o.desc))}return r.createElement("div",{className:"text-wrapper",ref:e.collapsableRef,"data-collapsed":!e.height,"aria-expanded":!!e.height,style:{height:e.height}},t)},s=o(450),m=o.n(s),l=o(863),p=r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 640 640",width:"640",height:"640"},r.createElement("defs",null,r.createElement("path",{d:"M585.08 342.54C593.39 342.54 600.1 335.82 600.1 327.51C600.1 326.01 600.1 313.99 600.1 312.49C600.1 304.18 593.39 297.46 585.08 297.46C568.91 297.46 488.06 297.46 342.54 297.46C342.49 151.99 342.46 71.18 342.45 55.01C342.45 46.7 335.73 39.99 327.42 39.99C325.92 39.99 313.9 39.99 312.4 39.99C304.09 39.99 297.37 46.7 297.37 55.01C297.38 71.18 297.41 151.99 297.46 297.46C151.99 297.51 71.18 297.54 55.01 297.55C46.7 297.55 39.99 304.27 39.99 312.58C39.99 314.08 39.99 326.1 39.99 327.6C39.99 335.91 46.7 342.63 55.01 342.63C71.18 342.62 151.99 342.59 297.46 342.54C297.46 488.06 297.46 568.91 297.46 585.08C297.46 593.39 304.18 600.1 312.49 600.1C313.99 600.1 326.01 600.1 327.51 600.1C335.82 600.1 342.54 593.39 342.54 585.08C342.54 568.91 342.54 488.06 342.54 342.54C488.06 342.54 568.91 342.54 585.08 342.54Z",id:"e9WTWunf5M"})),r.createElement("g",null,r.createElement("g",null,r.createElement("g",null,r.createElement("use",{xlinkHref:"#e9WTWunf5M"}),r.createElement("g",null,r.createElement("use",{xlinkHref:"#e9WTWunf5M",strokeWidth:"1"})))))),u=r.createElement("svg",{name:"angle-double-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},r.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"})),f=[{header:"Accordion List Item 1",subHeaderText:"Accordion Sub Header",content:{title:"Tempor incididun",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Lectus mauris ultrices eros in cursus turpis massa tincidunt."}},{header:"Accordion List Item 2",content:[{title:"Excepteur sint",desc:"Vitae suscipit tellus mauris a diam maecenas sed. Feugiat in fermentum posuere urna nec tincidunt praesent semper.Tellus id interdum velit laoreet id donec. Morbi enim nunc faucibus a pellentesque sit. Vitae congue mauris rhoncus aenean."},{title:"Duis aute",desc:"Eleifend donec pretium vulputate sapien nec sagittis. Malesuada fames ac turpis egestas.Molestie ac feugiat sed lectus vestibulum mattis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed."}]},{header:"Accordion List Item 3",content:r.createElement(r.Fragment,null,r.createElement("p",{className:"m-0"},"Ut nemo corporis inventore neque qui. Est quos facere et id praesentium ut in iusto qui. Labore vel est ab."),r.createElement("a",{href:"https://seb.se",target:"_blank"},"Link to seb.se"))}];t.default=function(){return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(m.a,{innerHTML:!0},l))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here is a sample output"),r.createElement("div",{className:"result wide"},r.createElement(i,{list:f})),r.createElement("p",null,"Here is a sample with active or collapsed item"),r.createElement("div",{className:"result wide"},r.createElement(i,{list:f,activeIndex:1})),r.createElement("p",null,"Custom icon when expanded"),r.createElement("div",{className:"result wide"},r.createElement(i,{list:f,iconRotation:"deg-90",customIconExpanded:p})),r.createElement("p",null,"Custom icon on the right"),r.createElement("div",{className:"result wide"},r.createElement(i,{list:f,customIcon:u,iconPosition:"right",iconRotation:"deg-90"})),r.createElement("p",null,"Alternative theme"),r.createElement("div",{className:"result wide"},r.createElement(i,{list:f,alternative:!0})))))}},861:function(e,t,o){var r=o(61),a=o(862);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1};r(a,n);e.exports=a.locals||{}},862:function(e,t,o){(t=o(54)(!1)).push([e.i,".custom-accordion{position:relative;background-color:#fff}.custom-accordion .accordion-item{position:relative;border-bottom:1px solid #333}.custom-accordion .accordion-item:hover{background-color:#f5f5f5}.custom-accordion .accordion-item:first-child{border-top:1px solid #333}.custom-accordion .accordion-item .header-wrapper{position:relative;display:block;cursor:pointer;min-height:48px}.custom-accordion .accordion-item .header-wrapper.with-sub-header{min-height:64px}.custom-accordion .accordion-item .header-wrapper>svg{position:absolute;width:20px;height:20px;fill:#0092E1;will-change:transform;-webkit-transition:opacity 300ms,-webkit-transform 300ms;transition:opacity 300ms,-webkit-transform 300ms;-o-transition:opacity 300ms,-o-transform 300ms;-moz-transition:transform 300ms,opacity 300ms,-moz-transform 300ms;transition:transform 300ms,opacity 300ms;transition:transform 300ms,opacity 300ms,-webkit-transform 300ms,-moz-transform 300ms,-o-transform 300ms;top:14px}.custom-accordion .accordion-item .header-wrapper>svg:last-of-type:not(:first-of-type){opacity:0;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.custom-accordion .accordion-item .header-wrapper .accordion-header{display:block;font-weight:500;padding-top:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:28px;margin:0}.custom-accordion .accordion-item .header-wrapper .accordion-sub-header{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;margin-bottom:10px}.custom-accordion .accordion-item .content-wrapper{padding:0;-webkit-transition:all 300ms ease;-o-transition:all 300ms ease;-moz-transition:all 300ms ease;transition:all 300ms ease;position:relative;overflow:hidden}.custom-accordion .accordion-item .content-wrapper .text-wrapper{position:relative;padding:0px 48px;height:auto;will-change:margin;opacity:0;-webkit-transition:opacity 200ms linear, height 200ms linear;-o-transition:opacity 200ms linear, height 200ms linear;-moz-transition:opacity 200ms linear, height 200ms linear;transition:opacity 200ms linear, height 200ms linear}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item:not(:last-child){padding-bottom:8px}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item .accordion-title{font-size:16px;font-weight:500}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item .accordion-desc{padding-top:5px;font-size:14px}.custom-accordion .accordion-item.right .header-wrapper{padding:5px 48px 5px 10px}.custom-accordion .accordion-item.right .header-wrapper>svg{right:15px}.custom-accordion .accordion-item.left .header-wrapper{padding:5px 10px 5px 48px}.custom-accordion .accordion-item.left .header-wrapper>svg{left:15px}.custom-accordion .accordion-item.deg-90 .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg)}.custom-accordion .accordion-item.deg-90-counter .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.custom-accordion .accordion-item.deg-180 .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}.custom-accordion .accordion-item.deg-180-counter .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.custom-accordion .accordion-item.active>.content-wrapper{padding-bottom:18px}.custom-accordion .accordion-item.active.deg-90 .header-wrapper>svg:first-of-type{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.custom-accordion .accordion-item.active.deg-90-counter .header-wrapper>svg:first-of-type{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg)}.custom-accordion .accordion-item.active.deg-180 .header-wrapper>svg:first-of-type{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.custom-accordion .accordion-item.active.deg-180-counter .header-wrapper>svg:first-of-type{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}.custom-accordion .accordion-item.active .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);opacity:1}.custom-accordion .accordion-item.active.transform .header-wrapper>svg:first-of-type:not(:last-of-type){opacity:0}.custom-accordion .accordion-item.active .content-wrapper .text-wrapper{opacity:1}.custom-accordion.alternative-accordion>.accordion-item{border-bottom:0}.custom-accordion.alternative-accordion>.accordion-item:hover{background-color:transparent}.custom-accordion.alternative-accordion>.accordion-item:hover .accordion-header{text-decoration:underline}.custom-accordion.alternative-accordion>.accordion-item:first-child{border-top:0}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper{min-height:auto}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper>.accordion-header{font-size:16px;color:#0092E1;padding:0}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper>svg{top:5px;width:14px}.custom-accordion.alternative-accordion>.accordion-item.right>.header-wrapper{padding:0 48px 0 10px}.custom-accordion.alternative-accordion>.accordion-item.right>.header-wrapper>svg{right:15px}.custom-accordion.alternative-accordion>.accordion-item.right>.content-wrapper>.text-wrapper{padding:0 30px 0 10px}.custom-accordion.alternative-accordion>.accordion-item.left>.header-wrapper{padding:0 10px 0 30px}.custom-accordion.alternative-accordion>.accordion-item.left>.header-wrapper>svg{left:5px}.custom-accordion.alternative-accordion>.accordion-item.left>.content-wrapper>.text-wrapper{padding:0 30px}\n",""]),e.exports=t},863:function(e,t){e.exports="<hr> <p>title: Accordion componentid: component-accordion variantid: default guid: &quot;accordion-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Accordion Component\nComponent: &quot;Accordion&quot;\nSelector: &quot;&lt;Accordion/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Accordion&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. Use this component mainly for text content. The module name of this component is <code>Accordion</code> and the selector is <code>&lt;Accordion/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Accordion list=&quot;accordionListObj&quot; /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>alternative?</td> <td><code>boolean</code></td> <td>Toggle alternative style of accordion</td> </tr> <tr> <td>className?</td> <td><code>string</code></td> <td>Element class</td> </tr> <tr> <td>activeIndex?</td> <td><code>number</code></td> <td>index of the default active item</td> </tr> <tr> <td>customIcon?</td> <td><code>JSX.Element</code></td> <td>Custom icon for the accordion trigger</td> </tr> <tr> <td>customIconExpanded?</td> <td><code>JSX.Element</code></td> <td>Custom icon to be used when expanded. This will add a transition between the two icons</td> </tr> <tr> <td>iconPosition?</td> <td><code>string</code></td> <td>Accordion icon placement<sup>1</sup></td> </tr> <tr> <td>iconTransition?</td> <td><code>string</code></td> <td>Icon transition rotation degree<sup>2</sup></td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>list</td> <td><code>Array&lt;AccrodionListItem&gt;</code><sup>3</sup></td> <td>List of accordion items</td> </tr> </tbody></table> <h2 id=footnote>Footnote</h2> <ol> <li>Icon positions supported are: <code>right</code> and <code>left</code></li> <li>Icon transitions supported are: <code>&quot;deg-180&quot;</code>, <code>&quot;deg-180-counter&quot;</code>, <code>&quot;deg-90&quot;</code>, <code>&quot;deg-90-counter&quot;</code></li> <li>Property <code>list</code> has an exported interface named <code>AccordionListItem</code>:</li> </ol> <pre><code class=language-typescript>interface AccordionListItem {\n    header: string;\n    subHeaderText?: string;\n    content?: AccordionContent | Array&lt;AccordionContent&gt; | React.ReactNode;\n}</code></pre> <p><code>AccordionListItem</code>&#39;s memeber <code>content</code> has an exported interface name <code>AccordionContent</code> and accepts a single <code>AccordionContent</code> object or an array of <code>AccordionContent</code> objects</p> <pre><code class=language-typescript>interface AccordionContent {\n    title?: string;\n    desc?: string;\n}</code></pre> "}}]);
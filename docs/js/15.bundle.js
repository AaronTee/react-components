(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1089:function(e,o){e.exports="<hr> <p>title: Dropdown componentid: component-dropdown variantid: default guid: &quot;dropdown-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Dropdown Component\nComponent: &quot;Dropdown&quot;\nSelector: &quot;&lt;Dropdown/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Dropdown&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component supports customization and configurations. The component name is <code>Dropdown</code> and the selector is <code>&lt;Dropdown/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Dropdown\n    list={this.state.list}\n    selectedValue={this.state.selectedValue}\n    onChange={(value: DropdownItem) =&gt; {\n        this.setState({ selectedValue: value })\n    }\n/&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>clearable?</td> <td><code>boolean</code></td> <td>Enables clearning the value, ignored if <code>multi</code> is enabled</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disabled status</td> </tr> <tr> <td>error?</td> <td><code>string</code></td> <td>Optional error string to be displayed under the dropdown</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>Optional label to display above the dropdown</td> </tr> <tr> <td>list</td> <td><code>Array&lt;DropdownItem&gt;</code> <sup>1</sup></td> <td>An array of all the dropdown items to display</td> </tr> <tr> <td>more?</td> <td><code>boolean</code></td> <td>Version of the component with a more menu button alligned to the right</td> </tr> <tr> <td>multi?</td> <td><code>boolean</code></td> <td>Enables selecting multiple choices</td> </tr> <tr> <td>name?</td> <td><code>string</code></td> <td>Element name</td> </tr> <tr> <td>native?</td> <td><code>boolean</code></td> <td>A mobile friendly version using native <code>&lt;select&gt;</code> html element</td> </tr> <tr> <td>onChange</td> <td><code>(value: DropdownChangeEvent) =&gt; void</code><sup>2</sup></td> <td>On change event callback</td> </tr> <tr> <td>placeholder?</td> <td><code>string</code></td> <td>Optional text to display inside the toggle button when no item selected</td> </tr> <tr> <td>searchable?</td> <td><code>boolean</code></td> <td>Enables searching</td> </tr> <tr> <td>searchPlaceholder?</td> <td><code>string</code></td> <td>Optional text to display inside the empty search bar</td> </tr> <tr> <td>selectedValue</td> <td><code>Array&lt;DropdownItem&gt; | DropdownItem</code></td> <td>An array of the currently selected dropdown item(s)</td> </tr> </tbody></table> <h2 id=important>Important</h2> <p>When <code>multi</code> and <code>native</code> props are used together the change event will return a change event as normal, however, setting the value will required processing of the change event. This is a sample implementation of it:</p> <pre><code class=language-html>&lt;Dropdown\n    list={this.state.list}\n    selectedValue={this.state.selectedValue}\n    onChange={(e: React.ChangeEvent&lt;HTMLSelectElement&gt;) =&gt; {\n        if (e &amp;&amp; e.currentTarget.selectedOptions) {\n            const values: Array&lt;DropdownItem&gt; = [];\n            let option: HTMLOptionElement;\n            for (let i = 0; i &lt; e.currentTarget.selectedOptions.length; i++) {\n                option = e.currentTarget.selectedOptions[i];\n                values.push({ label: option.label, value: option.value });\n            }\n            this.setState({ selectedValue: values });\n        }\n    }}\n/&gt;</code></pre> <p>We recommend moving this process to a method for reusability</p> <h2 id=footnote>Footnote</h2> <ol> <li><code>list</code> items has an exported interface named <code>DropdownItem</code></li> </ol> <pre><code class=language-typescript>interface DropdownItem&lt;T = any&gt; {\n    value: T;\n    label: string;\n}</code></pre> <ol start=2> <li>Dropdown change event returns either of the following depending on the type:<ul> <li>Normal: <code>DropdownItem</code></li> <li>Multi: <code>Array&lt;DropdownItem&gt;</code></li> <li>Native: <code>React.ChangeEvent&lt;HTMLSelectElement&gt;</code></li> </ul> </li> </ol> "},167:function(e,o,t){"use strict";t.r(o);var n=t(0),l=t(647),r=t(650),a=t(452),d=t.n(a),c=t(1089),s=[{value:"1",label:"Serbia"},{value:"2",label:"Nicaragua"},{value:"3",label:"Singapore"},{value:"4",label:"Guinea"},{value:"5",label:"Syrian Arab Republic"},{value:"6",label:"Tanzania"},{value:"7",label:"Anguilla"}],i=[{value:"1",label:"Mexico"},{value:"2",label:"Guernsey"},{value:"3",label:"Lithuania"},{value:"4",label:"Poland"},{value:"5",label:"Montenegro"},{value:"6",label:"Iran"},{value:"7",label:"Myanmar"}],u=[{value:"1",label:"Paraguay"},{value:"2",label:"Dominican Republic"},{value:"3",label:"Mongolia"},{value:"4",label:"Montserrat"},{value:"5",label:"Thailand"},{value:"6",label:"Japan"},{value:"7",label:"Saint Vincent and the Grenadines"}],m=[{value:"1",label:"Sierra Leone"},{value:"2",label:"Malawi"},{value:"3",label:"Marshall Islands"},{value:"4",label:"Latvia"},{value:"5",label:"Slovenia"},{value:"6",label:"Argentina"},{value:"7",label:"Solomon Islands"}];o.default=function(){var e=n.useState(null),o=e[0],t=e[1],a=n.useState([]),p=a[0],g=a[1],b=n.useState(null),w=b[0],h=b[1],f=n.useState(null),v=f[0],x=f[1],E=n.useState([]),k=E[0],y=E[1],N=n.useState(!1),C=N[0],D=N[1],I=n.useState(""),S=I[0],z=I[1],A=n.useCallback((function(){z((function(e){return null===e?"Example error message":null}))}),[z]);return n.createElement("div",{className:"route-template container"},n.createElement("div",{className:"info-holder"},n.createElement("div",{className:"info"},n.createElement("div",{className:"md-file"},n.createElement(d.a,{innerHTML:!0},c))),n.createElement("div",{className:"info"},n.createElement("h2",null,"Output"),n.createElement("p",null,"Here is the basic one:"),n.createElement("div",{className:"result"},n.createElement(l.a,{label:"Single select",list:s,selectedValue:o,onChange:function(e){return t(e)},disabled:C,error:S})),n.createElement("p",null,"Here is the multi select one with search:"),n.createElement("div",{className:"result"},n.createElement(l.a,{label:"Multi-select",name:"dropDownList2",list:i,selectedValue:p,onChange:function(e){return g(e)},searchable:!0,placeholder:"Multi option",multi:!0,disabled:C,error:S})),n.createElement("p",null,"Here is the more button version:"),n.createElement("div",{className:"result"},n.createElement(l.a,{name:"dropDownList3",list:u,selectedValue:w,onChange:function(e){return h(e)},more:!0,disabled:C,error:S})),n.createElement("p",null,"Here is the native version:"),n.createElement("div",{className:"result"},n.createElement(l.a,{label:"Native dropdown",name:"dropDownList4",list:m,selectedValue:v,onChange:function(e){x({value:e.target.value,label:m[e.target.selectedIndex].label})},native:!0,disabled:C,error:S}),n.createElement(l.a,{label:"Native dropdown",name:"dropDownList4",list:m,selectedValue:k,onChange:function(e){if(e&&e.currentTarget.selectedOptions){for(var o=[],t=void 0,n=0;n<e.currentTarget.selectedOptions.length;n++)t=e.currentTarget.selectedOptions[n],o.push({label:t.label,value:t.value});y(o)}},multi:!0,native:!0,disabled:C,error:S})),n.createElement("div",{className:"result mt-5"},n.createElement(r.a,{name:"disabled-toggle",label:"Disabled all",value:C,onChange:function(e){return D(e.target.checked)}}),n.createElement(r.a,{name:"show-error-toggle",label:"Show error messages",value:!!S,onChange:A})))))}},647:function(e,o,t){"use strict";t.d(o,"a",(function(){return s}));var n=t(62),l=t(0),r=t(114),a=(t(648),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.createElement("path",{d:"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"}))),d=l.createElement("svg",{className:"dropdown-times-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},l.createElement("path",{d:"M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z"})),c=l.createElement("svg",{className:"dropdown-more-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},l.createElement("path",{d:"M192 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm88-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"})),s=function(e){var o=l.useState(!1),t=o[0],s=o[1],i=l.useState(!1),u=i[0],m=i[1],p=l.useState(-1),g=p[0],b=p[1],w=l.useState(""),h=w[0],f=w[1],v=l.useState(""),x=v[0],E=v[1],k=l.createRef(),y=l.createRef(),N=l.createRef();l.useEffect((function(){return document.addEventListener("mousedown",C),function(){document.removeEventListener("mousedown",C)}}));var C=function(e){k.current&&!k.current.contains(e.target)&&y.current&&!y.current.contains(e.target)&&s(!1)};l.useEffect((function(){t?D():(f(""),g>-1&&b(-1))}),[t]),l.useEffect((function(){t&&D()}),[g,u]),l.useEffect((function(){E(Object(r.randomId)("dd-"))}),[]);var D=function(){I()||S()},I=function(){return!!(u&&T[g]&&T[g].current)&&(T[g].current.focus(),!0)},S=function(){N.current?N.current.focus():y.current&&y.current.focus()},z=Array.isArray(e.list);if(!e.list||!z)return console.warn("Failed to load the dropdown component. Invalid list provided.",e.list),null;var A=e.list.filter((function(e){return e&&e.hasOwnProperty("value")&&e.hasOwnProperty("label")})).map((function(o,t){var n=o.value+"-"+t,l=!1;return e.multi?e.selectedValue&&e.selectedValue.find((function(e){return e.value===o.value}))&&(l=!0):e.selectedValue&&o.value===e.selectedValue.value&&(l=!0),{dropdownItem:o,id:n,selected:l}})),L=A.map((function(o){return Object(n.a)(Object(n.a)({},o),{className:"dropdown-item custom-dropdown-item"+(e.multi?" multi":"")+(o.selected?" selected":"")})})).filter((function(e){return e.dropdownItem.label.toLowerCase().includes(h.toLowerCase())})),V=A.filter((function(e){return e.selected})).map((function(e){return e.dropdownItem})),M=V.length===A.length;e.multi&&0===h.length&&L.unshift({id:"select-all",dropdownItem:{value:"select-all",label:"Select All"},selected:M,className:"dropdown-item select-all custom-dropdown-item multi"+(M?" selected":"")});var O=e.disabled||!A.length,T=L.map((function(){return l.createRef()})),j=function(){e.onChange(null),s(!1)},q=function(o){if(e.multi){var t=e.selectedValue?e.selectedValue:[];if(-1===t.findIndex((function(e){return e.value===o.value}))){r=Object(n.a)({},o);var l=Object(n.d)(t,[r]);e.onChange(l)}else{l=t.filter((function(e){return e.value!==o.value}));e.onChange(l)}}else{var r=Object(n.a)({},o);e.onChange(r),s(!1)}},F=function(){M?e.onChange([]):e.onChange(e.list)},P=function(){return A&&0===A.length?"Empty":V&&V.length>0?M?"All selected ("+V.length+")":e.multi?1===V.length?V[0].label:V.length+" Selected":e.selectedValue.label:e.placeholder&&e.placeholder.length?e.placeholder:"Select ..."};return e.native?l.createElement("div",{className:"custom-native-dropdown"},e.label&&l.createElement("label",{className:"dropdown-label "+(O?" disabled":"")},e.label),l.createElement("select",{disabled:O,className:"form-control custom-native-dropdown"+(O?" disabled":"")+(e.className?" "+e.className:""),name:e.name,value:e.selectedValue?e.selectedValue.value:"",onChange:e.onChange,id:e.id,placeholder:e.placeholder||null,multiple:!!e.multi},e.list.map((function(e){return l.createElement("option",{key:e.value,value:e.value},e.label)}))),e.error&&l.createElement("div",{className:"alert alert-danger custom-alert"},e.error)):l.createElement(l.Fragment,null,l.createElement("div",{className:"dropdown custom-dropdown"+(O?" disabled":"")+(e.className?" "+e.className:""),id:e.id},e.label&&l.createElement("label",{className:"dropdown-label"},e.label),l.createElement("div",{onKeyDown:O?null:function(e){switch(e.key.toLowerCase()){case"tab":t&&s(!1);break;case" ":case"enter":e.preventDefault(),!t&&s(!0)}},ref:k,className:"btn btn-secondary custom-dropdown-toggle"+(t?" open":"")+(e.more?" more mx-right":"")+(O?" disabled":""),id:x,"aria-label":"Dropdown toggle: "+P(),"aria-haspopup":!0,"aria-expanded":t,tabIndex:O?-1:0,onClick:O?null:function(){s(!t)}},e.more?l.createElement("div",{className:"right-items"},l.createElement("div",{className:"dropdown-icon-holder"},c)):l.createElement(l.Fragment,null,l.createElement("div",{className:"title"},P()),l.createElement("div",{className:"right-items"},(e.clearable||e.multi)&&V.length>0?l.createElement("div",{className:"dropdown-icon-holder",onClick:O?null:function(e){e.stopPropagation(),e.preventDefault(),j()}},d):null,l.createElement("div",{className:"dropdown-icon-holder chevron"},a)))),l.createElement("div",{"aria-labelledby":x,onKeyDown:function(o){u||m(!0);var n=o.key.toLowerCase();if(t)switch(n){case"tab":case"escape":s(!1);break;case"enter":o.preventDefault(),-1!==g&&(e.multi&&0===h.length&&0===g?F():q(L[g].dropdownItem));break;case"arrowdown":o.preventDefault(),g<L.length-1&&b(g+1),g===L.length-1&&b(-1);break;case"arrowup":o.preventDefault(),-1===g&&b(L.length-1),g>0&&b(g-1),0===g&&b(-1)}},tabIndex:0,ref:y,className:"dropdown-menu custom-dropdown-menu"+(t?" show":"")+(e.more?" dropdown-menu-right":"")},e.searchable&&l.createElement(l.Fragment,null,l.createElement("input",{ref:N,type:"search",className:"search-input",name:"search-input",placeholder:e.searchPlaceholder||"Search ...",value:h,onChange:function(e){-1!==g&&b(-1),f(e.target.value)}}),l.createElement("div",{className:"dropdown-divider blue"})),L.map((function(o,t){return l.createElement(l.Fragment,{key:o.id},l.createElement("button",{tabIndex:0,ref:T[t],className:o.className+(g===t?" highlighted":""),onMouseMove:function(){g!==t&&b(t),!0===u&&m(!1)},onClick:function(n){n.preventDefault(),!1===u&&m(!0),e.multi&&0===h.length&&0===t?F():q(o.dropdownItem)}},e.multi?l.createElement("div",{tabIndex:-1,className:"custom-control"},l.createElement("input",{tabIndex:-1,type:"checkbox",className:"custom-control-input",id:o.id,name:o.id,defaultChecked:o.selected}),o.dropdownItem.label&&l.createElement("label",{tabIndex:-1,className:"custom-control-label",htmlFor:o.id},o.dropdownItem.label)):o.dropdownItem.label&&l.createElement("div",{tabIndex:-1,className:"label"},o.dropdownItem.label)),e.multi&&0===h.length&&0===t&&l.createElement("div",{className:"dropdown-divider"}))})),0===L.length&&l.createElement("a",{className:"dropdown-item custom-dropdown-item disabled"},l.createElement("div",{className:"label"},"No results")))),e.error&&l.createElement("div",{className:"alert alert-danger custom-alert"},e.error))}},648:function(e,o,t){var n=t(61),l=t(649);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},a=(n(l,r),l.locals?l.locals:{});e.exports=a},649:function(e,o,t){(o=t(54)(!1)).push([e.i,'.custom-dropdown{margin-bottom:8px}.custom-dropdown>.custom-dropdown-toggle{background-color:#fff;height:44px;min-width:100%;padding:0px;border-color:#adadad;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:16px}.custom-dropdown>.custom-dropdown-toggle>.title{font-weight:normal;color:#444}.custom-dropdown>.custom-dropdown-toggle>.right-items{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.custom-dropdown>.custom-dropdown-toggle>.right-items>.dropdown-icon-holder{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:44px;width:44px}.custom-dropdown>.custom-dropdown-toggle>.right-items>.dropdown-icon-holder>svg{will-change:transform;-webkit-transition:300ms;-o-transition:300ms;-moz-transition:300ms;transition:300ms;width:18px;height:18px;fill:#0092E1;cursor:pointer}.custom-dropdown>.custom-dropdown-toggle.open>.right-items>.dropdown-icon-holder.chevron>svg{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.custom-dropdown>.custom-dropdown-toggle:hover{border-color:#41B0EE;background-color:#fff}.custom-dropdown>.custom-dropdown-toggle:focus{border-color:#007AC7;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#fff}.custom-dropdown>.custom-dropdown-toggle:focus:active{color:#444;border-color:#007AC7;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#fff}.custom-dropdown>.custom-dropdown-toggle.more{background-color:inherit;height:44px;min-width:44px;max-width:44px;padding:0px;border-color:transparent;margin:0px 0px 0px auto;-webkit-transition:background-color 150ms;-o-transition:background-color 150ms;-moz-transition:background-color 150ms;transition:background-color 150ms}.custom-dropdown>.custom-dropdown-toggle.more>.right-items>.dropdown-icon-holder>svg{height:-webkit-calc(44px / 1.2);height:-moz-calc(44px / 1.2);height:calc(44px / 1.2);width:-webkit-calc(44px / 1.2);width:-moz-calc(44px / 1.2);width:calc(44px / 1.2);-webkit-transition:fill 150ms;-o-transition:fill 150ms;-moz-transition:fill 150ms;transition:fill 150ms}.custom-dropdown>.custom-dropdown-toggle.more>.right-items>.dropdown-icon-holder>svg:focus:active{fill:#fff}.custom-dropdown>.custom-dropdown-toggle.more:hover:not(.open){background-color:#41B0EE}.custom-dropdown>.custom-dropdown-toggle.more:hover:not(.open)>.right-items>.dropdown-icon-holder>svg{fill:#fff}.custom-dropdown>.custom-dropdown-toggle.more:focus{border-color:#007AC7}.custom-dropdown>.custom-dropdown-toggle.more:focus:active{background-color:#007AC7}.custom-dropdown>.custom-dropdown-toggle.more.open{background-color:#007AC7}.custom-dropdown>.custom-dropdown-toggle.more.open>.right-items>.dropdown-icon-holder>svg{fill:#fff}.custom-dropdown>.custom-dropdown-menu{min-width:100%;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid #007AC7;padding:0px;margin:4px 0px 14px 0px;outline:none;max-height:70vh;overflow:auto}.custom-dropdown>.custom-dropdown-menu>.dropdown-divider{margin:0px}.custom-dropdown>.custom-dropdown-menu>.dropdown-divider.blue{border-color:#007AC7}.custom-dropdown>.custom-dropdown-menu>.search-input{height:44px;padding:0px 0px 0px 16px;border:none;outline:none}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-left:16px;background:#fff;color:#444}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item:focus{outline:none;background:initial;color:initial;border:initial}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item:hover{background:initial;color:initial;border:initial}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-label,.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-label::before,.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-input::before{border-color:#444;background-color:#fff}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-label::after,.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item .custom-control .custom-control-input::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e")}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.highlighted{background-color:#41B0EE;color:#fff}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.highlighted .custom-control .custom-control-label{color:#fff}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.highlighted.selected{background-color:#007AC7;color:#fff}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.highlighted.selected .custom-control .custom-control-label::before,.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.highlighted.selected .custom-control .custom-control-input::before{color:#fff;border-color:#fff}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.selected{background-color:#fff;color:#007AC7}.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.selected .custom-control .custom-control-label::before,.custom-dropdown>.custom-dropdown-menu>.custom-dropdown-item.selected .custom-control .custom-control-input::before{color:#fff;border-color:#007AC7;background-color:#007AC7}.custom-dropdown.disabled{pointer-events:none}.custom-dropdown.disabled>.dropdown-label{color:#adadad}.custom-dropdown.disabled>.custom-dropdown-toggle{border-color:#adadad;background-color:#f8f8f8;cursor:default}.custom-dropdown.disabled>.custom-dropdown-toggle>.title{color:#adadad}.custom-dropdown.disabled>.custom-dropdown-toggle>.right-items>.dropdown-icon-holder>svg{fill:#adadad;cursor:default}.custom-dropdown.disabled>.custom-dropdown-toggle.more{border-color:transparent}.custom-dropdown.disabled>.custom-dropdown-toggle.more:hover{background-color:#f8f8f8}.custom-dropdown.disabled>.custom-dropdown-toggle.more:hover>.right-items>.dropdown-icon-holder>svg{fill:#adadad;cursor:default}.alert.custom-alert{padding:0px 2px;margin:0}.alert.custom-alert.alert-danger{color:#D81A1A;background:none;border:none;-webkit-border-radius:0px;-moz-border-radius:0px;border-radius:0px;width:100%}.custom-native-dropdown{margin-bottom:8px}.custom-native-dropdown>.form-control.disabled{border-color:#adadad;color:#adadad;background-color:#fff}.custom-native-dropdown>.dropdown-label.disabled{color:#adadad}input[type="search"]::-ms-clear{display:none;width:0;height:0}input[type="search"]::-ms-reveal{display:none;width:0;height:0}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}\n',""]),e.exports=o},650:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));var n=t(0),l=t(114),r=(t(651),function(e){var o=n.useState(""),t=o[0],r=o[1];return n.useEffect((function(){r(e.id||Object(l.randomId)("toggle-"))}),[e.id]),n.createElement("div",{className:"form-group custom-toggle"+(e.className?" "+e.className:"")},n.createElement("div",{className:"custom-control custom-slide-toggle"},n.createElement("input",{className:"custom-control-input",id:t,name:e.name,type:"checkbox",checked:e.value,onChange:e.onChange,ref:e.reference,disabled:e.disabled,"aria-checked":!!e.value,tabIndex:0,role:"switch"}),n.createElement("label",{className:"custom-control-label",htmlFor:t},e.label)))})},651:function(e,o,t){var n=t(61),l=t(652);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},a=(n(l,r),l.locals?l.locals:{});e.exports=a},652:function(e,o,t){(o=t(54)(!1)).push([e.i,".form-group.custom-toggle>.custom-control.custom-slide-toggle{display:inline-block;margin-top:10px;margin-bottom:10px}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:disabled:not(:checked)+label.custom-control-label:before{background-color:#dedede}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:checked:disabled+label.custom-control-label:before{background-color:#adadad}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:not(:disabled)+label.custom-control-label{cursor:pointer}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:before,.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:after{top:2px}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:after{-webkit-transition:left 200ms ease-in-out;-o-transition:left 200ms ease-in-out;-moz-transition:left 200ms ease-in-out;transition:left 200ms ease-in-out}\n",""]),e.exports=o}}]);
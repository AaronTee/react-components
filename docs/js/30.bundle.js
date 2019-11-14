(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1029:function(e,n,t){var o=t(1030);"string"==typeof o&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};t(58)(o,i);o.locals&&(e.exports=o.locals)},1030:function(e,n,t){(e.exports=t(53)(!1)).push([e.i,".custom-inline-link{color:#0092E1;font-weight:500;cursor:pointer}.custom-inline-link:hover{text-decoration:underline;color:#41B0EE}\n",""])},1031:function(e,n){e.exports='<hr>\n<p>title: Inline Link\ncomponentid: component-inlinelinks\nvariantid: default\nguid: &#39;inlinelinks-guid-default-component-react&#39;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Inline Link Component\nComponent: &quot;InlineLink&quot;\nSelector: &quot;&lt;InlineLink/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/InlineLink&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component replaces anchor tags. The component name is <code>InlineLink</code> and the selector is <code>&lt;InlineLink/&gt;</code>. Use it as a normal anchor tag except that you don&#39;t pass <code>href</code>, instead, you should pass an <code>onClick</code> handler to do any desired action.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;InlineLink onClick={clickHandler}&gt;Some text&lt;/InlineLink&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>Element id</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>()=&gt;void</code></td>\n<td>Click handler</td>\n</tr>\n</tbody></table>\n'},188:function(e,n,t){"use strict";t.r(n);var o=t(0),i=(t(1029),o.memo((function(e){return o.createElement("span",{className:"custom-inline-link"+(e.className?" "+e.className:""),role:"link",tabIndex:0,onClick:function(){e.onClick&&e.onClick()},id:e.id},e.children)}))),l=t(444).default,a=t(1031);n.default=function(){return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(l,{innerHTML:!0},a))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here is a sample output"),o.createElement("div",{className:"result wide"},o.createElement("div",null,o.createElement(i,{onClick:function(){return alert("Redirect or do some other action")}},"Lorem ipsum")," dolor sit amet, consectetur adipiscing elit.")))))}}}]);
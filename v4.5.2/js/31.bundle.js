(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1096:function(e,t,o){var d=o(61),r=o(1097);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};d(r,a);e.exports=r.locals||{}},1097:function(e,t,o){(t=o(54)(!1)).push([e.i,".video-holder-component>.div-tag{background-position:center;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover}\n",""]),e.exports=t},1098:function(e,t){e.exports="<hr> <p>title: Video Holder componentid: component-videoholder variantid: default guid: &quot;videoholder-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Video Holder Component\nComponent: &quot;Video&quot;\nSelector: &quot;&lt;Video/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Video&quot;\nType: Other Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component supports customization and configurations. The component name is <code>Video</code> and the selector is <code>&lt;Video/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;video\n    name=&quot;myYoutubeVideo&quot;\n    src=&quot;{youtubeVideoSrc}&quot;\n    width=&quot;535px&quot;\n    height=&quot;300px&quot;\n    sourceType=&quot;stream&quot;\n    showControls=&quot;{true}&quot;\n/&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>allowFullScreen?</td> <td><code>boolean</code></td> <td>Allow toggling full screen (default: <code>false</code>)</td> </tr> <tr> <td>autoplay?</td> <td><code>boolean</code></td> <td>Enable autoplay (some browser don&#39;t support this feature)</td> </tr> <tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>height</td> <td><code>string</code></td> <td>This is css height such as 100% or 300px</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>loop?</td> <td><code>boolean</code></td> <td>Enable loop after video is finished</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>Element name</td> </tr> <tr> <td>showControls?</td> <td><code>boolean</code></td> <td>Show controls (default: <code>false</code>)</td> </tr> <tr> <td>showInfo?</td> <td><code>boolean</code></td> <td>Show video information (<code>stream</code> only) (default: <code>false</code>)</td> </tr> <tr> <td>sourceType</td> <td><code>string</code></td> <td><code>local</code> for locally stored video, <code>stream</code> for streamed video</td> </tr> <tr> <td>src</td> <td><code>string</code></td> <td>Your image source, it can be string<sup>1</sup></td> </tr> <tr> <td>width</td> <td><code>string</code></td> <td>This is css width such as 100% or 300px</td> </tr> </tbody></table> <h2 id=footnote>Footnote</h2> <ol> <li>Video source is obtained either:<ul> <li><code>Local</code>: use <code>require()</code> method to require the video into your source code and use the returned string as <code>src</code>.</li> <li><code>Stream</code>: grab only the url from the <strong>embed</strong> sharing option and use it as <code>src</code>.</li> </ul> </li> </ol> "},1099:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/videos/sample.mp4"},200:function(e,t,o){"use strict";o.r(t);var d=o(0),r=(o(1096),function(e){return d.createElement("div",{className:"video-holder-component"+(e.className?" "+e.className:""),id:e.id},"local"===e.sourceType&&d.createElement("video",{width:e.width,height:e.height,controls:e.showControls,autoPlay:e.autoplay,loop:e.loop,muted:!!e.autoplay},d.createElement("source",{src:e.src}),"Your browser does not support the video tag."),"stream"===e.sourceType&&d.createElement("iframe",{src:e.src+"?html5=1&amp;rel=0"+(e.showControls?"&amp;controls=1":"&amp;controls=0")+(e.showInfo?"&amp;showinfo=1&amp;title=1&amp;byline=1&amp;portrait=1":"&amp;showinfo=0&amp;title=0&amp;byline=0&amp;portrait=0")+(e.loop?"&amp;loop=1":"&amp;loop=0")+(e.autoplay?"&amp;autoplay=1":"&amp;autoplay=0"),width:e.width,height:e.height,frameBorder:0,allowFullScreen:e.allowFullScreen}))}),a=o(450),l=o.n(a),n=o(1098),c=o(1099).default;t.default=function(){return d.createElement("div",{className:"route-template container"},d.createElement("div",{className:"info-holder"},d.createElement("div",{className:"info"},d.createElement("div",{className:"md-file"},d.createElement(l.a,{innerHTML:!0},n))),d.createElement("div",{className:"info"},d.createElement("h2",null,"Output"),d.createElement("p",null,"Here are sample of a locally stored video (no controls, autoplay, loop)"),d.createElement("div",{className:"result wide"},d.createElement(r,{name:"myVideo",src:c,width:"535px",height:"300px",sourceType:"local",autoplay:!0,loop:!0})),d.createElement("p",null,"Here are sample video streamed from"," ",d.createElement("em",null,d.createElement("b",null,"Vimeo™"))),d.createElement("div",{className:"result wide"},d.createElement(r,{name:"myVimeoVideo",src:"https://player.vimeo.com/video/259422408",width:"535px",height:"300px",sourceType:"stream"})),d.createElement("p",null,"Here are sample video streamed from"," ",d.createElement("em",null,d.createElement("b",null,"YouTube™"))),d.createElement("div",{className:"result wide"},d.createElement(r,{name:"myYoutubeVideo",src:"https://www.youtube.com/embed/f19fctL72CY",width:"535px",height:"300px",sourceType:"stream",showControls:!0})))))}}}]);
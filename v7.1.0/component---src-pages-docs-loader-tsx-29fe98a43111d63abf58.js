"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[8557],{92833:function(e,r,l){l.r(r),l.d(r,{default:function(){return v}});var n=l(45141),o=l(27378),a=l(30808),s=l(508),t=l.n(s),c=["size","type","toggle","fullscreen","cover","backdrop"],i=o.memo(o.forwardRef((function(e,r){var l,n=e.size,s=void 0===n?"md":n,i=e.type,p=void 0===i?"spinner":i,d=e.toggle,u=void 0===d||d,m=e.fullscreen,y=e.cover,v=e.backdrop,b=(0,a.Z)(e,c);return u&&o.createElement("div",Object.assign({},b,{ref:r,className:t()("rc","loader",(l={"loader-cover":y,"loader-fullscreen":m&&!y,"loader-backdrop":v},l["loader-"+s]=s,l["loader-"+p]=p,l),b.className),role:b.role||"status"}),o.createElement("svg",{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},"spinner"===p&&o.createElement("circle",{cx:"33",cy:"33",r:"30",fill:"none"}),"square"===p&&o.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"})),b.children)}))),p=l(28388),d=l(79854),u=[{key:"sm",label:"sm",value:"sm",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"md",label:"md",value:"md",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"lg",label:"lg",value:"lg",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],m=[{key:"spinner",label:"spinner",value:"spinner",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"square",label:"square",value:"square",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],y=[{key:"cover",label:"cover",value:"cover",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"fullscreen",label:"fullscreen",value:"fullscreen",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],v=function(){var e=(0,p.b)([{key:"controls",items:[{key:"size",label:"size",options:u,controlType:"Radio",initialValue:u[1].value},{key:"type",label:"type",options:m,controlType:"Radio",initialValue:m[0].value},{key:"display",label:"Display types",options:y,controlType:"Radio",initialValue:y[0].value},{key:"backdrop",label:"backdrop",controlType:"Checkbox",initialValue:!1},{key:"children",label:"Render children to be displayed under the loader",controlType:"Checkbox",initialValue:!1}]}]),r=e.renderForm,l=e.state.controls,a=e.patchState,s=l,t=s.size,c=s.type,v=s.backdrop,b=s.display;return o.createElement(n.Z,{mainFile:d,example:o.createElement(i,{size:t,type:c,backdrop:v,fullscreen:"fullscreen"===b&&!!l,cover:"cover"===b,onClick:function(){"fullscreen"===b&&a("controls","display",y[0].value)}},l.children&&o.createElement("p",{className:"mt-2"},"Loading...")),code:"<Loader toggle={toggle} />",controls:r()})}},79854:function(e,r,l){l.r(r),r.default='import React from "react";\nimport classnames from "classnames";\nimport "./loader.scss";\n\nexport type LoaderSize = "xs" | "sm" | "md" | "lg";\nexport type LoaderType = "spinner" | "square";\nexport type LoaderProps = JSX.IntrinsicElements["div"] & {\n    /** Loader size. Supported sizes: `xs`, `sm`, `md`, `lg` */\n    size?: LoaderSize;\n    /** Loader types. Supportes types: `spinner`, `square` */\n    type?: LoaderType;\n    /** Have the loader take over it\'s parent */\n    cover?: boolean;\n    /** Have the loader take over the screen */\n    fullscreen?: boolean;\n    /** Dims the background to indicate UI interactions are blocked */\n    backdrop?: boolean;\n    /** Show or hide the loader. Default is `true` */\n    toggle?: boolean;\n};\n\nexport const Loader: React.FC<LoaderProps> = React.memo(\n    React.forwardRef(({ size = "md", type = "spinner", toggle = true, fullscreen, cover, backdrop, ...props }: LoaderProps, ref: React.ForwardedRef<HTMLDivElement>) => {\n        return (\n            toggle && (\n                <div\n                    {...props}\n                    ref={ref}\n                    className={classnames(\n                        "rc",\n                        "loader",\n                        {\n                            "loader-cover": cover,\n                            "loader-fullscreen": fullscreen && !cover,\n                            "loader-backdrop": backdrop,\n                            [`loader-${size}`]: size,\n                            [`loader-${type}`]: type,\n                        },\n                        props.className\n                    )}\n                    role={props.role || "status"}\n                >\n                    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n                        {type === "spinner" && <circle cx="33" cy="33" r="30" fill="none" />}\n                        {type === "square" && <rect x="0" y="0" width="100%" height="100%" />}\n                    </svg>\n                    {props.children}\n                </div>\n            )\n        );\n    })\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-loader-tsx-29fe98a43111d63abf58.js.map
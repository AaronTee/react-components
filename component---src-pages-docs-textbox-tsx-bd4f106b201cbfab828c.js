"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[4098],{98422:function(e,t,n){n.r(t);var l=n(27378),o=n(45141),a=n(63606),i=n.n(a),r=n(56263),s=n(28388),c=n(75414),p={label:"None",value:"none",key:"none"},d={label:"Text",value:"text",key:"text"},u={label:"Icon",value:"icon",key:"icon"},m=[{key:"error",label:"danger",value:"danger",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"success",label:"success",value:"success",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"warning",label:"warning",value:"warning",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],b=l.memo((function(){var e=l.useState(""),t=e[0],n=e[1],a=(0,s.b)([{key:"controls",items:[{key:"leftport",initialValue:p.value,label:"Left icon or text?",options:[p,u,d],controlType:"Dropdown"},{key:"rightport",initialValue:p.value,label:"Right icon or text?",options:[p,u,d],controlType:"Dropdown"},{key:"disabled",label:"disabled",controlType:"Checkbox"},{key:"indicator",label:"indicator",controlType:"Checkbox"},{key:"indicatorType",label:"Indicator type",options:m,controlType:"Radio",initialValue:m[0].value,formElementAdditionalProps:{className:"indent pl-3 pt-2"}}]}]),b=a.renderForm,f=a.state.controls,k=a.setHidden;(0,l.useEffect)((function(){k("controls","indicatorType",!f.indicator)}),[f.indicator]);var g=l.useMemo((function(){return f.indicator?{type:f.indicatorType,message:"Indicator message"}:null}),[f.indicator,f.indicatorType]);return l.createElement(o.Z,{mainFile:c,example:l.createElement("div",{className:"w-100"},l.createElement(r.f,{value:t,label:"Element label",placeholder:"Type here",leftSlot:f.leftport===u.value?l.createElement(i(),null):f.leftport===d.value?"Kr":null,rightSlot:f.rightport===u.value?l.createElement(i(),null):f.rightport===d.value?"Kr":null,onChange:function(e){return n(e.target.value)},disabled:!!f.disabled,indicator:g})),code:'<Textbox value="Some text value" label="Some text label" />',controls:b()})}));t.default=b},75414:function(e,t,n){n.r(t),t.default='import React from "react";\nimport { randomId } from "@sebgroup/frontend-tools/randomId";\nimport classnames from "classnames";\nimport { FeedbackIndicator, Indicator } from "../FeedbackIndicator";\nimport "./textbox.scss";\n\nexport type TextboxProps = JSX.IntrinsicElements["input"] & {\n    /** Element label */\n    label?: string;\n    /** Element prefix slot */\n    leftSlot?: React.ReactNode;\n    /** Element prefix title */\n    leftSlotTitle?: string;\n    /** Callback when prefix button is clicked */\n    onLeftClick?: (event: React.MouseEvent<HTMLDivElement>) => void;\n    /** Callback when suffix button is clicked */\n    onRightClick?: (event: React.MouseEvent<HTMLDivElement>) => void;\n    /** Component associates with input ref */\n    reference?: React.RefObject<HTMLInputElement>;\n    /** Element suffix slot */\n    rightSlot?: React.ReactNode;\n    /** Element suffix title */\n    rightSlotTitle?: string;\n    /** Feedback indicator object */\n    indicator?: Indicator;\n    /** Wrapper props */\n    wrapperProps?: JSX.IntrinsicElements["div"];\n};\n/** Textbox is a component that allows user to add or edit text with extra text or icon port */\nexport const Textbox: React.FC<TextboxProps> = React.forwardRef(\n    ({ leftSlot, leftSlotTitle, onLeftClick, rightSlot, rightSlotTitle, onRightClick, indicator, wrapperProps = {}, ...props }: TextboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {\n        const [customId, setCustomId] = React.useState<string>(null);\n        const labelId: string = randomId("tbgl-");\n\n        React.useEffect(() => setCustomId(props.id ? props.id : props.label ? randomId("tbg-") : null), [props.id]);\n\n        return (\n            <div {...wrapperProps} className={classnames("rc input-box-group", wrapperProps.className)}>\n                {props.label && (\n                    <label id={labelId} className="custom-label" htmlFor={customId}>\n                        {props.label}\n                    </label>\n                )}\n                <div className={classnames("rc input-group", { disabled: props.disabled })}>\n                    <FeedbackIndicator {...indicator}>\n                        <div className="input-box-group-wrapper">\n                            {leftSlot && (\n                                <div\n                                    className={classnames("input-group-prepend", { clickable: onLeftClick })}\n                                    role={onLeftClick ? "button" : null}\n                                    onClick={onLeftClick}\n                                    tabIndex={onLeftClick ? 0 : null}\n                                    aria-hidden={onLeftClick ? null : "true"}\n                                    aria-describedby={leftSlotTitle ? null : labelId}\n                                >\n                                    <span className="input-group-text" title={leftSlotTitle}>\n                                        {leftSlot}\n                                    </span>\n                                </div>\n                            )}\n                            <input {...props} ref={ref} id={customId} className={classnames("form-control", props.className)} />\n                            {rightSlot && (\n                                <div\n                                    className={classnames("input-group-append", { clickable: onRightClick })}\n                                    onClick={onRightClick}\n                                    role={onRightClick ? "button" : null}\n                                    tabIndex={onRightClick ? 0 : null}\n                                    aria-hidden={onRightClick ? null : "true"}\n                                    aria-describedby={rightSlotTitle ? null : labelId}\n                                >\n                                    <span className="input-group-text" title={rightSlotTitle}>\n                                        {rightSlot}\n                                    </span>\n                                </div>\n                            )}\n                        </div>\n                    </FeedbackIndicator>\n                </div>\n            </div>\n        );\n    }\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-textbox-tsx-bd4f106b201cbfab828c.js.map
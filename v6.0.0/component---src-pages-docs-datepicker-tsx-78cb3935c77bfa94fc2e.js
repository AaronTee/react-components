"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[8989],{16302:function(e,n,t){t.r(n);t(40205);var a=t(27378),r=t(45141),o=t(93140),s=t(57518),u=t(38386);n.default=function(){var e=a.useState(new Date),n=e[0],t=e[1],c=(0,s.b)([{key:"controls",items:[{key:"monthPicker",label:"Month picker",description:"Switch to month picker only",controlType:"Checkbox"},{key:"forceCustom",label:"Custom date picker",description:"This picker is the automatic fallback on browsers that don't support html5 datepicker",controlType:"Checkbox"},{key:"localeCode",rulerKey:"forceCustom",condition:!0,label:"Locale code:",description:"Set a locale for the custom picker (defaults to system locale).",controlType:"Text",wrappingElement:"div",additionalProps:{className:"indent pl-3 pt-2"}}]}]),i=c[0],l=c[1].controls;return a.createElement(r.Z,{mainFile:u,example:a.createElement(o.a,{value:n,onChange:t,monthPicker:!!l.monthPicker,forceCustom:!!l.forceCustom,localeCode:l.localeCode}),code:"<Datepicker value={dateValue} onChange={setDateValue} />",controls:i()})}},38386:function(e,n,t){t.r(n),n.default='import React from "react";\nimport { padNumber } from "./formatters";\nimport classnames from "classnames";\nimport "./datepicker.scss";\n\ninterface OverriddenNativeProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {\n    value: any;\n    min?: any;\n    max?: any;\n    onChange: any;\n}\n\nexport interface DatepickerProps extends OverriddenNativeProps {\n    /** the value of the datepicker as a Date object */\n    value: Date;\n    /** On Change handler with the latest Date value */\n    onChange: (value: Date) => void;\n    /** Property sets whether a datepicker is a month picker  */\n    monthPicker?: boolean;\n    /** Property sets whether SEB styled datepicker will be rendered despite the browser used */\n    forceCustom?: boolean;\n    /** Minimum range of date that can be selected */\n    min?: Date;\n    /** Maximum range of date that can be selected */\n    max?: Date;\n    /** Locale of datepicker */\n    localeCode?: string;\n    /** Div wrapper props. NOTE: customPicker ONLY! */\n    wrapperProps?: JSX.IntrinsicElements["div"];\n    /** Props for the select element of month picker. NOTE: customPicker ONLY! */\n    customPickerSelectProps?: JSX.IntrinsicElements["select"];\n}\n\ninterface UnitNames {\n    month: string;\n    day: string;\n    year: string;\n}\n\ntype InputRenderType = "custom" | "date" | "month";\n\nexport const Datepicker: React.FunctionComponent<DatepickerProps> = React.forwardRef(\n    (\n        { monthPicker, forceCustom, className, value, min, max, disabled, onChange, localeCode = "en", wrapperProps, customPickerSelectProps, ...props }: DatepickerProps,\n        ref: React.ForwardedRef<HTMLInputElement>\n    ): React.ReactElement<void> => {\n        const [renderType, setRenderType] = React.useState<InputRenderType>("date");\n        const isValidDate = React.useCallback((d: Date): boolean => {\n            return !!(d && d instanceof Date && !isNaN(d.getTime()));\n        }, []);\n\n        const getStringFromDate = React.useCallback(\n            (d: Date, monthPicker: boolean): string => {\n                if (isValidDate(d)) {\n                    const year: string = `0000${d.getFullYear()}`.substr(-4, 4);\n                    const month: string = `00${d.getMonth() + 1}`.substr(-2, 2);\n                    const day: string = `00${d.getDate()}`.substr(-2, 2);\n\n                    return `${year}-${month}-${day}`.substr(0, monthPicker ? 7 : 10) || "";\n                } else {\n                    return "";\n                }\n            },\n            [isValidDate]\n        );\n\n        const getInputRawValue = React.useCallback(\n            (value: Date, monthPicker: boolean): string => {\n                return getStringFromDate(value, monthPicker);\n            },\n            [getStringFromDate]\n        );\n\n        const isDateInRange = React.useCallback((d: Date, min: Date, max: Date): boolean => {\n            if (!min && !max) {\n                return true;\n            } else if (min && d >= min) {\n                if (!max || (max && d <= max)) {\n                    return true;\n                } else {\n                    return false;\n                }\n            } else if (max && d <= max) {\n                return !min || (min && d >= min);\n            } else {\n                return false;\n            }\n        }, []);\n\n        const onCustomDatepickerChange = React.useCallback(\n            (day: number, month: number, year: number) => {\n                day = monthPicker ? 1 : day;\n                const dateString: string = `${padNumber(year, true)}-${padNumber(month)}-${padNumber(day)}`;\n                const date: Date = new Date(dateString);\n                // as long as all custom input fields are not null and is valid date, fire onChange\n                if (!!day && !!month && !!year && isValidDate(date) && isDateInRange(date, min, max)) {\n                    onChange(date);\n                } else {\n                    onChange(null);\n                }\n            },\n            [isDateInRange, onChange, min, max, monthPicker]\n        );\n\n        const initCustomDay = React.useCallback(\n            (value: Date, monthPicker: boolean): number => {\n                const inputRawValue: string = getInputRawValue(value, monthPicker);\n                if (!!inputRawValue) {\n                    const value: number = monthPicker ? 1 : Number(inputRawValue.substr(8, 2));\n                    return value;\n                }\n            },\n            [getInputRawValue]\n        );\n\n        const [customDay, setCustomDay] = React.useState<number>(initCustomDay(value, monthPicker));\n\n        const initCustomMonth = React.useCallback(\n            (value: Date, monthPicker: boolean): number => {\n                const inputRawValue: string = getInputRawValue(value, monthPicker);\n                if (!!inputRawValue) {\n                    const value: number = monthPicker ? 1 : Number(inputRawValue.substr(5, 2));\n                    return value;\n                }\n            },\n            [getInputRawValue]\n        );\n\n        const [customMonth, setCustomMonth] = React.useState<number>(initCustomMonth(value, monthPicker));\n\n        const initCustomYear = React.useCallback(\n            (value: Date, monthPicker: boolean): number => {\n                const inputRawValue: string = getInputRawValue(value, monthPicker);\n                if (!!inputRawValue) {\n                    const value: number = monthPicker ? 1 : Number(inputRawValue.substr(0, 4));\n                    return value;\n                }\n            },\n            [getInputRawValue]\n        );\n\n        const [customYear, setCustomYear] = React.useState<number>(initCustomYear(value, monthPicker));\n\n        const handleChangeCustomDay = React.useCallback(\n            (e: React.ChangeEvent<HTMLInputElement>): void => {\n                if (!monthPicker) {\n                    const v: number = e.target?.value && !Number.isNaN(Number(e.target?.value)) ? Number(e.target.value) : null;\n                    setCustomDay(() => {\n                        onCustomDatepickerChange(v, customMonth, customYear);\n                        return v;\n                    });\n                }\n            },\n            [customMonth, customYear, onCustomDatepickerChange]\n        );\n\n        const handleChangeCustomMonth = React.useCallback(\n            (e: React.ChangeEvent<HTMLSelectElement>): void => {\n                const v: number = e.target?.value && !Number.isNaN(Number(e.target?.value)) ? Number(e.target.value) : null;\n                setCustomMonth(() => {\n                    onCustomDatepickerChange(customDay, v, customYear);\n                    return v;\n                });\n            },\n            [customDay, customYear, onCustomDatepickerChange]\n        );\n\n        const handleChangeCustomYear = React.useCallback(\n            (e: React.ChangeEvent<HTMLInputElement>): void => {\n                const v: number = e.target?.value && !Number.isNaN(Number(e.target?.value)) ? Number(e.target.value) : null;\n                setCustomYear(() => {\n                    onCustomDatepickerChange(customDay, customMonth, v);\n                    return v;\n                });\n            },\n            [customDay, customMonth, onCustomDatepickerChange]\n        );\n\n        const getRelativeTimeFormat = React.useCallback((code: string): any => {\n            if ((Intl as any)["RelativeTimeFormat"]) {\n                try {\n                    const rtf: any = new (Intl as any).RelativeTimeFormat(code);\n                    if (rtf) {\n                        return rtf;\n                    }\n                } catch (error) {\n                    return null;\n                }\n            }\n            return null;\n        }, []);\n\n        const getLocaleOrDefault = React.useCallback((localeCode: string): Intl.DateTimeFormat => {\n            let locale: Intl.DateTimeFormat;\n            try {\n                locale = new Intl.DateTimeFormat(localeCode, { month: "long" });\n            } catch (error) {\n                console.warn(`Locale with code: ${localeCode} was not recognised. Using locale \'en\' instead.`);\n                locale = new Intl.DateTimeFormat("en", { month: "long" });\n            }\n            return locale;\n        }, []);\n\n        const unitNames: UnitNames = {\n            month: "Month",\n            day: "Day",\n            year: "Year",\n        };\n\n        const monthNames = () => {\n            const date: Date = new Date(2012, 0, 5);\n            const locale: Intl.DateTimeFormat = getLocaleOrDefault(localeCode);\n\n            const names: string[] = [unitNames.month];\n            [...Array(12)].map((_, i) => {\n                date.setMonth(i);\n                names.push(locale.format(date));\n            });\n            return names;\n        };\n\n        const customPickerOrder = () => {\n            const date: Date = new Date(2012, 0, 5);\n            const rtf: any = getRelativeTimeFormat(localeCode);\n            let order: string[] = ["day", "month", "year"];\n            const locale: Intl.DateTimeFormat = getLocaleOrDefault(localeCode);\n\n            const localeDateString: string = locale.format(date);\n            order.sort((a, b) => {\n                const positions: { day: number; month: number; year: number } = {\n                    day: localeDateString?.search(/5/g) || 0,\n                    month: localeDateString?.search(/1/g) || 1,\n                    year: localeDateString?.search(/2012/g) || 2,\n                };\n                return positions[a] - positions[b];\n            });\n\n            order?.map((unit) => {\n                unitNames[unit] =\n                    rtf\n                        ?.formatToParts(1, unit)\n                        ?.filter((x) => x.type === "literal")[1]\n                        ?.value?.trim() || unit;\n            });\n\n            return order;\n        };\n\n        const supportsInputOfType = (type: "date" | "month"): boolean => {\n            if (typeof document !== "undefined") {\n                const input: HTMLInputElement = document.createElement("input");\n                input.setAttribute("type", type);\n\n                const notADateValue: string = "not-a-date";\n                input.setAttribute("value", notADateValue);\n\n                return input.value !== notADateValue;\n            }\n\n            return false;\n        };\n\n        const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {\n            const { value: changeEventValue } = e.target;\n            const value: Date = new Date(changeEventValue);\n            if (isDateInRange(value, min, max)) {\n                onChange(value);\n                return;\n            }\n            onChange(null);\n        };\n\n        const renderCustomDatepicker = (value: Date, monthPicker: boolean, customPickerOrder: string[], unitNames: UnitNames, disabled: boolean, monthNames: string[]) => {\n            const order: string[] = monthPicker ? [...customPickerOrder.filter((x: string) => x !== "day")] : customPickerOrder;\n            return (\n                <div {...wrapperProps} ref={ref} className={classnames("input-group", "seb-datepicker-custom", wrapperProps?.className)}>\n                    {order?.map((unit: string, unitIndex: number) => {\n                        switch (unit) {\n                            case "day":\n                                return (\n                                    <input\n                                        {...props}\n                                        key={unitIndex}\n                                        className={classnames("form-control", "seb-datepicker-custom-day", className)}\n                                        type="number"\n                                        min="1"\n                                        max="31"\n                                        placeholder={unitNames.day}\n                                        disabled={disabled}\n                                        value={isDateInRange(value, min, max) ? customDay || "" : ""}\n                                        onChange={handleChangeCustomDay}\n                                    />\n                                );\n\n                            case "month":\n                                return (\n                                    <select\n                                        {...customPickerSelectProps}\n                                        key={unitIndex}\n                                        className={classnames(\n                                            "custom-select",\n                                            "seb-datepicker-custom-month",\n                                            { "rounded-left": unitIndex === 0 },\n                                            { "rounded-right": unitIndex === customPickerOrder.length - 1 },\n                                            customPickerSelectProps?.className\n                                        )}\n                                        value={isDateInRange(value, min, max) ? customMonth || "" : ""}\n                                        disabled={disabled}\n                                        onChange={handleChangeCustomMonth}\n                                    >\n                                        {monthNames.map((month: string, i: number) => {\n                                            return (\n                                                <option key={i} disabled={disabled || i === 0} value={i}>\n                                                    {month}\n                                                </option>\n                                            );\n                                        })}\n                                    </select>\n                                );\n\n                            case "year":\n                                return (\n                                    <input\n                                        {...props}\n                                        key={unitIndex}\n                                        className={classnames("form-control", "seb-datepicker-custom-year", className)}\n                                        type="number"\n                                        min="1"\n                                        placeholder={unitNames.year}\n                                        disabled={disabled}\n                                        value={isDateInRange(value, min, max) ? customYear || "" : ""}\n                                        onChange={handleChangeCustomYear}\n                                    />\n                                );\n                            default:\n                                break;\n                        }\n                    })}\n                </div>\n            );\n        };\n\n        React.useEffect(() => {\n            setRenderType(() => {\n                if (forceCustom) {\n                    return "custom";\n                }\n                if (monthPicker && supportsInputOfType("month")) {\n                    return "month";\n                }\n                if (supportsInputOfType("date")) {\n                    return "date";\n                }\n                return "custom";\n            });\n        }, [forceCustom, monthPicker]);\n\n        if (renderType === "month") {\n            return (\n                <input\n                    {...props}\n                    ref={ref}\n                    type="month"\n                    className={classnames("form-control", "seb-datepicker-native", className)}\n                    min={getStringFromDate(min, monthPicker)}\n                    max={getStringFromDate(max, monthPicker)}\n                    value={isDateInRange(value, min, max) ? getInputRawValue(value, monthPicker) : ""}\n                    disabled={disabled}\n                    onChange={handleOnChange}\n                />\n            );\n        } else if (renderType === "date") {\n            return (\n                <input\n                    {...props}\n                    ref={ref}\n                    type="date"\n                    className={classnames("form-control", "seb-datepicker-native", className)}\n                    min={getStringFromDate(min, monthPicker)}\n                    max={getStringFromDate(max, monthPicker)}\n                    value={isDateInRange(value, min, max) ? getInputRawValue(value, monthPicker) : ""}\n                    disabled={disabled}\n                    onChange={handleOnChange}\n                />\n            );\n        } else {\n            return <>{renderCustomDatepicker(value, monthPicker, customPickerOrder(), unitNames, disabled, monthNames())}</>;\n        }\n    }\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-datepicker-tsx-78cb3935c77bfa94fc2e.js.map
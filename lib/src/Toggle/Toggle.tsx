import React from "react";
import { randomId } from "@sebgroup/frontend-tools/dist/randomId";
import classnames from "classnames";
import "./toggle.scss";

export type ToggleProps = JSX.IntrinsicElements["input"] & {
    /** Element label */
    label?: string;
    /** to set if the toggle is inline with other element */
    inline?: boolean;
    /** properties that related to div element */
    wrapperProps?: JSX.IntrinsicElements["div"];
};
/** A Slide toggle allows the user to change between two states */
export const Toggle: React.FC<ToggleProps> = ({ wrapperProps, label, inline, ...props }: ToggleProps) => {
    const [id, setId] = React.useState<string>(props.id);

    React.useEffect(() => setId(props.id || (!!label ? randomId("toggle-") : null)), [props.id]);

    return (
        <div {...wrapperProps} className={classnames("rc", "custom-control", "custom-slide-toggle", { inline }, wrapperProps?.className)}>
            <input {...props} className={classnames("custom-control-input", props.className)} id={id} type="checkbox" role={props.role || "switch"} />
            {label && (
                <label className="custom-control-label" htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};

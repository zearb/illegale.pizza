import React from "react";

const Button = ({
    disabled,
    loading,
    children,
    showIconRight,
    className,
    ...rest
}) => {

    return (
        <button
            disabled={disabled}
            className={`btn-style ${className}`}
            {...rest}
        >
            {loading && (
                <div class="loadingio-spinner-eclipse-fv54pm0wn1t">
                    <div class="ldio-r53camnzr7b">
                    <div></div>
                    </div>
                </div>
                )
            }
            {children}
        </button>
    );
};

export default Button;

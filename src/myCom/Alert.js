import React from 'react'

export const Alert = (props) => {
    let alertClass = `alert alert-${props.isSuccess ? "success" : "danger"} alert-dismissible fade show`;
    return (
        <div>
            <div class={alertClass} role="alert">
                <strong>{props.title} !</strong> {props.about}.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

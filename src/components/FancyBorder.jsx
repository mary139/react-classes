import React from "react";

function FancyBorder(props) {
    return (
        <div style={{ border: `3px dotted ${props.color}`, padding: '40px' }} >
            {props.children}
        </div>
    );
}

export default FancyBorder
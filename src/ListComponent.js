import React from "react";
import PropTypes from "prop-types";

function ListComponent(props) {
    return(
        <ul>
	        <li><span> First element of the list is {props.first}</span></li>
            <li><span> Second element of the list is {props.second}</span></li>
            <li><span> Third element of the list is {props.third}</span></li>
        </ul>
    );
}

ListComponent.propTypes = {
    first: PropTypes.string.isRequired,
    second: PropTypes.string,
    third: PropTypes.number
}

export default ListComponent;
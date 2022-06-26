import React from 'react';
import PropTypes from 'prop-types';

const Note = props => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.content}</td>
            <td>
                {props.date.getDate()}.{props.date.getMonth() + 1}.
                {props.date.getFullYear()}
            </td>
        </tr>
    );
};

Note.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
};

export default Note;
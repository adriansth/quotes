import React from 'react';

export default function Quote(props) {
    return(
            <div className="quote">
                <div className="quote-text">"{props.quote}"</div>
                <div className="author-text">- {props.author}</div>
            </div>
    );
}
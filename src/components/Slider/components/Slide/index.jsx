import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
    const { src, text } = props;

    return (
        <div className="slide">
            { text && <p>{text}</p> }
            { src && <img className="slide-bg" src={src} alt="slide" /> }
        </div>
    );
}

Slide.propTypes = { 
    src: null || PropTypes.string,
    text: null || PropTypes.string
}

export default React.memo(Slide);

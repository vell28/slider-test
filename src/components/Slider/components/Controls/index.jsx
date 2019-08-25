import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SliderControl = (props) => {
    const { dots, mode, setSliderAction } = props;

    const handleDotsChange = () => {
        setSliderAction({ dots: !dots });
    }

    const handleModeChange = (name) => {
        mode !== name && setSliderAction({ mode: name });
    }

    const modeTitle = [ 'Both', 'Image', 'Text' ];

    return (
        <div className="slider-control-wrap">
            <div className="dots-control-wrap">
                <button onClick={ handleDotsChange }>Dots</button>
            </div>

            <div className="mode-control-wrap">
                { modeTitle.map((item, i) => (
                    <button 
                        key={ i } 
                        onClick={ () => handleModeChange(item) }
                        className={ mode === item ? 'mode-control-btn active' : 'mode-control-btn' }
                    >
                        { item }
                    </button>
                ))}
                
            </div>
        </div>
    )
}

SliderControl.propTypes = { 
    dots: PropTypes.bool,
    mode: PropTypes.string,
    setSliderAction: PropTypes.func
}

export default React.memo(SliderControl);
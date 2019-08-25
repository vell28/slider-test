/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';

import {
    Slide,
    SliderControl
} from './components';
import './styles.css';

const SliderComponent = (props) => {
    const [ activeImg, setImg ] = useState(0);
    const [ activeText, setText ] = useState(0);

    const { 
        mode,
        slides,
        dots,
        activeSlide,
        setSliderAction
    } = props;

    const settings = {
        dots,
        initialSlide: 0,
        beforeChange: (current, next) => {
            setSliderAction({ activeSlide: next });

            mode === 'Image' && setImg(next);
            mode === 'Text' && setText(next);

            if (mode === 'Both') {
                setImg(next);
                setText(next);
            }
        }
    };

    useEffect(() => {
        activeImg !== activeSlide && setImg(activeSlide);
        activeText !== activeSlide && setText(activeSlide);

    }, [ mode ]);

    return (
        <>
            <SliderControl 
                mode={mode}
                dots={dots}
                setSliderAction={ setSliderAction }
            />

            {!!slides.length &&
                <div 
                    className="slider"
                    style={ { background: `url(${slides[activeImg].src})` } }
                >
                    {mode ==='Image' &&
                        <p className="active-text">
                            {slides[activeText].text}
                        </p>
                    }

                    <SlickSlider {...settings}>
                        {slides.map(slide =>
                            <Slide 
                                key={slide.id}
                                text={ mode !=='Image' ? slide.text : null }
                                src={ mode !=='Text' ? slide.src : null }
                            />
                        )}
                    </SlickSlider>
                </div>
            }
        </>
    );
}

SliderComponent.propTypes = { 
    dots: PropTypes.bool,
    activeSlide: PropTypes.number,
    mode: PropTypes.string,
    slides: PropTypes.array,
    setSliderAction: PropTypes.func
}

export default React.memo(SliderComponent);

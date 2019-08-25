import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import SliderComponent from '../../components/Slider';
import {
    getDots,
    getActiveSlide,
    getMode,
    getSlides
} from '../../reducers/slider/selectors';
import { setSliderAction } from '../../actions';

const Slider = (props) => {

    return(
        <SliderComponent { ...props }/>
    )
}

Slider.propTypes = { 
    dots: PropTypes.bool,
    activeSlide: PropTypes.number,
    mode: PropTypes.string,
    slides: PropTypes.array,
    setSliderAction: PropTypes.func
}

const mapStateToProps = state => ({
    dots: getDots(state),
    activeSlide: getActiveSlide(state),
    mode: getMode(state),
    slides: getSlides(state)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
        setSliderAction 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
import { handleActions } from 'redux-actions';

import { SET_SLIDER_CONFIG } from '../../actions';
import ITEMS from './mock';

const defaultState = {
    dots: true,
    activeSlide: 0,
    mode: 'Both',
    slides: ITEMS
};

export default handleActions({
    [SET_SLIDER_CONFIG]: (state, action) => ({
        ...state,
        ...action.payload
    }),
}, defaultState);
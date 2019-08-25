import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools }                   from 'redux-devtools-extension';
import thunk                                     from 'redux-thunk';
import rootReduser                               from '../reducers';

export const configureStore = () => {

    const env = process.env.NODE_ENV;
    
    const composeEnhancers: any =  env === 'development' ? composeWithDevTools : compose;

    const store = createStore(
        rootReduser,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
        
    return { store };
};

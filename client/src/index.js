import reactDom from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {createstore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

// const store=createstore(reducers,compose(applyMiddleware(thunk)));
reactDom.render(
    // <Provider store={store}>
<BrowserRouter><App/></BrowserRouter>
    
    //  </Provider>
,document.getElementById("root"));
import React from "react";
import { Provider } from 'react-redux';
import Users from './Components/Users/Users.jsx';
import configureStore from './store/configureStore';

import './App.css';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <div className={'App'}>
                <h1>test</h1>
                <Users />
            </div>
        </Provider>
    );
};

export default App;
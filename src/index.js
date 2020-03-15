import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { LocaleProvider, message } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import App from './app';
import './css/index.less';
moment.locale('zh-cn');
message.config({
    top: 70,
});

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <Router>
                <App />
            </Router>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);


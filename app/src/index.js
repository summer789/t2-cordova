import '@babel/polyfill';
import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/zh.js';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import React from 'react';
import dva from 'dva';
import FastClick from 'fastclick';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './index.css';
import RouterConfig from './router';

const lanuague = localStorage.lanuague || window.navigator.language || 'zh';
if (lanuague === 'en') {
  addLocaleData(enLocaleData);
} else {
  addLocaleData(zhLocaleData);
}

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
// app.router(require('./router'));
app.router(({ history }) => {
  return (
    <RouterConfig history={history} />
  );
});

// 5. Start
app.start('#root');
FastClick.attach(document.body);

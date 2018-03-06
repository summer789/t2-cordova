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


/* eslint-disable */
/**
 * 用于实现rem布局
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/* eslint-disable */

/**
 * 初始化多语言支持,启动dva渲染
 */

function startApp() {
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
}

// 检测是否真机运行
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

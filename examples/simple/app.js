import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouterModes } from 'x-react-router';
import CommonPages from '../__com__';

const { Home, Profile, Setting } = CommonPages;

function run() {
  const Footer = (
    <footer>
      <a href="https://www.baidu.com">Baidu.com</a>
      <a href="https://www.taobao.com">Taobao.com</a>
      <a href="https://www.qq.com">Tencent.com</a>
    </footer>
  );
  const prefix = 'simple';
  ReactDOM.render(
    <Router prefix={prefix}>
      <Route path="/(home)?" component={Home} link-prefix={prefix} />
      <Route path="/(home)?" component={Footer} />
      <Route path="/profile" component={Profile} link-prefix={prefix} />
      <Route path="/setting" component={Setting} link-prefix={prefix} />
    </Router>
    , document.getElementById('container'));
}

function init() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return run();
  }
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
  } else {
    window.attachEvent('onload', run);
  }
}

// Run the application when DOM is ready
init();

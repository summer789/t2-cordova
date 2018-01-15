import React, { Component } from 'react';
import { Router, Route, Switch } from 'dva/router';
import { IntlProvider } from 'react-intl';
import queryString from 'query-string';
import IndexPage from './routes/IndexPage';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';

class RouterConfig extends Component {
  render() {
    const { history } = this.props;
    const { search } = history.location;
    const query = queryString.parse(search);
    const locale = query.locale || 'zh';
    return (
      <IntlProvider key={locale} locale={locale} messages={locale === 'zh' ? zhCN : enUS}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={IndexPage} />
          </Switch>
        </Router>
      </IntlProvider>
    );
  }
}

export default RouterConfig;

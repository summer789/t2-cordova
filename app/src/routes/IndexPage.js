import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import ons from 'onsenui';
import { Page, Button, SearchInput, Navigator } from 'react-onsenui';
import IndexPage1 from './IndexPage1';

const messages = defineMessages({
  enUSDescription: {
    id: 'menu.item_en_us_description',
    defaultMessage: 'The default locale of this example app.',
  },
  enUPPERDescription: {
    id: 'menu.item_en_upper_description',
    defaultMessage: 'The fake, all uppercase "locale" for this example app.',
  },
});

class IndexPage extends Component {
  handleClick = () => {
    ons.notification.alert(this.props.text);
  }
  pushPage = () => {
    this.props.navigator.pushPage({ component: IndexPage1, props: { key: 'IndexPage1' } });
  }
  changeLanuague = (lan) => {
    this.props.dispatch(routerRedux.push({
      pathname: '/',
      search: queryString.stringify({ locale: lan }),
    }));
    localStorage.lanuague = lan;
    window.location.reload();
  }
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Page key="IndexPage">
        <SearchInput
          onChange={(e) => {
            if (e && e.type === 'change') {
              this.props.dispatch({
                type: 'example/search',
                payload: {
                  id: e.target.value,
                },
              });
            }
          }}
        />
        <FormattedMessage
          id="indexPage.hello"
          description="say hello to Howard."
          defaultMessage="Hello, Howard"
        />
        <Button onClick={this.handleClick}>Tap me!</Button>
        <Button onClick={this.pushPage}>to test</Button>
        <Button onClick={() => this.changeLanuague('en')}>change language</Button>
        <Button onClick={() => this.changeLanuague('zh')}>切换语言</Button>
        <Button>{formatMessage(messages.enUSDescription)}</Button>
        <Button>{formatMessage(messages.enUPPERDescription)}</Button>
      </Page>
    );
  }
}

function mapStateToProps({ example }) {
  return {
    text: example.text,
  };
}

/* eslint-disable */
export default class extends React.Component {
  renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ component: injectIntl(connect(mapStateToProps)(IndexPage)) || null, props: { key: 'IndexPage' } }}
        renderPage={this.renderPage}
      />
    );
  }
}
